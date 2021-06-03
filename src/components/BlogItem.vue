<template>
  <div class="blogitem">
    <div class="blogitem-top">
      <div class="blogitem-top-title">{{ listArrObj.title }}</div>
      <div class="blogitem-top-time">{{ getTime(listArrObj.posttime) }}</div>
    </div>
    <div class="blogitem-center">
      {{ listArrObj.content }}
    </div>
    <div class="blogitem-foot">
      <div class="blogitem-foot-sort">
        所属分类:
        <span>{{ listArrObj.classify }}</span>
      </div>
      <div class="blogitem-foot-author">
        作者:
        <span>{{ listArrObj.author }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Time from '../assets/js/Time.js'
export default {
  props: {
    listArrObj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  created () {
    this.getTime()
  },
  methods: {
    getTime (time) {
      return Time.myDate(time, 3)
    }
  }
}
</script>
<style lang="less" scoped>
.blogitem {
  background: #fff;
  padding: 20px 10px;
  .blogitem-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    .blogitem-top-title {
      font-size: 22px;
      font-weight: bold;
      width: 700px;
      word-wrap: break-word; //超出自动换行
      white-space: normal;
      word-break: break-all;
    }
    .blogitem-top-time {
      font-size: 14px;
      color: #999;
    }
  }
  .blogitem-center {
    background: #f5f6f7;
    line-height: 25px;
    color: rgb(94, 88, 88);
    font-size: 15px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    word-wrap: break-word; //超出自动换行
    white-space: normal;
    word-break: break-all;
  }
  .blogitem-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .blogitem-foot-sort {
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        font-size: 15px;
      }
    }
    .blogitem-foot-author {
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        font-size: 15px;
      }
    }
  }
}
</style>
