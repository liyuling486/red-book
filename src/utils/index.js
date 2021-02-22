import _ from 'lodash'
/**
 * context 转 map
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export function ctxToMap (ctx) {
  const apiMap = {}
  for (const key of ctx.keys()) {
    const fileKey = key.replace(/\.\/|\.js/g, '')
    const context = ctx(key).default
    if (context) {
      apiMap[fileKey] = context
    }
  }
  return apiMap
}

export function convertActions (apifunc, prefix = '') {
  let actions = {}
  for (const key in apifunc) {
    if (typeof apifunc[key] === 'function') {
      actions[prefix + key] = (context, data) => {
        return apifunc[key].call(this, data)
      }
    }
    if (typeof apifunc[key] === 'object') {
      actions = _.assign(actions, convertActions(apifunc[key], key + '.'))
    }
  }
  return actions
}
/**
 * mock接口重新封装返回数据
 * @param {*} data 
 */
export function apiToJson (data) {
  const obj = {
    err: 0,
    data
  }
  if (Array.isArray(data)) {
    obj.count = data.length
  }
  return obj
}

/**
 * 判断是否是PC设备，true是，false不是
 */
export function IsPc () {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android','iPhone','SymbianOS','Windows Phone','iPod']
  let flag = true
  for(let i = 0;i < Agents.length;i++) {
      if(userAgentInfo.indexOf(Agents[i]) > 0) {
          flag = false
          break
      }
  }
  if(window.screen.width >= 768){
      flag = true
  }
  return flag
}

/**
 * 判断当前设备路由跳转
 */
export function JudgeDevice (to) {
  let obj = undefined
  if (IsPc()) {
    if (to.name !== 'exception.pc') {
      obj = { path: '/exception/pc' }
    }
  } else {
    if (to.name == 'exception.pc') {
      obj = { path: '/' }
    }
  }
  return obj
}