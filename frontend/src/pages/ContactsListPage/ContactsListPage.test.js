import { render, act, screen, fireEvent } from '@testing-library/react';
import ContactsListPage from './ContactsListPage';
import { MOCKED_CONTACTS } from '../../constants';
import { getComponentWrapper } from '../../libs/test-utils';

const setup = () => {
  const wrappedComponent = getComponentWrapper({ Component: ContactsListPage });
  const _render = render(wrappedComponent);
  return { ..._render };
};

describe('ContactsListPage component', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  beforeEach(() => {
    fetch.mockClear();
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => MOCKED_CONTACTS,
    });
  });

  it('should render without throwing an error & match snapshot', async () => {
    await act(async () => {
      const { asFragment } = setup();
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should delete contact on click delete icon', async () => {
    await act(async () => {
      setup();
    });

    const [deleteIcon] = screen.getAllByTestId('delete-icon');
    fireEvent.click(deleteIcon);

    expect(window.fetch).toHaveBeenCalledWith(
      'http://localhost:3001/api/contacts/1',
      expect.objectContaining({
        method: 'DELETE',
      })
    );
  });
});
