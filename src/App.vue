<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <router-view></router-view>
    <side-bar type="navbar" :sidebar-links="$sidebar.sidebarLinks">
    </side-bar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
