var Vue = Vue
var VueRouter = VueRouter
var Vuetify = Vuetify
var VHome = VHome

Vue.component('navigation', {
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
     <v-footer app dark>
      </v-footer>

    
</div>

  `,

  data() {
    return {
      menus: [{
          title: 'dashboard',
          to: '/',
        },
        {
          title: 'settings',
          to: '/02',
        },
      ],
      menuActive: false,
      drawer: null,

    }
  },

  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive
    }
  }
})

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
    path: '/02',
    component: Two
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