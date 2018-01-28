<template>
  <div id="app">   
    <Header :seller="data"></Header>
    <tab></tab>
    <transition name="fade" mode="out-in">
        <router-view :seller="data"></router-view>
    </transition> 
  </div>
</template>

<script>
import header from './components/header/header'
import tab from './components/tab/tab'
import data from './util/mock'
export default {
  name: 'zzw',
  components: {
    Header : header,
    tab: tab
  },
  data () {
    return {
      data:{

      },
    }
  },
  created () {
      var self = this;
      this.$http.get('/msg')
    .then(function(res) {
        self.data = res.data.seller
        console.log(self.data)
    })
    .catch(function(err) {
      console.log(err);
    });
    }
  
}
</script>

<style>

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
