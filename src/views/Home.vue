<template>
  <div class="home">
    <br />
    <div>
      <v-btn elevation="2" @click="fclick()">空氣污染</v-btn>
      <v-btn elevation="2" @click="wclick()">水污染</v-btn>
    </div>
    <div class="center" v-if="fTrue">
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

    <div class="center" v-if="wTrue">
      <v-avatar color="teal" size="250">
        <span class="white--text text-h1">{{ water.result_value }}</span>
      </v-avatar>
        <v-list subheader two-line>
        <h2>酸雨監測資料</h2>

        <v-list-item>
          <v-list-item-action-text style="font-size: 20px"
            >地區</v-list-item-action-text
          >

          <v-list-item-content>
            <v-list-item-title>{{ water.county }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action-text style="font-size: 20px"
            >檢測地址
          </v-list-item-action-text>

          <v-list-item-content>
            <v-list-item-title> {{ water.site_address}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action-text style="font-size: 20px"
            >雨量累計單位</v-list-item-action-text
          >

          <v-list-item-content>
            <v-list-item-title> {{ water.item_unit }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       
      
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
    water:{},
    fTrue:true,
    wTrue:false,
  
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

     await axios
      .get(
        "https://data.epa.gov.tw/api/v2/acidr_p_01?api_key=3fed6367-0e50-412a-8747-a47487c03977"
      )
      .then((response) => {
        this.water = response.data.records[1];
        console.log(this.water);
      });
  

 
        
  },
  methods:{

    fclick(){
      this.fTrue =true
      if(this.fTrue){
        this.wTrue = false
      }
    },
    wclick(){
        this.wTrue =true
      if(this.wTrue){
        this.fTrue = false
      }

    }
  }
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
