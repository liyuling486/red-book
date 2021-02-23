import Mock from 'mockjs'
import { apiToJson } from '@/utils'

const getShopActive = () => {
  return apiToJson(Mock.mock({
    "id": "@id",
    "active|2": [
      {
        "title|+1": ['热销榜单', '免息会场'],
        "text|+1": ['年度热销好物推', '大牌免息即可买'],
        "img": "@dataImage('60x60')",
        "img1": "@dataImage('200x70', '')",
        "img2": "@dataImage('50x20')",
      }
    ],
    "new|3": [
      {
        "title|+1": ['新人1元抢购', '新人专项优惠', '9.9包邮'],
        "text|+1": ['蓝牙耳机 ￥ 1', '倩碧 ￥ 105', '好物超低价'],
        "img": "@dataImage('50x50')",
      }
    ],
    "img": "@dataImage('350x60')",
  }))
}

const getGoods = () => {
  const { arr } = Mock.mock({
    "arr|10-20": [
      {
        "stage|1": [ "限时购", "5元券", "跨店满减", undefined, undefined, undefined ],
        "id": "@id",
        "ctitle": "@ctitle(5, 10)",
        "desc": "@csentence(10, 30)",
        "cost": "@integer(0, 1000)",
        "voidCost": function () {
          const { voidCost } = Mock.mock({
            "voidCost|1": [ this.cost + 20, undefined ]
          })
          return voidCost
        },
        "img|1": [
          "@dataImage(190x190)",
          "@dataImage(190x170)",
          "@dataImage(190x150)"
        ],
      }
    ]
  })
  return apiToJson(arr)
}
Mock.mock(/\/shop\/goodsList/, 'get', getGoods)
Mock.mock(/\/shop\/active/, 'get', getShopActive)