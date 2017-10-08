import Login from '@/components/Login'
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'
import SelectSource from '@/components/GeneralViews/SelectSource'
import FromFile from '@/components/GeneralViews/WordsFromFile'
import FromUrl from '@/components/GeneralViews/WordsFromUrl'
import Translator from '@/components/GeneralViews/Translator'
import UserProfile from '@/components/Dashboard/Views/UserProfile'
import NotFound from '@/components/GeneralViews/NotFoundPage'
import Dictionaries from '@/components/Dictionary/Dictionaries'
import Dictionary from '@/components/Dictionary/Dictionary'
import Games from '@/components/GeneralViews/Games'
import Quiz from '@/components/GeneralViews/Quiz'
import QuizView from '@/components/GeneralViews/QuizView'
import Flashcards from '@/components/GeneralViews/Flashcards'
import Flashcard from '@/components/GeneralViews/Flashcard'
import Register from '@/components/GeneralViews/Register'

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
    path: '/register',
    name: 'register',
    component: Register
  },

  //       path: 'dictionary',
  //       name: 'dictionary',
  //       component: Dictionary

  {
    path: '/user',
    component: DashboardLayout,
    redirect: '/user/profile',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'translator',
        name: 'translator',
        meta: { requiresAuth: true },
        component: Translator
      },
      {
        path: 'dictionaries',
        name: 'dictionaries',
        meta: { requiresAuth: true },
        component: Dictionaries
      },
      {
        path: 'dictionary/:id',
        name: 'dictionary/:id',
        meta: { requiresAuth: true },
        component: Dictionary
      },
      {
        path: 'profile',
        name: 'profile',
        meta: { requiresAuth: true },
        component: UserProfile
      },
      {
        path: 'games',
        name: 'games',
        meta: { requiresAuth: true },
        component: Games
      },
      {
        path: 'flashcards',
        name: 'flashcards',
        meta: { requiresAuth: false },
        component: Flashcards
      },
      {
        path: 'flashcard/:id',
        name: 'flashcard/:id',
        meta: { requiresAuth: true },
        component: Flashcard
      },
      {
        path: 'quiz',
        name: 'quiz',
        component: Quiz,
        meta: { requiresAuth: true },
      },

    {
       path: 'quizview/:id',
       name: 'quizview/:id',
       component: QuizView,
      meta: { requiresAuth: true },
    },
      // {
      //   path: 'table-list',
      //   name: 'table-list',
      //   component: TableList,
      //   meta: { requiresAuth: true },
      // }
    ]
  },
  { path: '*', component: NotFound }
];

export default routes
