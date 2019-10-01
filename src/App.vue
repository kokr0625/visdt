<template>
  <v-app>
    <v-app-bar app dark absolute clipped-left>
     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-app-bar>
    
     <v-navigation-drawer
      v-model="drawer"
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" 
      dark
      app clipped                  
    >
      <v-list
        dense
        rounded
              nav
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-subheader>Head</v-subheader>
          <v-divider :inset="inset"></v-divider>
          <v-list-item to="/">
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item to= "/about">
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  

    <v-content>
      <router-view/>
    </v-content>
    <v-footer app dark>{{new Date()}}</v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: true,
  }),
};
</script>
