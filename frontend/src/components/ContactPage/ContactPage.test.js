import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactPage from './ContactPage';
import { MOCKED_CONTACTS } from '../../constants';
import { getComponentWrapper } from '../../libs/test-utils';

const setup = (initialRoute) => {
  const wrappedComponent = getComponentWrapper({
    Component: ContactPage,
    initialRoute,
  });
  const _render = render(wrappedComponent);
  return { ..._render };
};

describe('ContactPage component', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const onSubmit = jest.fn((e) => e.preventDefault);

  it('should render without throwing an error & match snapshot', () => {
    const { asFragment } = setup('/contacts');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display error message if on submit request params not fil validations', async () => {
    const expectedValue = 'mocked test error';
    window.fetch.mockResolvedValueOnce({
      status: 422,
      json: async () => ({
        first_name: [expectedValue],
      }),
    });

    setup('/contacts');

    await waitFor(() => {
      const submit = screen.getByRole('button');
      fireEvent.click(submit);
    });

    const error = screen.getByText(expectedValue);
    expect(error).toBeInTheDocument();
  });

  it('should trigger handleOnChange function when input type', () => {
    const expectedValue = 'component test';

    setup('/contacts');

    const input = screen.getByRole('textbox', { name: 'First name' });
    expect(input.value).toEqual('');

    fireEvent.change(input, {
      target: {
        value: expectedValue,
      },
    });

    expect(input.value).toEqual(expectedValue);
  });

  it('should trigger handleOnSubmit function when submit', async () => {
    window.fetch.mockResolvedValueOnce({
      json: async () => MOCKED_CONTACTS[0],
    });
    window.fetch.mockResolvedValueOnce({
      json: async () => true,
    });

    setup('/contacts/1');

    waitFor(() => {
      const submit = screen.getByRole('button');
      fireEvent.click(submit);

      expect(onSubmit).toHaveBeenCalled();
    });

    fetch.mockClear();
  });
});
