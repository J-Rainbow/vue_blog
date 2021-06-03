<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="" />
      <div class="text">
        <span>J-Rainbow</span>
        博客系统
      </div>
    </div>
    <div class="nav">
      <router-link to="/showBlog" tag="a">博客列表</router-link>
      <router-link to="/addBlog" tag="a">添加博客</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.header {
  align-items: center;
  height: 80px;
  background:#fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #C4C7CE;
  .logo {
    margin-left: 10px;
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 38px;
    }
    .text {
      padding-left: 10px;
      font-size: 18px;
      span {
        margin-bottom: 10px;
        font-size: 14px;
        display: block;
        opacity: 0.7;
      }
    }
  }
  .nav {
      //display: flex;
    a {
      //display: block;
     // background: #23aaf2;
      border-radius: 5px;
      color: #000;
      margin-right: 10px;
      padding: 5px 15px;
      transition: 0.3s;
      &:hover,&.active{//&表示a本身自己
        background: #23aaf2;
        color: #fff;
      }
    }
  }
}
</style>
