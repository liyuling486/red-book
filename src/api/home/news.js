import request from '@/utils/request'

export default {
  list (params) {
    return request.get('/home/news', { params })
  }
}
