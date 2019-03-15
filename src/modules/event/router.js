export default [{
    path: '/events',
    name: 'PublicEvents',
    component: () => import( /* webpackChunkName: "PublicEvents" */ './views/PublicEvents')
  }]
  