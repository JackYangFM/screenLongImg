<template>
  <div class="container">
    <div id="screenBox">
      <div class="pic-top">
        <img src="./qrcode.png" alt="" width="100" height="100">
        <div class="top-text">在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后</div>
        <div class="top-text">在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后</div>
        <div class="top-text">在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后在APP绑定成为该型号产品车主后</div>
        <div class="top-icon">
          <ul>
            <li>
                <img src="./checkbox.png" alt="">
                <span>top-icon</span>
            </li>
            <li>
                <img src="./checked.png" alt="">
                <span>top-icon</span>
            </li>
            <li>
                <img src="./checked2.png" alt="">
                <span>top-icon</span>
            </li>
            <li>
                <img src="./ckeckbox1.png" alt="">
                <span>top-icon</span>
            </li>
            <li>
                <img src="./ckeckbox1.png" alt="">
                <span>top-icon</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="pic-middle">
        <img class="middle-img" src="./biaoti@2x.png" alt="">
        <div class="middle-text">
          <span>发布过5篇点赞量超过100的原创图片动态，并被管理员设置为精华发布过5篇点赞量超过100的原创图片动态，并被管理员设置为精华发布过5篇点赞量超过100的原创图片动态，并被管理员设置为精华</span>
        </div>
        <div class="middle-icon">
          <ul>
            <li>
              <img src="./checkbox.png" alt="">
              <span>top-icon</span>
            </li>
            <li>
              <img src="./checked.png" alt="">
              <span>top-icon</span>
            </li>
            <li>
              <img src="./checked2.png" alt="">
              <span>top-icon</span>
            </li>
            <li>
              <img src="./ckeckbox1.png" alt="">
              <span>top-icon</span>
            </li>
            <li>
              <img src="./ckeckbox1.png" alt="">
              <span>top-icon</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div ref="screenBox">
      <img style="width:100%;" src="./share_img_zh.png" alt="">
    </div>
    <div class="submit" @click="handleScreen" >点击截图</div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'dataShow',
  components: {},
  data () {
    return {
      imgSrc: ''
    }
  },
  methods: {
    handleScreen () {
      html2canvas(this.$refs.screenBox, {
        backgroundColor: null
      }).then((canvas) => {
        var context = canvas.getContext('2d')
        // 关闭抗锯齿
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false
        this.imgSrc = canvas.toDataURL('image/png') // 生成Base64码
        // console.log(this.imgSrc)
        this.$bridge.registerhandler('sendImgBase64', (data, responseCallback) => {
          responseCallback(data)
        })
        console.log(this.imgSrc, 1)
        this.$bridge.callhandler('sendImgBase64', {'imgSrc': this.imgSrc}, (data) => {
          // 处理返回数据
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    min-height 100vh
    .pic-top {
        // background-image: url(./fenxiang@2x.png);
        background: linear-gradient(139deg,rgba(69,77,88,1) 0%,rgba(102,116,134,1) 100%);
        background-size: 100% 100%;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .pic-top img {
        padding: .10rem 0;
        margin: 0 auto;
        display: block;
    }
    .pic-top .top-text {
        font-size: .16rem;
        padding: .10rem;
        color: #ffffff;
        line-height: .20rem;
    }
    .pic-top .top-icon ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .10rem;
    }
    .pic-top .top-icon ul li {
        font-size: .12rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        align-items: center;
    }
    .pic-middle {
        width: 100%;
        height: 3rem;
        background: linear-gradient(165deg,#eac788,#9e6f33);
        padding: .10rem;
        margin: .10rem 0;
        position: relative;
    }
    .pic-middle .middle-img {
        width: 100%;
        height: .40rem;
        position: absolute;
        top: .10rem;
        left: 0;
    }
    .pic-middle .middle-text {
        font-size: .16rem;
        color: #fff;
        line-height: .20rem;
        margin: .50rem 0 0;
        text-indent: 2em;
    }
    .pic-middle .middle-icon ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .10rem;
    }
    .pic-middle .middle-icon ul li {
        font-size: .12rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        align-items: center;
    }
    .submit {
        width: 100%;
        height: .40rem;
        background: #eac788;
        text-align: center;
        line-height: .40rem;
        color: #fff;
        font-size: .14rem;
        box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05),0px -1px 2px 0px rgba(0,0,0,0.05);
        margin: .30rem 0 .30rem;
    }
</style>
