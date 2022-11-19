import * as constants from '~/redux/constants';

const initialState = {
  defaultParameter: false,
};

const app = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case constants.DEFAULT_ACTION: {
      return { ...state, defaultParameter: actionObj.payload };
    }

    default:
      return state;
  }
};

export { app };
