import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import Home from '@/components/Home'
import Login from '@/components/Login'
import WordsFromFile from '@/components/WordsFromFile'
import WordsFromUrl from '@/components/WordsFromUrl'
import SignUp from '@/components/SignUp'
import Profile from '@/components/user/Profile'
import Quiz from '@/components/quiz/Quiz'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Vuelidate)
Vue.use(Router)
Vue.use(VueResource)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/wordsfromurl',
      name: 'WordsFromUrl',
      component: WordsFromUrl
    },
    {
      path: '/wordsfromfile',
      name: 'WordsFromFile',
      component: WordsFromFile
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/quiz',
      name: 'Quiz',
      component: Quiz
    }

  ]
})
