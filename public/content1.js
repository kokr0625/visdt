var Vue = Vue
var Vuetify = Vuetify

Vue.component('contentHome', {
  template: `
<v-container fluid>
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

  `,

  data() {
    return {
      
    }
  },

  methods: {
    
  }
})

const Home = {
  template: '<p>This is the homepage.</p>'
}
const Two = {
  template: '<p>This is the second page.</p>'
}





var app = new Vue({
  
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