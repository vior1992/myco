import contactsRepository from './contactsRepository';
import { MOCKED_CONTACTS, TOAST_SUCCESS_MESSAGES } from '../../constants';

const { ADDED, DELETED } = TOAST_SUCCESS_MESSAGES;

describe('contactsRepository', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  beforeEach(() => {
    fetch.mockClear();
    mockedToast.mockClear();
  });

  const mockedToast = jest.fn();
  const toastErrorOptions = { appearance: 'error', autoDismiss: true };
  const toastSuccessOptions = { appearance: 'success', autoDismiss: true };

  describe('getContacts case', () => {
    it('should return expected value', async () => {
      window.fetch.mockResolvedValueOnce({
        json: async () => MOCKED_CONTACTS,
      });

      const data = await contactsRepository.getContacts({
        addToast: mockedToast,
      });

      expect(data).toEqual(MOCKED_CONTACTS);
    });

    it('should call toast mocked function when error', async () => {
      const error = 'getContacts mocked error';

      window.fetch.mockResolvedValueOnce({
        json: async () => ({ error }),
      });

      await contactsRepository.getContacts({
        addToast: mockedToast,
      });

      expect(mockedToast).toHaveBeenCalledWith(error, toastErrorOptions);
    });
  });

  describe('getContact case', () => {
    const history = { push: jest.fn() };

    it('should return expected value', async () => {
      window.fetch.mockResolvedValueOnce({
        json: async () => MOCKED_CONTACTS[0],
      });

      const data = await contactsRepository.getContact({
        addToast: mockedToast,
        id: 1,
        history,
      });

      expect(data).toEqual(MOCKED_CONTACTS[0]);
    });

    it('should call toast & history.push mocked functions when error', async () => {
      const error = 'getContact mocked error';

      window.fetch.mockResolvedValueOnce({
        json: async () => ({ error }),
      });

      await contactsRepository.getContact({
        addToast: mockedToast,
        id: 1,
        history,
      });

      expect(mockedToast).toHaveBeenCalledWith(error, toastErrorOptions);
      expect(history.push).toHaveBeenCalledWith('/contacts/');
    });
  });

  describe('updateContact case', () => {
    const setErrors = jest.fn();

    it('should call toast mocked function & return true', async () => {
      window.fetch.mockResolvedValueOnce({
        json: async () => {},
      });

      const data = await contactsRepository.updateContact({
        addToast: mockedToast,
        id: '',
        options: {},
        setErrors,
      });

      expect(data).toEqual(true);
      expect(mockedToast).toHaveBeenCalledWith(ADDED, toastSuccessOptions);
    });

    it('should call setErrors mocked function and return false when error (status 422)', async () => {
      const error = { first_name: 'updateContacts mocked error' };

      window.fetch.mockResolvedValueOnce({
        status: 422,
        json: async () => error,
      });

      const data = await contactsRepository.updateContact({
        addToast: mockedToast,
        id: 1,
        options: {},
        setErrors,
      });

      expect(data).toEqual(false);
      expect(setErrors).toHaveBeenCalledWith(error);
    });

    it('should call toast mocked function and return false when error (status 404)', async () => {
      const error = 'updateContacts mocked error';

      window.fetch.mockResolvedValueOnce({
        status: 404,
        statusText: error,
        json: async () => {},
      });

      const data = await contactsRepository.updateContact({
        addToast: mockedToast,
        id: 1,
        options: {},
        setErrors,
      });

      expect(data).toEqual(false);
      expect(mockedToast).toHaveBeenCalledWith(error, toastErrorOptions);
    });
  });

  describe('deleteContact case', () => {
    it('should call toast mocked function (success)', async () => {
      window.fetch.mockResolvedValueOnce({
        json: async () => {},
      });

      await contactsRepository.deleteContact({
        addToast: mockedToast,
        id: 1,
      });

      expect(mockedToast).toHaveBeenCalledWith(DELETED, toastSuccessOptions);
    });

    it('should call toast mocked function (error)', async () => {
      const error = 'deleteContact mocked error';

      window.fetch.mockResolvedValueOnce({
        status: 404,
        statusText: error,
        json: async () => {},
      });

      await contactsRepository.deleteContact({
        addToast: mockedToast,
        id: 1,
      });

      expect(mockedToast).toHaveBeenCalledWith(error, toastErrorOptions);
    });
  });
});
