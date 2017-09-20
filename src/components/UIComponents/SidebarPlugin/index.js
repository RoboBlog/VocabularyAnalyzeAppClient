import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Tłumacz',
      icon: 'ti-panel',
      path: '/user/translator'
    },
    {
      name: 'Moje słówka',
      icon: 'ti-panel',
      path: '/user/dictionary'
    },
    {
      name: 'Profil',
      icon: 'ti-user',
      path: '/user/profile'
    },
    {
      name: 'Quiz',
      icon: 'ti-view-list-alt',
      path: '/user/table-list'
    },
    // {
    //   name: 'Typography',
    //   icon: 'ti-text',
    //   path: '/user/typography'
    // },
    // {
    //   name: 'Icons',
    //   icon: 'ti-pencil-alt2',
    //   path: '/user/icons'
    // },
    {
      name: 'Gry',
      icon: 'ti-map',
      path: '/user/maps'
    },
    {
      name: 'Powiadomienia',
      icon: 'ti-bell',
      path: '/user/notifications'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
