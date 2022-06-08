<template>
  <v-app>
    <AppBar  v-if="$route.path != '/'" />

    <v-main style="margin-top:50px;"> 
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
export default {
  name: 'App',
  components:{
    AppBar

  },

  data: () => ({
    //
  }),
};
</script>
