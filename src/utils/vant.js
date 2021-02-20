import Vue from 'vue'
import { Button, Tabbar, TabbarItem, badge, Tab, Tabs, icon, Notify, Swipe, SwipeItem, Grid, GridItem, Field, Image as VanImage, Skeleton } from 'vant'

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(badge)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(icon)
Vue.use(Notify)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Field)
Vue.use(VanImage)
Vue.use(Skeleton)

Vue.prototype.$notify = Notify