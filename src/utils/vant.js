import Vue from 'vue'
import { Button, Tabbar, TabbarItem, badge, Tab, Tabs, icon, Notify } from 'vant'

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(badge)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(icon)
Vue.use(Notify)

Vue.prototype.$notify = Notify