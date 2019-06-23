export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: 'Helloworld',
      },
    
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
          { path: '/dashboard/tabel',  component: 'Dashboard/Tabel' },
          { path: '/dashboard/tabel2', component: 'Dashboard/Tabel2' }
        ]
      },

      {
        path: '/commen',
        routes: [
          { path: '/commen/button', component: 'Commen/Button' },
          { path: '/commen/icon', component: 'Commen/Icon' },
          { path: '/commen/typography', component: 'Commen/Typography' },
        ]
      },

      {
        path: '/display',
        routes: [
          { path: '/display/grid', component: 'Display/Grid' },
          { path: '/display/outline', component: 'Display/Outline' },
          { path: '/display/outline2', component: 'Display/Outline2' },
        ]
      },

      {
        path: '/navigation',
        routes: [
          { path: '/navigation/affixdemo', component: 'Navigation/AffixDemo' },
        ]
      },



      {
        path: '/threemenu',
        routes: [
          { 
            path: '/threemenu/secondmenu', 
            routes: [
              { path: '/threemenu/secondmenu/pageone', 
                component: 'Threemenu/Secondmenu/Pageone'
               },
            ]
          },
        ]
      },



      
    ]
  }],
  singular: true,
};

