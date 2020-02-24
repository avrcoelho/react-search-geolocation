const axios = {
  get: jest.fn(),
  create: () => axios,
};

export default axios;
