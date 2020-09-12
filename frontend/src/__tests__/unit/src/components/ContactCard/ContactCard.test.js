import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import ContactCard from '../../../../../components/ContactCard';
import { MOCKED_CONTACTS } from '../../../../../constants';
import { getComponentWrapper } from '../../../../../utils/test';

const onClickDeleteContact = jest.fn();

const setup = () => {
  const mockedProps = { ...MOCKED_CONTACTS[0], onClickDeleteContact };
  const wrappedComponent = getComponentWrapper(ContactCard, mockedProps);
  const _render = render(wrappedComponent);
  return { ..._render };
};

describe('ContactCard component', () => {
  it('should render without throwing an error & match snapshot', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call mocked function on click delete icon', () => {
    const { getByTestId } = setup();
    const deleteIcon = getByTestId('delete-icon');

    fireEvent.click(deleteIcon);
    expect(onClickDeleteContact).toHaveBeenCalled();
  });
});
