<template>
  <div>
    <div>
      <v-app-bar
        absolute
        color="blue darken-3"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="color: aliceblue">環保小尖兵</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
    </div>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <h3>歡迎！{{ username }}</h3>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/home">
            <v-list-item-title>首頁</v-list-item-title>
          </v-list-item>

          <v-list-item to="/commentclass">
            <v-list-item-title>評論區</v-list-item-title>
          </v-list-item>
          <div class="text-center">
            <v-btn class="ma-2" outlined color="indigo" @click="logout">
              登出
            </v-btn>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: false,
      group: null,
      username: "",
    };
  },
  mounted() {
    var username = localStorage.getItem("username");
    this.username = username;
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
