import Mock from 'mockjs'
import { apiToJson } from '@/utils'

const Random = Mock.Random
const getShopActive = () => {
  return apiToJson({
    id: Random.id(),
    active: [
      {
        title: '热销榜单',
        text: '年度热销好物推',
        img: Random.dataImage('60x60'),
        img1: Random.dataImage('200x70', ''),
        img2: Random.dataImage('50x20'),
      },
      {
        title: '免息会场',
        text: '大牌免息即可买',
        img: Random.dataImage('60x60'),
        img1: Random.dataImage('200x70', ''),
        img2: Random.dataImage('50x20'),
      }
    ],
    new: [
      {
        title: '新人1元抢购',
        text: '蓝牙耳机 ￥ 1',
        img: Random.dataImage('50x50'),
      },
      {
        title: '新人专项优惠',
        text: '倩碧 ￥ 105',
        img: Random.dataImage('50x50'),
      },
      {
        title: '9.9包邮',
        text: '好物超低价',
        img: Random.dataImage('50x50'),
      }
    ],
    img: Random.dataImage('350x60'),
  })
}

Mock.mock(/\/shop\/active/, 'get', getShopActive)