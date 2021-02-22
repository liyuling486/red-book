import request from 'axios'
import { Notify } from 'vant'

request.create({
  timeout: 1000 * 60
})
request.interceptors.request.use(config => {
  return config
})
request.interceptors.response.use(response => {
  const data = response.data
  if (response.status !== 200 || data.err !== 0) {
    Notify('操作异常')
    return Promise.reject()
  }
  return response.data
})

export default request