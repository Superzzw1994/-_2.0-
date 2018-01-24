<template>
  <div class="tab">
      <router-link to='/good'class="tab-item">商品</router-link>
      <router-link to='/discuss' class="tab-item">评论</router-link>
      <router-link to='/sellers' class="tab-item">商家</router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .tab {
        display: flex;
        width:100%;
        line-height: 40px;
    }
    .tab-item{
        flex: 1;
        text-align: center;
        font-size:14px;
        color:rgb(77,85,93);
    }
    .active {
        color:rgb(240,20,20);
    }
</style>
