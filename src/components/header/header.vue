<template>
  <div class ="tab">
    <div class="content">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="right-content">
        <div class="title">
          <span class="seller_logo"></span>
          <span class="seller_name">{{seller.name}}</span>
        </div>
        <div class="description">
         {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
       <div class="supports" v-if="seller.supports">
         <span :class="classMap[seller.supports[0].type]" class="icon"></span>
         <span class="supports_des">{{seller.supports[0].description}}</span>
       </div>
      </div>
      <div class="support_count" v-if="seller.supports">
          <span class="count">{{seller.supports.length}}个</span>
       </div>
    </div>
    <div class="bulletin">
      <span class="bulletin_title"></span><span class="bulletin_text">{{seller.bulletin}}</span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
  </div>
</template>
<script>
export default {
  props:{
    seller:{
      type:Object
    }
  },
  created () {
    this.classMap = ['decrease','discount','special','invoice','guarantee']
  }
}
</script>
<style scoped>
.tab{
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif;
  position: relative;
  color:#fff;
  background: rgba(7,17,27,0.5);
}
.content{
  padding:24px 12px 18px 24px;
  font-size:0;
  position: relative;
} 
.avatar{
  display: inline-block;
  vertical-align: top;
}
.avatar img{
  border-radius: 2px;
}
.right-content{
  display: inline-block;
  margin-left:16px;
}
.description{
  font-size:12px;
  color:rgb(255,255,255);
  line-height: 12px;
  font-weight: 100;
  margin-bottom: 10px;
}
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
  margin-top:7px;
  background:url('imgs/bulletin@2x.png');
  background-size:22px 12px;
  background-repeat:no-repeat; 
}
.bulletin_text{
  vertical-align: top;
  font-size:10px;
  margin:0 4px;
}
.background{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: -1;
  filter:blur(10px);
}
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
