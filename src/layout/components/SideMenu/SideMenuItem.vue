<template>
  <div>
    <template v-if="!item.hidden">
      <template
        v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow"
      >
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{'submenu-title-noDropdown':!isNest}"
        >
          <i class="el-icon-location" />
          <span>{{ onlyOneChild.name }}</span>
        </el-menu-item>
      </template>

      <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
        <template v-if="item.meta" slot="title">
          <i class="el-icon-menu" />
          <span>{{ item.name }}</span>
        </template>
        <side-menu-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-submenu>

      <!-- <template v-if="item.children && item.children.length && item.children[1]">
        <el-submenu :key="item.path" :index="item.path" popper-append-to-body>
          <template slot="title">
            <i class="el-icon-location" />
            <span>{{ item.name }}</span>
          </template>
          <side-menu-item v-for="child of item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)"/>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :key="item.path" :index="resolvePath(item.path).replace('/'+item.path, '')">
          <template slot="title">
            <i class="el-icon-menu" />
            <router-link :to="resolvePath(item.path).replace('/'+item.path, '')" tag="span">{{ item.name }}</router-link>
          </template>
        </el-menu-item>
      </template>-->
    </template>
  </div>
</template>

<script>

function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

import path from 'path'
export default {
  name: 'SideMenuItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 获取是否只有一个子集路由
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // 只有一个子选项时使用
          this.onlyOneChild = item
          return true
        }
      })

      // 当只有一个子路由时默认显示子路由
      if (showingChildren.length === 1) {
        return true
      }

      // 如果没有要显示的子路由器，则显示父路由
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    // 解析路径
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      // console.log(routePath)
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
