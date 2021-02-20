import _ from 'lodash'
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