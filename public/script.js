var Vue = Vue
var VueRouter = VueRouter
var Vuetify = Vuetify

Vue.component('Navigation', {
  template: `
<div id="app">
      
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
<v-list-item 
v-for="it in menus" :key="it.title" :to="it.to" @click="">
<v-list-item-action>
            <v-icon>{{it.title}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{it.to}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</vlist>


    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
     <v-footer app dark>{{Date()}}
      </v-footer>

    
</div>

  `,

  data() {
    return {
      menus: [{
          title: 'dashboard',
          to: '/',
        },{
          title: 'settings',
          to: '/01',
        },{
          title: 'mdi-tennis',
          to: '/02'
        }
      ],
      drawer: null,

    }
  },

  methods: {
   
  }
})

const CHome = {
  template: ` <v-container fluid>
          <v-layout wrap text-xs-center>
            <v-flex xs12>
              <h1 mb-5 class="display-3 mb-5">
                Vuetify demo
              </h1>
            </v-flex>
          </v-layout>

          <v-layout row wrap mb-4>
            <v-flex xs12 sm6 md3 lg3 xl3 pa-4 deep-purple lighten-4>
              <h6 class="title  mb-4">Breakpoints</h6>
              <div class="body-1">
                <p>xl = @media (min-width: 1904px) 4k and ultra-wides</p>
                <p>lg = @media (min-width: 1264px) desktop</p>
                <p>md = @media (min-width: 960px) large tablet to laptop</p>
                <p>sm = @media (min-width: 600px) small to medium tablet</p>
                <p>xs = @media (min-width: 0) small to large handset</p>
              </div>
            </v-flex>

            <v-flex xs12 sm6 md3 pa-4 light-blue lighten-4>
              <h6 class="title  mb-4">Widths</h6>
              <div class="body-1">
                <p>flex-basis and max-width</p>
                <p>xs12 = 100%</p>
                <p>xs6 = 50%</p>
                <p>xs5 = 41.6%</p>
                <p>xs4 = 33.3%</p>
                <p>xs3 = 25%</p>
                <p>xs2 = 16.6%</p>
                <p>xs1 = 8.3%</p>
              </div>
            </v-flex>

            <v-flex xs12 sm6 md3 pa-4 orange lighten-4>
              <h6 class="title  mb-4">Spacing</h6>
              <div class="body-1">
                <p>p/m 1-5</p>
                <p>pa</p>
                <p>py</p>
                <p>ph</p>
                <p>pt</p>
                <p>pr</p>
                <p>pb</p>
                <p>pl</p>
              </div>
            </v-flex>

            <v-flex xs12 sm6 md3 pa-4 blue-grey lighten-4>
              <div class="body-1">
                <h6 class="title  mb-4">Helpers</h6>
                <p>d-flex</p>
                <p>d-inline-flex</p>
                <p>d-block</p>
                <p>d-inline-block</p>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <v-btn color="secondary" href="https://vuetifyjs.com/vuetify/quick-start" target="_blank" rel="noopener">
                Vuetify documentation
              </v-btn>
            </v-flex>

            <v-flex xs12>
              <v-btn flat href="https://glitch.com/edit/#!/vuetify" target="_blank" rel="noopener">
                View the code for this page
              </v-btn>
            </v-flex>
          </v-layout>

        </v-container>

  `
}

const Home = {
  template: '<p>This is the homepage.</p>'
}
const Two = {
  template: '<p>This is the second page.</p>'
}

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/01',
    component: Two
  },{
    path: '/02',
    component: CHome
  }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      dark: true
    },
  }),
  data: {
    //
  }
})