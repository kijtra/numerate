const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)
const Home = () => import('~/pages/home').then(m => m.default || m)

export default [
  { path: '/', name: 'home', component: Home },
  { path: '*', component: NotFound }
]
