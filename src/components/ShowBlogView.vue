<template>
  <div class="showBlog">
    <BlogItem
      v-for="(item, index) in listArr"
      :key="index"
      :listArrObj="item"
    />
    <div class="pageGroup">
      <div class="but butLeft" @click="butLeft">&lt; 上一页</div>
      <div class="but butRight" @click="butRight">下一页 &gt;</div>
    </div>
  </div>
</template>

<script>
import BlogItem from './BlogItem'
import axios from 'axios'
export default {
  components: {
    BlogItem
  },
  data () {
    return {
      listArr: [],
      page: 1
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios({
        // 使用之前必须安装 npm install axios 然后导入使用 import axios from "axios"
        url: 'https://ku.qingnian8.com/dataApi/blog/showBlog.php',
        params: {
          page: this.page
        }
      }).then((res) => {
        console.log(res)
        this.listArr = res.data
      })
    },
    // 返回顶部
    returnTop () {
      if (document.body.scrollTop) {
        document.body.scrollTop = 0
      } else {
        document.documentElement.scrollTop = 0
      }
    },
    butLeft () {
      if (this.page <= 1) {
        return
      }
      this.page--
      this.getData()
      this.returnTop()
    },
    butRight () {
      if (this.listArr.length < 9 || this.listArr.length == 0) {
        return
      }
      this.page++,
      this.getData()
      this.returnTop()
    }
  }
}
</script>

<style lang="less" scoped>
.pageGroup {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  .but {
    border: 1px solid #23aaf2;
    color: rgb(117, 116, 116);
    padding: 5px 15px;
    margin: 10px;
    transition: 0.3s;
    &:hover {
      background: #23aaf2;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
