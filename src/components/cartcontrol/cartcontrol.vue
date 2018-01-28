<template>
  <div class="cartcontrol">
      <div class="food-decrease" v-show = "food.count > 0">
          -
      </div>
      <div class="food-count" v-show = "food.count > 0">
            1
      </div>
      <div class="food-add" @click="addclick">
          1
      </div>
  </div>
</template>
<script>
export default {
  props:{
      food:{
          type:Array
      }
  },
  methods:{
      addclick(){
          console.log(1)
      }
  }

}
</script>
<style scoped>
.cartcontrol{
    font-size: 0;
}
.food-decrease{
    display: inline-block;
    height:24px;
    width:24px;
    font-size:24px;
    box-sizing: border-box;
    border:2px solid #00a0dc;
    border-radius: 50%;
    color:#00a0dc;
    background-color:#fff;
    text-align: center;
    line-height: 24px;
}
.food-add{
    display: inline-block;
    height:20px;
    width:20px;
    font-size:12px;
    border-radius: 50%;
    color:#fff;
    background-color:#00a0dc;
    text-align: center;
    line-height: 12px;
    margin-right: 6px;
}
.food-count{
   display: inline-block;
   font-size:10px;
   color:rgb(147,153,159);
   line-height: 24px;
   text-align: center;
   width:24px;
}
</style>
