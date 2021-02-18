import api from '@/api/home'
import { convertActions } from '@/utils'

const actions = {
  ...convertActions(api)
}

export default {
  namespaced: true,
  actions
}