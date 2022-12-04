import * as constants from '~/redux/constants';

const initialState = {
  selectedTheme: 'dark', //dark | light

  defaultParameter: false,
  username: 'atuny0',
  password: '9uQFF1Lh',

  userInfo: {},

  loginStatus: false,
  loginLoading: false,

  products: {
    list: [],
    limit: 0,
    total: 0,
    skip: 0,
  },
};

const app = (state = initialState, { type, payload, key, value }) => {
  switch (type) {
    case constants.DEFAULT_ACTION: {
      return { ...state, defaultParameter: payload };
    }

    case constants.SET_APP: {
      return { ...state, [key]: value };
    }

    case constants.REQUEST_LOGIN_USER_WITH_FB:
    case constants.REQUEST_CREATE_USER_WITH_FB:
    case constants.REQUEST_LOGIN: {
      return { ...state, password: undefined, userInfo: payload.userInfo, loginStatus: true };
    }

    case constants.REQUEST_GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: { limit: payload.limit, total: payload.total, skip: payload.skip, list: payload.products },
      };
    }

    case constants.REQUEST_GET_PRODUCTS_FB: {
      return {
        ...state,
        fbProducts: payload,
      };
    }

    case constants.FIREBASE_PRODUCTS_LISTENER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export { app };
