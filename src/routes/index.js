// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout'
import EnsureLoggedIn from './EnsureLoggedIn'
import Login from './Login'
import AdminHome from './Home'
import CounterRoute from './Counter'
import ClassSChool from './ClassManage'
import TagsRoute from './Tags'
import RecColumRoute from './RecommendColumn'
import { PlateRoute, ActivityRoute } from './Plate'
import BannerRoute from './Banner'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute: Login(store),
  childRoutes : [
    EnsureLoggedIn(store, [
      AdminHome(store, [
        CounterRoute(store),
        ClassSChool(store),
        PlateRoute(store),
        TagsRoute(store),
        ActivityRoute(store),
        CounterRoute(store),
        RecColumRoute(store),
        BannerRoute(store)
      ]),
    ]),
    Login(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
