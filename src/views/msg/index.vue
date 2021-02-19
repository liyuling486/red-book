<template>
  <div class="contain">
    <div class="top">
      <span>消息</span>
      <div class="newChat">创建聊天</div>
    </div>
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-badge :content="10">
          <div class="navBox pink">
            <van-icon name="like" color="#fff" size="24"/>
          </div>
        </van-badge>
        <p class="navText">赞和收藏</p>
      </van-grid-item>
      <van-grid-item>
        <van-badge :content="1">
          <div class="navBox blue">
            <van-icon name="friends" color="#fff" size="24"/>
          </div>
        </van-badge>
        <p class="navText">新增关注</p>
      </van-grid-item>
      <van-grid-item>
        <van-badge :content="2">
          <div class="navBox green">
            <van-icon name="chat" color="#fff" size="24"/>
          </div>
        </van-badge>
        <p class="navText">评论和@</p>
      </van-grid-item>
    </van-grid>
    <div class="list">
      <div class="item">
        <div class="itemImg orangeC">
          <van-icon name="bell" color="#fff" size="24" />
        </div>
        <div class="itemRight">
          <div class="itemRightT">
            <span class="itemRightTTitle">系统通知</span>
            <span class="itemRightTDate">02-04</span>
          </div>
          <div class="itemRightB">
            <div class="itemRightBText">亲爱的小红薯，感谢你的关注</div>
            <van-badge :content="20" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="itemImg pinkC">
          <van-icon name="volume" color="#fff" size="24" />
        </div>
        <div class="itemRight">
          <div class="itemRightT">
            <span class="itemRightTTitle">推送消息</span>
            <span class="itemRightTDate">02-04</span>
          </div>
          <div class="itemRightB">
            <div class="itemRightBText">不能一夜暴富但可以奶茶自由，快来能一夜暴富但可以奶茶自由，快来</div>
            <van-badge :content="20" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="itemImg violetC">
          <van-icon name="coupon" color="#fff" size="24" />
        </div>
        <div class="itemRight">
          <div class="itemRightT">
            <span class="itemRightTTitle">官方账号消息</span>
            <span class="itemRightTDate">02-04</span>
          </div>
          <div class="itemRightB">
            <div class="itemRightBText">直播薯：小红薯《请回答2021》领领领领</div>
            <van-badge dot />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="itemImg blueC">
          <van-icon name="smile-comment" color="#fff" size="24" />
        </div>
        <div class="itemRight">
          <div class="itemRightT">
            <span class="itemRightTTitle">陌生人消息</span>
            <span class="itemRightTDate">02-04</span>
          </div>
          <div class="itemRightB">
            <div class="itemRightBText">小红薯FRD23CDD23：脱离小红书平安平安</div>
            <van-badge :content="20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.contain {
  background: #FAFAFA;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
}
.top {
  background: #fff;
  padding: 10px 0;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
}
.newChat {
  position: absolute;
  right: 10px;
  top: 10px;
}
.navBox {
  width: 49px;
  height: 49px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navText {
  font-size: 14px;
  margin: 8px 0;
}
.list {
  margin-top: 20px;
  flex: 1;
  overflow: auto;
}
.item {
  background: #fff;
  display: flex;
}
.itemImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 20px;
  flex-shrink: 0;
}
.itemRight {
  padding: 14px 0;
  flex: 1;
  padding-right: 20px;
  border-bottom: 1px solid #F4F4F4;
}
.list .item:last-child .itemRight {
  border: none;
}
.itemRightT {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.itemRightTDate {
  color: #898989;
  font-size: 12px;
}
.itemRightB {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  color: #898989;
  font-size: 14px;
}
.itemRightBText {
  width: calc(100vw - 150px);
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.pink {
  background: #FF5266;
  border: 1px solid #E25364;
}
.blue {
  background: #3395FF;
  border: 1px solid #388AE2;
}
.green {
  background: #46D8AB;
  border: 1px solid #51C8A4;
}
.orangeC {
  background: #FFAA21;
}
.pinkC {
  background: #FF5266;
}
.pinkC {
  background: #FF5266;
}
.violetC {
  background: #5B92E2;
}
.blueC {
  background: #59C4FF;
}
</style>