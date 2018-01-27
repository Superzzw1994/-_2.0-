<template>
  <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul class="">
          <li v-for="(item,index) in goods" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index)">
             <span class="text"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item,index) in goods" class="food-list food-list-hook">
            <h1 class="food-title">{{item.name}}</h1>
            <ul>
              <li v-for="(food,index) in item.foods" class="food-content">
                  <div class="avatar">
                    <img :src="food.icon" alt="" width="57" height="57">
                  </div>
                  <div class="right-content">
                    <h2 class="content-title">
                      {{food.name}}
                    </h2>
                    <p class="content-des">
                      {{food.description}}
                    </p>
                    <div class="content-count">
                      <span class="content-sell">月售{{food.sellCount}}份</span>
                      <span class="content-ratings">好评率{{food.rating}}%</span>
                    </div>
                    <div class="content-price">
                      <span class="content-newPrice">￥{{food.price}}</span>
                       <span v-show="food.oldPrice" class="content-oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                  </div>
              </li>
            </ul>             
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      Height: [],
      scrollY: 0
    };
  },
  computed: {
    currentIndex(){
      for(let i = 0; i < this.Height.length;i++){
        let topLimit = this.Height[i];
        let bottomLimit = this.Height[i + 1];
        if((this.scrollY >= topLimit && this.scrollY < bottomLimit)){
          console.log(i)
          return i;
        } 
      }
      return 0;
    }
  },
  methods: {
    selectMenu(index){
      console.log(index)
      let foodList = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
      this.foodScoll.scrollToElement(foodList[index],300)
    },
    _initScroll () {
      this.menuScoll = new BScroll(this.$refs.menuWrapper,{
        click:true
      })
      this.foodScoll = new BScroll(this.$refs.foodsWrapper,{
        probeType:3
      });
      this.foodScoll.on('scroll',(pos)  => {
        this.scrollY = Math.abs(Math.round(pos.y));
      }
      )
    },
    getHeight () {
      let height = 0;
      this.Height.push(height);
      let arr = this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
      console.log(arr)
      for(let i = 0; i < arr.length; i++){
        height += arr[i].clientHeight;
        this.Height.push(height);
      }
      console.log(this.Height)
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    var self = this;
    this.$http
      .get("/msg")
      .then(function(res) {
        self.goods = res.data.goods;
        self.$nextTick(() => {
          self._initScroll();
          self.getHeight();
        })
      })
      .catch(function(err) {
        console.log(err);
      });
      
  }
};
</script>
<style scoped>
.goods {
  position: absolute;
  width: 100%;
  top: 174px;
  bottom: 46px;
  display: flex;
  overflow: hidden;
  font-family: "PingFang SC", "STHeitiSC-Light", "Helvetica-Light", arial,
    sans-serif;
}
.menu-wrapper {
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
.menu-item {
  display: table;
  height: 54px;
  line-height: 14px;
  width: 56px;
  padding: 0 12px;
}
.current{
  font-weight:700;
  position: relative;
  margin-top:-1px;
  z-index:10;
  background-color: #fff;
}
.menu-wrapper .icon {
  display: inline-block;
  vertical-align: top;
  margin-right: 2px;
  width: 12px;
  height: 12px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
}
.decrease {
  background: url("imgs/decrease_3@2x.png");
}
.discount {
  background: url("imgs/discount_3@2x.png");
}
.guarantee {
  background: url("imgs/guarantee_3@2x.png");
}
.invoice {
  background: url("imgs/invoice_3@2x.png");
}
.special {
  background: url("imgs/special_3@2x.png");
}
.menu-wrapper .text {
  display: table-cell;
  font-size: 12px;
  vertical-align: middle;
  /* font-weight:200; */
}
.foods-wrapper {
  flex: 1;
}
.food-title{
  font-size:12px;
  color:rgb(147,153,159);
  line-height:26px;
  background-color: #f3f5f7;
  border-left:2px solid #d9dde1;
  padding-left:14px;
}
.food-content{
  display: flex;
  margin:18px;
  padding-bottom:18px; 
  font-size:0;
  border-bottom:1px solid rgba(7,17,27,0.1); 
}
.food-content:last-child{
  margin-bottom: 0px;
  border-bottom: none;
}
.avatar{
  flex: 0 0 57px;
  display: inline-block;
  vertical-align: top;
  margin-right:10px;
}
.right-content{
  display: inline-block;
}
.content-title{
  font-size:14px;
  color:rgb(7,17,27);
  line-height: 14px;
  margin-top:2px;
}
.content-des{
  font-size:12px;
  color:rgb(147,153,159);
  line-height:12px;
  margin: 8px 0;
}
.content-count{
  font-size:0;
  color:rgb(147,153,159);
  line-height:10px;
}
.content-sell{
  margin-right:12px;
  font-size:10px;
}
.content-ratings{
  font-size: 10px;
}
.content-newPrice{
  font-size:14px;
  color:#f01414;
  font-weight:normal;
  line-height: 24px;
  margin-right: 8px;
}
.content-oldPrice{
  text-decoration: line-through;
  font-size: 10px;
  color: #93999f;
}
</style>
