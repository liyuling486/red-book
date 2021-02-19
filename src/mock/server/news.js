import Mock from 'mockjs'
const Random = Mock.Random
const getNews = () => {
  const len = Random.integer(20, 50)
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
  return {
    err: 0,
    count: len,
    data: arr
  }
}

Mock.mock(/\/home\/news/, 'get', getNews)