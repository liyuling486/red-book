import { ctxToMap } from '@/utils'
const ctx = require.context('./', true, /\.js$/)

export default ctxToMap(ctx)
