import Mock from 'mockjs'
import { apiToJson } from '@/utils'

const getNews = () => {
  const { arr } = Mock.mock({
    "arr|10": [
      {
        "id": "@id",
        "ctitle": "@ctitle(5, 20)",
        "cname": "@cname()",
        "num": "@integer(0, 10000)",
        "img|1": [
          "@dataImage(200x200)",
          "@dataImage(200x170)",
          "@dataImage(200x150)"
        ],
        "img1": "@dataImage(200x150)",
      }
    ]
  })
  return apiToJson(arr)
}

const getFollow = () => {
  const { arr } = Mock.mock({
    "arr|5": [
      {
        "id": "@id",
        "cname": "@cname()",
        "time": "@integer(0, 24)",
        "img": "@dataImage(200x200)",
        "like": false,
        "star": false,
        "likeNum": "@integer(0, 1000)",
        "starNum": "@integer(0, 1000)",
        "moreNum": "@integer(0, 1000)",
        "swipe|1-5": [
          {
            "img": "@dataImage(400x300)",
          }
        ]
      }
    ]
  })
  return apiToJson(arr)
}

Mock.mock(/\/home\/news/, 'get', getNews)
Mock.mock(/\/home\/follow/, 'get', getFollow)