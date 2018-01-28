<template>
  <div class="star" :class="starType">
      <span v-for="starClass in starClasses" :class="starClass" class="star-item"></span>
  </div>
</template>
<script>
const Length = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
export default {
  
  props:{
      size:{
          type:Number
      },
      score:{
          type:Number
      }
  },
  computed: {
      starType (){
          return "star-" + this.size
      },
      starClasses () {
          let arr = [];
          let score = Math.floor(this.score*2)/2;
          let hasDecimal = score%1 !== 0;
          let integer = Math.floor(score);
          for(let i = 0 ;i < integer;i++){
              arr.push(CLS_ON);
          }
          if(hasDecimal){
              arr.push(CLS_HALF)
          }
          while(arr.length < 5){
              arr.push(CLS_OFF)
          }
          return arr;
      }
  }
}
</script>
<style scoped>
    .star{
        font-size: 0;
    }
    .star-24 .star-item{
        width:10px;
        height:10px;
        background-size: 10px 10px!important;
        margin-right:3px;
    }
    .star-24 .on{
        background: url('imgs/star24_on@2x.png');
    }
    .star-24 .half{
        background: url('imgs/star24_half@2x.png');
    }
    .star-24 .off{
        background: url('imgs/star24_off@2x.png');
    }
    .star-24 .star-item:last-child{
        margin-right:0;
    }
    .star-36 .star-item{
        width:15px;
        height:15px;
        background-size: 15px 15px!important;
        margin-right:16px;
    }
     .star-36 .on{
        background: url('imgs/star36_on@2x.png');
    }
    .star-36 .half{
        background: url('imgs/star36_half@2x.png');
    }
    .star-36 .off{
        background: url('imgs/star36_off@2x.png');
    }
    .star-36 .star-item:last-child{
        margin-right:0;
    }
    .star-48 .star-item{
        width:20px;
        height:20px;
        background-size: 20px 20px!important;
        margin-right:22px;
    }
    .star-48 .star-item:last-child{
        margin-right:0;
    }
    .star-48 .on{
        background: url('imgs/star48_on@2x.png');
    }
    .star-48 .half{
        background: url('imgs/star48_half@2x.png');
    }
    .star-48 .off{
        background: url('imgs/star48_off@2x.png');
    }
    .star .star-item{
        display: inline-block;
        background-repeat:no-repeat;

    }
</style>
