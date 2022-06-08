<template>
  <div class="home">
    <br />
    <div>
      <v-btn elevation="2">空氣污染</v-btn>
      <v-btn elevation="2">水污染</v-btn>
    </div>
    <div class="center">
      <v-avatar color="teal" size="250">
        <span class="white--text text-h1">{{ fields.aqi }}</span>
      </v-avatar>
      <v-list subheader two-line>
        <h2>空氣污染資料</h2>
        <h3>{{ fields.status }}</h3>

        <v-list-item>
          <v-list-item-action-text style="font-size: 20px"
            >二氧化硫</v-list-item-action-text
          >

          <v-list-item-content>
            <v-list-item-title>{{ fields.so2 }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action-text style="font-size: 20px"
            >懸浮微粒
          </v-list-item-action-text>

          <v-list-item-content>
            <v-list-item-title> {{ fields.pm10_avg }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action-text style="font-size: 20px"
            >一氧化碳</v-list-item-action-text
          >

          <v-list-item-content>
            <v-list-item-title> {{ fields.co }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      {{ fields.publishtime }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: () => ({
    fields: {},
  }),
  async mounted() {
      if (!localStorage.getItem("username")) {
      this.$router.push({ name: "Login" });
    }
    await axios
      .get(
        "https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=3fed6367-0e50-412a-8747-a47487c03977"
      )
      .then((response) => {
        this.fields = response.data.records[30];
        console.log(this.fields);
      });
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
