<template>
  <div class="layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside class="side-menu" width="210px">
          <side-menu />
        </el-aside>
        <app-main />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { SideMenu, AppMain, Header } from './components'
export default {
  name: 'Layout',
  components: {
    SideMenu,
    AppMain,
    Header
  },
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="less">
.layout {
  height: 100%;
  .el-container {
    .el-header {
      padding: 0%;
    }
    height: 100%;
    .side-menu {
      height: 100%;
      background-color: skyblue;
      .el-menu {
        border: none;
        width: 210px;
        background: skyblue;
      }
    }
    .el-header {
      background-color: #fff;
      line-height: 60px;
    }
    .el-main {
      background-color: #f1f1f1;
    }
  }
}
</style>
