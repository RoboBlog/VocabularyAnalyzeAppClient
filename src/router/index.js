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
import FlashcardLanguage from '@/components/GeneralViews/FlashcardLanguage'

import Register from '@/components/GeneralViews/Register'
import Info from '@/components/GeneralViews/Info'
import QuizWriting from '@/components/GeneralViews/QuizWritingMode'
import QuizSelect from '@/components/GeneralViews/QuizSelectMode'


const require = true;
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
    meta: {requiresAuth: require},
    children: [
      {
        path: 'translator',
        name: 'translator',
        meta: {requiresAuth: require},
        component: Translator
      },
      {
        path: 'dictionaries',
        name: 'dictionaries',
        meta: {requiresAuth: require},
        component: Dictionaries
      },
      {
        path: 'dictionary/:id',
        name: 'dictionary/:id',
        meta: {requiresAuth: require},
        component: Dictionary
      },
      {
        path: 'profile',
        name: 'profile',
        meta: {requiresAuth: require},
        component: UserProfile
      },
      {
        path: 'games',
        name: 'games',
        meta: {requiresAuth: require},
        component: Games
      },
      {
        path: 'flashcards',
        name: 'flashcards',
        meta: {requiresAuth: require},
        component: Flashcards
      },
      {
        path: 'flashcardlanguage',
        name: 'flashcardlanguage',
        meta: {requiresAuth: require},
        component: FlashcardLanguage
      },
      {
        path: 'flashcard/:id',
        name: 'flashcard/:id',
        meta: {requiresAuth: require},
        component: Flashcard
      },
      {
        path: 'quiz',
        name: 'quiz',
        component: Quiz,
        meta: {requiresAuth: require},
      },

    {
       path: 'quizview/:id',
       name: 'quizview/:id',
       component: QuizView,
      meta: {requiresAuth: require},
    },
      {
        path: 'quiz/select/:type/:id',
        name: 'quiz/select/:type/:id',
        component: QuizSelect,
        meta: {requiresAuth: require},
      },

      {
        path: 'quiz/writing/:type/:id',
        name: 'quiz/writing/:type/:id',
        component: QuizWriting,
        meta: {requiresAuth: require},
      },

      {
        path: 'info',
        name: 'info',
        component: Info,
        meta: {requiresAuth: require},
      }
    ]
  },
  { path: '*', component: NotFound }
];

export default routes
