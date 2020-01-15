<template>
  <div>
    <el-menu :collapse="isCollapse" :default-active="activeMenu" :router="true">
      <side-menu-item v-for="item of router" :key="item.path" :item="item" :base-path="item.path"/>
    </el-menu>
  </div>
</template>

<script>
import SideMenuItem from './SideMenuItem'
export default {
  name: 'SideMenu',
  components: {
    SideMenuItem
  },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    router() {
      return this.$router.options.routes
    },
    currentPath() {
      return this.$router.currentRoute.path
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted() {
    // console.log(this.currentPath)
  }
}
</script>
