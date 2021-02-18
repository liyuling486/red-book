import request from 'axios'

request.create({
  timeout: 1000 * 60
})

export default request