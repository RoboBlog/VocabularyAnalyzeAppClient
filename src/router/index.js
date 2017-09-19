import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import Home from '@/components/Home'
import Login from '@/components/Login'
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'
import SelectSource from '@/components/GeneralViews/SelectSource'
import FromFile from '@/components/GeneralViews/WordsFromFile'
import FromUrl from '@/components/GeneralViews/WordsFromUrl'
import Overview from '@/components/Dashboard/Views/Overview'
import UserProfile from '@/components/Dashboard/Views/UserProfile'
import Notifications from '@/components/Dashboard/Views/Notifications'
import Icons from '@/components/Dashboard/Views/Icons'
import Maps from '@/components/Dashboard/Views/Maps'
import Typography from '@/components/Dashboard/Views/Typography'
import TableList from '@/components/Dashboard/Views/TableList'
import NotFound from '@/components/GeneralViews/NotFoundPage'

import WordsFromFile from '@/components/WordsFromFile'
import WordsFromUrl from '@/components/WordsFromUrl'
import SignUp from '@/components/SignUp'
import Profile from '@/components/user/Profile'
import Quiz from '@/components/quiz/Quiz'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(Vuelidate)
// Vue.use(Router)
// Vue.use(VueResource)
// Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/selectsource'
  },
  {
    path: '/selectsource',
    name: 'selectsource',
    component: SelectSource
  },
  {
    path: '/words/fromfile',
    name: 'fromfile',
    component: FromFile
  },
  {
    path: '/words/fromurl',
    name: 'fromurl',
    component: FromUrl
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Login
  },

  //       path: 'dictionary',
  //       name: 'dictionary',
  //       component: Dictionary

  {
    path: '/user',
    component: DashboardLayout,
    redirect: '/user/profile',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'profile',
        name: 'profile',
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  { path: '*', component: NotFound }
]

export default routes
