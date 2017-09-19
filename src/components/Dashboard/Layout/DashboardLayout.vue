<template>
  <div class="wrapper">
    <side-bar type="sidebar" class="sidepad" :sidebar-links="$sidebar.sidebarLinks"></side-bar>

<!---->
    <div class="main-panel">
      <div class="headnav">
        <nav class="navbar navbar-default">
        </nav>
      </div>
      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
