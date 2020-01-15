<template>
  <div class="header">
    <div class="admin-info">
      <el-avatar :size="40" src="https://empty">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" >
      </el-avatar>
      <div class="info">
        <span>超级管理员</span>
        <i>状态</i>
        <b />
      </div>
    </div>
    <div class="header-sidebar">
      2131
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
.header {
  height: 100%;
  .admin-info {
    float: left;
    // background-color: skyblue;
    padding-top: 10px;
    height: 50px;
    width: 210px;
    overflow: hidden;
    .el-avatar {
      float: left;
      margin: 0 18px 0 14px;
    }
    .info {
      line-height: 20px;
      float: left;
      span {
        font-size: 14px;
        display: block;
      }
      i {
        vertical-align: middle;
        font-size: 12px;
        font-style: normal;
      }
      b {
        margin-left: 4px;
        display: inline-block;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        background-color: #67C23A;
      }
    }
  }
  .header-sidebar {
    float: left;
  }
}
</style>
