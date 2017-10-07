import { injectReducer } from '../../store/reducers'

export default (store, childRoutes) => ({
  path : 'admin',
  childRoutes: childRoutes,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AdminHome = require('./components').default
      // const reducer = require('./modules/counter').default
      // const reducer = require('../Login/modules/reducer').default
      // injectReducer(store, { key: 'login', reducer })
      /*  Add the reducer to the store on key 'counter'  */
      // injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, AdminHome)

    /* Webpack named bundle   */
    }, 'admin')
  }
})
