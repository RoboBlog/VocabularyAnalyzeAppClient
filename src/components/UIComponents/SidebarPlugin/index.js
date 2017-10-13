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
      name: 'Moje słowniki',
      icon: 'ti-panel',
      path: '/user/dictionaries'
    },
    {
      name: 'Profil',
      icon: 'ti-user',
      path: '/user/profile'
    },
    {
      name: 'Quiz',
      icon: 'ti-view-list-alt',
      path: '/user/quiz'
    },
    {
      name: 'Gry',
      icon: 'ti-map',
      path: '/user/games'
    },
    {
      name: 'Fiszki',
      icon: 'ti-bell',
      path: '/user/flashcards'
    },
    // {
    //   name: 'table',
    //   // icon:
    //   path: '/user/table-list'
    // }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
};

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    });

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    });
    Vue.component('side-bar', Sidebar)
  }
};

export default SidebarPlugin
