<template>
  <div id="app">
    <div class="back">
      <HeaderView />
      <div class="content">
        <router-view></router-view>
      </div>
      <FootView />
    </div>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView'
import FootView from './components/FootView'
import ShowBlogView from './components/ShowBlogView'
export default {
  components: {
    HeaderView,
    FootView
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  font-family: "微软雅黑";
  box-sizing: border-box;//加padding是内填充,本身的盒子大小不会改变
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}
#app{
  background: #F5F6F7;
  height: 100%;
  min-height: 725px;
}
.back {
  width: 65%;
  margin: 0 auto;
  border: 1px solid #C4C7CE;
  box-shadow: 0 0 20px #C4C7CE;

}
.content {
  min-height: 200px; //最小高度,超过就会增加
}
</style>
