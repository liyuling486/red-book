import request from '@/utils/request'

export default {
  active (params) {
    return request.get('/shop/active', { params })
  }
}