export default [{
    path: '/events',
    name: 'PublicEvents',
    component: () => import( /* webpackChunkName: "PublicEvents" */ './views/PublicEvents')
  },
  {
    path: '/events/user',
    name: 'UserEvents',
    component: () => import( /* webpackChunkName: "UserEvents" */ './views/UserEvents')
  },
  {
    path: '/events/new',
    name: 'NewEvent',
    component: () => import( /* webpackChunkName: "NewEvent" */ './views/NewEvent')
  }]
  