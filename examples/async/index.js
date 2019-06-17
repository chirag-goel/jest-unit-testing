import request from './request';
console.log(request);

export function getUserName(userID) {
  return request('/users/' + userID).then(user => user.name);
}