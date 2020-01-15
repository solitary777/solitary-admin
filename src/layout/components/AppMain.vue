<template>
  <el-main>
    <router-view :key="key"/>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$router.path
    }
  }
}
</script>
