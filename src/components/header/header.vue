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
    <div class="detail" v-show="detailShow"></div>
    <!---->
  </div>
</template>
<script>
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
  /* filter: blur(10px); */
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
</style>
