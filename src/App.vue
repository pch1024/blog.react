<template>
  <div id="app">
    <router-view>
      <!-- page -->
    </router-view>
  </div>
</template>
<script>
import {
  _fullBody
} from './tool/index'
export default {

  mounted () {
    this.$nextTick(function () {
      _fullBody()
      window.onresize = () => _fullBody()
    })
  },


}
</script>


