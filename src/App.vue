<template>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/loginpage"></router-link>
    <router-link to="/hello"></router-link>
  <div id="loading" v-if="loadingPage = false" @loadingStatus="loadingStatus">
    <img src="/static/img/Loading_2.gif">
  </div>

  <router-view/>
</template>
<script>
export default {
  name : 'App',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
#loading{
	position: fixed;
	z-index: 999999999;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(255,255,255, 0.8);
	text-align: center;
	color: #fff;
	font-size: 55px;
	padding-top: calc(50vh - 158px);
}
</style>
