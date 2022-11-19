import endpoints, { baseurl } from '~/api/endpoints';
import { post } from './service';

// export const login = async (username, password) => {
//   let responseObj;

//   try {
//     const response = await fetch(baseurl + endpoints.login, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });

//     responseObj = await response.json();

//     return responseObj;
//   } catch (error) {
//     alert('LOGIN ÇALIŞMADI');
//   }
// };

export const login = async (username, password) => {
  let responseObj = await post(endpoints.login, JSON.stringify({ username, password }));

  //response ile ilgili işlemler

  if (responseObj.success) {
    global.token = responseObj.token;
  }

  return responseObj;
};
