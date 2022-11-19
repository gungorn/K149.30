import * as constants from '~/redux/constants';

import * as auth from '~/api/auth';

export const defaultAction = payload => {
  return {
    type: constants.DEFAULT_ACTION,
    payload,
  };
};

export const setApp = (key, value) => ({ type: constants.SET_APP, key, value });

// export const requestLogin = payload => {
//   return async () => {
//     //async işlemlerin yapılacağı yer

//     return {
//       type: constants.REQUEST_LOGIN,
//       payload,
//     };
//   };
// };

export const requestLogin = payload => async (dispatch, getState) => {
  //async işlemlerin yapılacağı yer
  const { username, password } = getState().app;

  console.log('REQUEST BAŞLADI');

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: true });

  const { data, status, success } = await auth.login(username, password);

  dispatch({ type: constants.SET_APP, key: 'loginLoading', value: false });

  if (success) {
    dispatch({
      type: constants.REQUEST_LOGIN,
      payload: {
        userInfo: {
          email: data.email,
          firstName: data.firstName,
          image: data.image,
        },
      },
    });
  } else {
  }
};
