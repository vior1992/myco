import {
  CONTACTS_PATH,
  TOAST_APPEARANCE,
  TOAST_SUCCESS_MESSAGES,
} from '../../constants';

const { ERROR, SUCCESS } = TOAST_APPEARANCE;
const { ADDED, DELETED, UPDATED } = TOAST_SUCCESS_MESSAGES;

const conctactsRepository = {
  baseUrl: process.env.REACT_APP_API_URL,
  getContacts: async ({ addToast }) => {
    const response = await fetch(
      `${conctactsRepository.baseUrl}${CONTACTS_PATH}`
    );
    const data = await response.json();

    if (data.error) {
      addToast(data.error, { appearance: ERROR, autoDismiss: true });
      return [];
    }

    return data;
  },
  getContact: async ({ id, addToast, history }) => {
    const response = await fetch(
      `${conctactsRepository.baseUrl}${CONTACTS_PATH}${id}`
    );
    const data = await response.json();

    if (data.error) {
      addToast(data.error, { appearance: ERROR, autoDismiss: true });
      history.push(CONTACTS_PATH);
    }

    return data;
  },
  updateContact: async ({ id, options, addToast, setErrors }) => {
    const response = await fetch(
      `${conctactsRepository.baseUrl}${CONTACTS_PATH}${id}`,
      options
    );
    const data = await response.json();

    if (response.status === 422) {
      setErrors(data);
      return false;
    } else if (response.status === 404) {
      addToast(response.statusText, { appearance: ERROR, autoDismiss: true });
      return false;
    }

    const toastMessage = id ? UPDATED : ADDED;

    addToast(toastMessage, {
      appearance: SUCCESS,
      autoDismiss: true,
    });

    return true;
  },
  deleteContact: async ({ id, addToast }) => {
    const response = await fetch(
      `${conctactsRepository.baseUrl}${CONTACTS_PATH}${id}`,
      { method: 'DELETE' }
    );

    if (response.status === 404) {
      addToast(response.statusText, { appearance: ERROR, autoDismiss: true });
      return;
    }

    addToast(DELETED, {
      appearance: SUCCESS,
      autoDismiss: true,
    });
  },
};

export default conctactsRepository;
