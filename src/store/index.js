import Vue from 'vue'
import Vuex from 'vuex'
import { ctxToMap } from '@/utils'

const ctx = require.context('./modules', true, /\.js$/)

Vue.use(Vuex)

export default new Vuex.Store({
  modules: ctxToMap(ctx)
})