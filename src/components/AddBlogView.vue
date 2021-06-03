<template>
  <div class="addBlog">
    <div class="box addBlogTitle">
      <div class="msg">博客标题:</div>
      <input type="text" v-model="itemObj.title" />
    </div>
    <div class="box addBlogAuthor">
      <div class="msg">作者:</div>
      <input type="text" v-model="itemObj.author" />
    </div>
    <div class="box addBlogType">
      <div class="msg">分类:</div>
      <div class="selectType">
        <select v-model="itemObj.classify">
          <option v-for="(item, index) in classList" :key="index">
            {{ item.classname }}
          </option>
        </select>
      </div>
    </div>
    <div class="box addBlogContent">
      <div class="msg">博客内容:</div>
      <textarea rows="10" v-model="itemObj.content"></textarea>
    </div>
    <div class="addBlogSend" @click="sendBlog">发表博客</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      itemObj: {
        title: "",
        posttime: new Date().getTime() / 1000,
        content: "",
        classify: "",
        author: "",
      },
      classList: [],
    };
  },
  created() {
    this.getClass();
    //this.getSsm();
  },
  methods: {
    getClass() {
      axios({
        url: "https://ku.qingnian8.com/dataApi/blog/classBlog.php",
      }).then((res) => {
        this.classList = res.data;
      });
    },
    // getSsm() {
    //   axios({
    //     url: "/api/ssmDemo_war_exploded/test",
    //   }).then((res) => {
    //     console.log(res);
    //   });
    // },
    pushBlog() {
      axios({
        url: "https://ku.qingnian8.com/dataApi/blog/addBlog.php",
        params: this.itemObj,
      });
    },
    sendBlog() {
      for (const key in this.itemObj) {
        if (this.itemObj[key] == "") {
          alert("请全部填写完毕后提交");
          return;
        }
      }
      this.pushBlog();
      this.$router.push({
        path: "/showBlog",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.addBlog {
  padding: 40px 100px;
  height: 700px;
  line-height: 40px;
  .box {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 10px;
    .msg {
      width: 100px;
      text-align: right;
    }
  }
  input {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 70%;
    font-size: 14px;
    font-weight: 700;
    font-family: "Microsoft soft";
    padding: 5px 10px;
    box-shadow: 0 0 5px #c4c7ce;
  }
  textarea {
    outline-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    width: 70%;
    font-weight: 700;
    font-family: "Microsoft soft";
    padding: 5px 10px;
    box-shadow: 0 0 5px #c4c7ce;
  }
  .addBlogType {
    .selectType {
      width: 70%;
      select {
        outline-style: none; //取消样式
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 14px;
        width: 200px;
        font-weight: 700;
        font-family: "Microsoft soft";
        padding: 5px 10px;
        box-shadow: 0 0 5px #c4c7ce;
      }
    }
  }
  .addBlogSend {
    margin: auto;
    width: 334.8px;
    height: 30px;
    border-radius: 5px;
    background: #23aaf2;
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>
