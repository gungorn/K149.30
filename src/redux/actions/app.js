import * as constants from '~/redux/constants';

export const defaultAction = payload => {
  return {
    type: constants.DEFAULT_ACTION,
    payload,
  };
};

// export const requestLogin = payload => {
//   return async () => {
//     //async işlemlerin yapılacağı yer

//     return {
//       type: constants.REQUEST_LOGIN,
//       payload,
//     };
//   };
// };

export const requestLoginx = payload => async () => {
  //async işlemlerin yapılacağı yer

  return {
    type: constants.REQUEST_LOGIN,
    payload,
  };
};
