import '@testing-library/jest-dom';
import { render, act } from '@testing-library/react';
import ContactsFactory from '../../../../../components/ContactsFactory';
import { MOCKED_CONTACTS } from '../../../../../constants';
import { getComponentWrapper } from '../../../../../utils/test';

// TODO ADD MORE TESTS
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCKED_CONTACTS),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

const setup = () => {
  const wrappedComponent = getComponentWrapper(ContactsFactory);
  const _render = render(wrappedComponent);
  return { ..._render };
};

describe('ContactsFactory component', () => {
  it('should render without throwing an error & match snapshot', async () => {
    await act(async () => {
      const { asFragment } = await setup();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
