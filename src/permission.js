import router from './router'
import { JudgeDevice } from './utils'

router.beforeEach (async(to, from, next) => {
  const JudgeDeviceState = JudgeDevice(to)
  if (JudgeDeviceState) {
    next(JudgeDeviceState)
  } else {
    next()
  }
})