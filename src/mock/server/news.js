import Mock from 'mockjs'
import { apiToJson } from '@/utils'

const Random = Mock.Random
const getNews = () => {
  const len = Random.integer(20, 30)
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push({
      id: Random.id(),
      ctitle: Random.ctitle(5, 20),
      cname: Random.cname(),
      num: Random.integer(0, 10000),
      img1: Random.dataImage('200x200'),
      img2: Random.dataImage('200x150'),
    })
  }
  return apiToJson(arr)
}

const getFollow = () => {
  const len = 5
  const arr = []
  for (let i = 0; i < len; i++) {
    const item = {
      id: Random.id(),
      cname: Random.cname(),
      time: Random.integer(0, 24),
      img: Random.dataImage('200x200'),
      swipe: [],
      like: false,
      star: false,
      likeNum: Random.integer(0, 1000),
      starNum: Random.integer(0, 1000),
      moreNum: Random.integer(0, 1000),
    }
    const swipeLen = Random.integer(1, 5)
    for (let j = 0; j < swipeLen; j++) {
      item.swipe.push({
        img: Random.dataImage('400x300')
      })
    }
    arr.push(item)
  }
  return apiToJson(arr)
}

Mock.mock(/\/home\/news/, 'get', getNews)
Mock.mock(/\/home\/follow/, 'get', getFollow)