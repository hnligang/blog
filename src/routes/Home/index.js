import { injectReducer } from '../../store/reducers'

export default (store, childRoutes) => ({
  path : 'home',
  childRoutes: childRoutes,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./components').default
      // const reducer = require('./modules/counter').default
      // const reducer = require('../Login/modules/reducer').default
      // injectReducer(store, { key: 'login', reducer })
      /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, Home)

    /* Webpack named bundle   */
    }, 'home')
  }
})
