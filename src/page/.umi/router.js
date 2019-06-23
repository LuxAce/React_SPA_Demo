import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';


const Router = DefaultRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/",
        "component": require('../Helloworld').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "component": require('../Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "component": require('../Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "component": require('../Dashboard/Workplace').default,
            "exact": true
          },
          {
            "path": "/dashboard/tabel",
            "component": require('../Dashboard/Tabel').default,
            "exact": true
          },
          {
            "path": "/dashboard/tabel2",
            "component": require('../Dashboard/Tabel2').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/commen",
        "routes": [
          {
            "path": "/commen/button",
            "component": require('../Commen/Button').default,
            "exact": true
          },
          {
            "path": "/commen/icon",
            "component": require('../Commen/Icon').default,
            "exact": true
          },
          {
            "path": "/commen/typography",
            "component": require('../Commen/Typography').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/display",
        "routes": [
          {
            "path": "/display/grid",
            "component": require('../Display/Grid').default,
            "exact": true
          },
          {
            "path": "/display/outline",
            "component": require('../Display/Outline').default,
            "exact": true
          },
          {
            "path": "/display/outline2",
            "component": require('../Display/Outline2').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/navigation",
        "routes": [
          {
            "path": "/navigation/affixdemo",
            "component": require('../Navigation/AffixDemo').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/threemenu",
        "routes": [
          {
            "path": "/threemenu/secondmenu",
            "routes": [
              {
                "path": "/threemenu/secondmenu/pageone",
                "component": require('../Threemenu/Secondmenu/Pageone').default,
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/lux/ReactProject/course-demo-umi-v4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
