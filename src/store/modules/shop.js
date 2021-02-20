import api from '@/api/shop'
import { convertActions } from '@/utils'

const actions = {
  ...convertActions(api)
}

export default {
  namespaced: true,
  actions
}