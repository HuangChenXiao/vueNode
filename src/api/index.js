import fetch from '@/utils/fetch'

export function addUser(method, data) {
  return fetch({
    url: '/api/user/addUser',
    method: 'post',
    data
  })
}