<template>
  <div class="headercommon" :class="{BgTransparent: isTransparent}">
    <div class="container">
      <!-- <div class="backbtn" @click="goBack">
        <img v-if="isTransparent" src="./left_write.png" alt="" height="20">
        <img v-else src="./left.png" alt="" height="20">
      </div> -->
      <div class="title" :class="{isBlock: !isTransparent}">{{title}}</div>
      <div class="rightbtn" :class="{isBlock: !isTransparent}" @click="handleToCreditsList">{{rightbtn}}</div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'n-header',
  data () {
    return {
      popupVisibleTop: false
    }
  },
  props: {
    title: { // header-title
      type: String,
      required: false,
      default: ''
    },
    back: { // header-返回按钮(默认显示)
      type: Boolean,
      required: false,
      default: true
    },
    rightbtn: { // header-右边文字
      type: String,
      required: false,
      default: ''
    },
    isTransparent: { // 控制返回
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    goBack () {
      window.history.go(-1) // 返回上一页
    },
    handleToCreditsList () {
      this.$router.push({
        path: 'credits_list', // 跳转我的积分列表页
        query: {return_status: false}
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .headercommon
    position fixed
    top 0
    left 0
    width 100%
    z-index 999
    display flex
    padding 0 .20rem
    background #fff
    padding-top .76rem
    .container
      // margin-top .76rem
      width 100%
      height .44rem
      display flex
      div
        height .44rem
        display flex
        align-items center
        color #fff
      .title
        flex 1
        font-size .16rem
        justify-content center
      .rightbtn
        font-size .14rem
      .isBlock
        color #000
  .BgTransparent
    background transparent
</style>
