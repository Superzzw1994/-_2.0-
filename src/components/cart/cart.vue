<template>
  <div class="cart">
      <div class="content">
          <div class="left-content">
              <div class="loge-wrapper">
                  <div class="logo" :class="{'logoHighlight':totalPrice > 0}">
                      <span>12312</span>
                  </div>
                  <div class="count" v-show=" totalCount > 0 ">
                          {{totalCount}}
                      </div>
              </div>
              <div class="price" :class="{'priceHighlight':totalPrice > 0}">
                  ￥{{totalPrice}}
              </div>
              <div class="desc">
                  另需配送费￥{{seller.deliveryPrice}}元
              </div>
          </div>
          <div class="right-content">
              <div class="pay" :class="PayClass">
                  {{payPrice}}
              </div>
          </div>
      </div>
      
  </div>
</template>
<script>
export default {
  props:{
      seller:{
          type:Object
      },
      selectFoods:{
          type: Array,
          default (){
              return [{
                  price:10,
                  count:3
              }];
          }
      }
  },
  computed: {
      totalPrice () {
          let total = 0;
          this.selectFoods.forEach((food) => {
              total += food.price * food.count
          })
          return total;
      },
      totalCount () {
          let total = 0 ;
          this.selectFoods.forEach((food) => {
              total += food.count;
          })
          return total;
      },
      payPrice () {
          if(this.totalPrice === 0){
              return `￥${this.seller.minPrice}元起送`
          }else if(this.totalPrice < this.seller.minPrice){
              let diff = this.seller.minPrice - this.totalPrice;
              return `还差￥${diff}元起送`;
          }else{
              return '去结算';
          }
      },
      PayClass () {
          if(this.totalPrice > this.seller.minPrice){
              return 'pay-enough';
          }else{
              return ''
          }
      }
  }
}
</script>
<style scoped>
.cart{
    position: fixed;
    bottom: 0;
    left:0;
    height:48px;
    z-index:50;
    width: 100%;
}
.content{
    background-color: #141d27;
    display: flex;
}
.left-content{
    flex:1;
    font-size: 0;
}
.right-content{
    flex: 0 0 105px;
    width:105px;
    background-color: #2b333b;
}
.pay{
    font-size:12px;
    color:rgba(255,255,255,0.4);
    font-weight:700;
    line-height: 24px;
    padding:12px;
    text-align: center;
}
.loge-wrapper{
    display:inline-block;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width:56px;
    height:56px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
    background-color: #000;
}
.logo{
    display: inline-block;
    width:100%;
    height:100%;
    border-radius: 50%;
    background-color: #2b343c;
}
.logoHighlight{
    background-color: rgb(0,160,220);
}
.priceHighlight{
    color:rgb(255,255,255)!important;
}
.count{
   width: 24px;
   height: 16px;
   font-size:9px;
   font-weight: 700;
   color:rgb(255,255,255);
   line-height: 16px;
   text-align: center;
   background-color: rgb(240,20,20);
   box-shadow:0px 4px 8px 0px rgba(0,0,0,0.4);
   position: absolute;
   border-radius: 16px;
   top:0;
   right:0;
}
.price{
    vertical-align: top;
    display:inline-block;
    font-size:16px;
    color:rgba(255,255,255,0.4);
    font-weight: 700;
    line-height: 24px;
    margin:12px 0;
    padding-right:12px;
    border-right:1px solid rgba(255,255,255,0.1);
}
.desc{
    display:inline-block;
    font-size:10px;
    color:rgba(255,255,255,0.4);
    font-weight:700;
    line-height:24px;
    margin: 12px 0 12px 12px;
}
.pay-enough{
    background-color: #00b43c;
    color:rgb(255,255,255);
}
</style>
