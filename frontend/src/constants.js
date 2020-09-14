const CONTACTS_PATH = '/contacts/';

const CONTACT_PAGE_ICONS = {
  ADD_ICON: 'address-card',
  EDIT_ICON: 'user-plus',
};

const CONTACT_PAGE_TITLES = {
  ADD: 'ADD CONTACT',
  EDIT: 'EDIT CONTACT',
};

const INITIAL_CONTACT_DATA = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
};

const PROPS_TO_DISPLAY = [
  { key: 'first_name', title: 'First name' },
  { key: 'last_name', title: 'Last name' },
  { key: 'email', title: 'Email' },
  { key: 'phone_number', title: 'Phone number' },
];

const REQUEST_HEADERS = { 'content-type': 'application/json; charset=UTF-8' };

const REQUEST_METHODS = {
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  POST: 'POST',
};

const TOAST_APPEARANCE = {
  ERROR: 'error',
  SUCCESS: 'success',
};

const TOAST_SUCCESS_MESSAGES = {
  ADDED: `Contact added successfully`,
  DELETED: `Contact deleted successfully`,
  UPDATED: `Contact updated successfully`,
};

// TESTS CONSTANTS

const MOCKED_CONTACTS = [
  {
    id: 1,
    first_name: 'Ragnar',
    last_name: 'Lodbrok',
    email: 'vikings@mocked.com',
    phone_number: '+ 00 00 01',
  },
  {
    id: 2,
    first_name: 'Björn',
    last_name: 'Ironside',
    email: 'vikings@mocked.com',
    phone_number: '+ 00 00 02',
  },
];

export {
  CONTACTS_PATH,
  CONTACT_PAGE_ICONS,
  CONTACT_PAGE_TITLES,
  INITIAL_CONTACT_DATA,
  PROPS_TO_DISPLAY,
  REQUEST_HEADERS,
  REQUEST_METHODS,
  TOAST_APPEARANCE,
  TOAST_SUCCESS_MESSAGES,
  MOCKED_CONTACTS,
};
