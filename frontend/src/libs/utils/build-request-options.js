import { REQUEST_HEADERS, REQUEST_METHODS } from '../../constants';

const { PATCH, POST } = REQUEST_METHODS;

const buildRequestOptions = (id, data) => {
  const method = id ? PATCH : POST;

  return {
    headers: REQUEST_HEADERS,
    method,
    body: JSON.stringify(data),
  };
};

export default buildRequestOptions;
