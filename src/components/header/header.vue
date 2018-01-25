<template>
  <div class ="tab">
    <!-- 左侧内容区开始 -->
    <div class="content">
      <!-- logo图片 -->
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <!---->
      <div class="right-content">
        <!-- 店铺名字 -->
        <div class="title">
          <span class="seller_logo"></span>
          <span class="seller_name">{{seller.name}}</span>
        </div>
        <!---->
        <!-- 店铺描述 -->
        <div class="description">
         {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <!---->
        <!-- 店铺活动 -->
       <div class="supports" v-if="seller.supports">
         <span :class="classMap[seller.supports[0].type]" class="icon"></span>
         <span class="supports_des">{{seller.supports[0].description}}</span>
       </div>
       <!---->
      </div>
      <!-- 右侧按钮 -->
      <div class="support_count" v-if="seller.supports" @click="changeDetail">
          <span class="count">{{seller.supports.length}}个</span>
       </div>
       <!---->
    </div>
    <!-- 左侧内容区结束 -->
    <!-- 下方公告开始 -->
    <div class="bulletin" @click="changeDetail">
      <span class="bulletin_title"></span><span class="bulletin_text">{{seller.bulletin}}</span>
    </div>
    <!-- 公告结束 -->
    <!-- 背景图开始 -->
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <!--  -->
    <!-- 弹出详情页开始 -->
    <transition name="fade">
    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
       <div class="detail-main">
        <h1>{{seller.name}}</h1>
        <div class="star-wrapper">
          <star v-if="seller.score" :score="seller.score" :size="48"></star>
        </div>
        <div class="detail-title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="_supports">
          <li v-for="(item,index) in seller.supports" class="supports-item">
            <span :class="classMap[item.type]"  class="_icon"></span>
            <span class="_text">{{item.description}}</span>
          </li>
        </ul>
        <div class="detail-title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="detail-bulletin">
          <p>{{seller.bulletin}}</p>
          </div> 
       </div>
      </div>
      <div class="detail-closeBtn" @click="changeDetail">
          X
      </div>
    </div>
    </transition>
    <!---->
  </div>
</template>
<script>
import star from '../star/star'
export default {
  props:{
    //接收父组件参数(数据) seller
    seller:{
      type:Object
    }
  },
  created () {
    // 创建映射
    this.classMap = ['decrease','discount','special','invoice','guarantee']
  },
  components: {
    star:star
  },
  data(){
    return{
      // params: detailShow 控制detail弹出
      detailShow : false
    }
  },
  methods: {
    //改变detailShow，控制detail展示
     changeDetail (){
       this.detailShow = !this.detailShow
     }
  }
}
</script>
<style scoped>
.clearfix { 
  *zoom: 1; 
} 
.clearfix:before, 
.clearfix:after { 
  display: table; 
  line-height: 0; 
  content: ""; 
}  
.clearfix:after { 
  clear: both; 
} 
/* 根元素样式 */
.tab{
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif;
  position: relative;
  overflow: hidden;
  color:#fff;
  background: rgba(7,17,27,0.5);
}
/* 左部内容区 */
.content{
  padding:24px 12px 18px 24px;
  font-size:0;
  position: relative;
} 
/* 左部内容区 logo样式 */
.avatar{
  display: inline-block;
  vertical-align: top;
}
.avatar img{
  border-radius: 2px;
}
/* 左部内容区 右侧内容样式 */
.right-content{
  display: inline-block;
  margin-left:16px;
}
/* 商品名称 */
.title{
  font-size:16px;
  color:rgb(255,255,255);
  line-height: 18px;
  font-weight: bold;
  margin: 2px 0 8px 0;
}
.seller_logo{
  vertical-align: top;
  display: inline-block;
  width:30px;
  height:18px;
  background-size:30px 18px;
  background-image:url('imgs/brand@2x.png');
  background-repeat:no-repeat; 
}
/* 商品描述 */
.description{
  font-size:12px;
  color:rgb(255,255,255);
  line-height: 12px;
  font-weight: 100;
  margin-bottom: 10px;
}
/* 商品活动 */
.supports{
  margin-bottom: 2px;
}
.supports_des{
  font-size:10px;
  color:rgb(255,255,255);
  line-height: 12px;
  font-weight: 100;
}
.supports .icon{
  vertical-align:top;
  display:inline-block;
  height:12px;
  width:12px;
  margin-right: 4px;
  background-repeat: no-repeat;
  background-size: 12px 12px;
}
/* 右侧按钮 */
.support_count{
  position: absolute;
  right:12px;
  bottom:18px;
  padding: 0 8px;
  height:24px;
  line-height: 24px;
  border-radius: 14px;
  background-color:rgba(0,0,0,0.2);
  text-align: center;
  color:rgb(255,255,255);
}
.count{
  font-size:10px;
}
/* 映射样式 classMap */
.decrease{
  background: url('imgs/decrease_1@2x.png');
}
.discount{
  background: url('imgs/discount_1@2x.png');
}
.special{
  background: url('imgs/special_1@2x.png');
}
.invoice{
  background: url('imgs/invoice_1@2x.png');
}
.guarantee{
  background: url('imgs/guarantee_1@2x.png');
}
/* 下方公告样式 */
.bulletin{
   height:28px;
   line-height:28px;
   padding:0 22px 0 12px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   color:rgb(255,255,255);
   background-color: rgba(7,17,27,0.2);
}
.bulletin_title{
  vertical-align: top;
  display: inline-block;
  height:12px;
  width:22px;
  margin-top:8px;
  background:url('imgs/bulletin@2x.png');
  background-size:22px 12px;
  background-repeat:no-repeat; 
}
.bulletin_text{
  vertical-align: top;
  font-size:10px;
  margin:0 4px;
}
/* header背景模糊样式 */
.background{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: -1;
  filter:blur(10px);
}
/* detail弹出详情页样式 */
.detail{
  position: fixed;
  width:100%;
  height:100%;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow: auto;
  z-index: 100;
  background: rgba(7,17,27,0.8);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.5s;
}
/* detail内容详情页 */
.detail-wrapper{
  min-height:100%;
  width:100%;
}
.detail-main{
  margin-top:64px;
  padding-bottom:64px;
}
.detail-main h1{
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color:rgb(255,255,255);
  text-align: center;
}
/* detail关闭按钮 */
.detail-closeBtn{
  position: relative;
  width: 32px;
  height: 32px;
  margin: -64px auto;
  clear: both;
  font-size:32px;
}
/* 星星组件样式 */
.star-wrapper{
  margin-top:18px;
  padding:2px 0;
  text-align: center;
}
/* 自适应下划线 */
.detail-title{
  width:80%;
  margin:28px auto 24px;
  display: flex; 
}
.line{
  flex:1;
  position: relative;
  top:-6px;
  border-bottom:1px solid rgba(255,255,255,0.2)
}
.text{
 padding: 0 12px;
 font-size:14px;
 font-weight: 700;
 vertical-align: top;
}
/* 商品简介遍历排列 */
._supports{
  width: 80%;
  margin: 0 auto;
}
.supports-item{
  padding: 0 12px;
  margin-bottom: 12px;
  font-size: 0;
}
.supports .supports-item:last-child{
  margin-bottom: 0;
}
.supports-item ._icon{
  vertical-align:top;
  display:inline-block;
  height:16px;
  width:16px;
  margin-right: 6px;
  background-repeat: no-repeat;
  background-size: 16px 16px;
}
.supports-item ._text{
  line-height: 16px;
  font-size: 12px;
}
/* detail商家公告 */
.detail-bulletin{
  width:80%;
  margin: 0 auto;
}
.detail-bulletin p{
  padding: 0 12px;
  line-height: 24px;
  font-size: 12px;
}
/* 媒体查询，不同dpr显示不同图片 */
@media screen and(-webkit-min-device-pixel-ratioa:3){
  .seller_logo{
    background: url('imgs/brand@3x.png')
  }
  .decrease{
  background: url('imgs/decrease_1@3x.png');
}
.discount{
  background: url('imgs/discount_1@3x.png');
}
.special{
  background: url('imgs/special_1@3x.png');
}
.invoice{
  background: url('imgs/invoice_1@3x.png');
}
.guarantee{
  background: url('imgs/guarantee_1@3x.png');
}
}
/* 动画效果(detail层渐变) */
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
