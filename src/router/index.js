import Login from '@/components/Login'
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'
import SelectSource from '@/components/GeneralViews/SelectSource'
import FromFile from '@/components/GeneralViews/WordsFromFile'
import FromUrl from '@/components/GeneralViews/WordsFromUrl'
import Translator from '@/components/GeneralViews/Translator'
import UserProfile from '@/components/Dashboard/Views/UserProfile'
import TableList from '@/components/Dashboard/Views/TableList'
import NotFound from '@/components/GeneralViews/NotFoundPage'
import Dictionaries from '@/components/Dictionary/Dictionaries'
import Dictionary from '@/components/Dictionary/Dictionary'
import Games from '@/components/GeneralViews/Games'
import Quiz from '@/components/GeneralViews/Quiz'
import QuizView from '@/components/GeneralViews/QuizView'
import Flashcards from '@/components/GeneralViews/Flashcards'
import Flashcard from '@/components/GeneralViews/Flashcard'
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
        path: 'translator',
        name: 'translator',
        component: Translator
      },
      {
        path: 'dictionaries',
        name: 'dictionaries',
        component: Dictionaries
      },
      {
        path: 'dictionary/:id',
        name: 'dictionary/:id',
        component: Dictionary
      },
      {
        path: 'profile',
        onChange: localStorage.getItem("jwtToken")!==null,
        name: 'profile',
        component: UserProfile
      },
      {
        path: 'games',
        name: 'games',
        component: Games
      },
      {
        path: 'flashcards',
        name: 'flashcards',
        component: Flashcards
      },
      {
        path: 'flashcard/:id',
        name: 'flashcard/:id',
        component: Flashcard
      },
      {
        path: 'quiz',
        name: 'quiz',
        component: Quiz
      },

    {
       path: 'quizview/:id',
       name: 'quizview/:id',
       component: QuizView
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
