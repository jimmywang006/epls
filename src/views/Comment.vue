<template>
  <div>
    <div>
      <div class="main">
        <img
          :src="commentApi.img"
          alt=""
          height="25%"
          width="100%"
          class="img"
        />

        <v-rating
          :value="commentApi.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="30"
        ></v-rating>
      </div>

      <div v-for="item2 in commentApi.comment" :key="item2.id">
        <v-card class="mx-auto" max-width="500" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">
                {{ item2.name }}
              </v-list-item-title>
              <v-rating
                :value="item2.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="30"
              ></v-rating>
              <v-list-item-subtitle>{{ item2.text }} </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <br />
      </div>
    </div>
    <br />
    <div class="buttonAdd">
      <v-btn depressed color="primary" @click="inshow = !inshow">評論 </v-btn>
    </div>

    <v-overlay :value="inshow">
      <div class="overView">
        <v-rating v-model="rating" color="amber" size="30" large></v-rating>
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
          v-model="text"
        ></v-textarea>

        <v-btn color="success" @click="submit()"> 送出 </v-btn>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config";
export default {
  data() {
    return {
      paramid: null,
      inshow: false,
      rating: 0,
      text: "",
      commentApi: [],
    };
  },
  async mounted() {
    
    this.paramid = this.$route.params.id;

    await axios
      .get(`${config.api}/api/commentclass/${this.paramid}`)
      .then((response) => {
        this.commentApi = response.data;
        console.log(this.commentApi);
      });
  },
  methods: {
    submit() {
   
      let submit = {
        name:localStorage.getItem('username'),
        text: this.text,
        rating: this.rating,
        class_id: this.paramid,
      };
      axios.post(`${config.api}/api/comment/add`, submit).then((response) => {
        console.log(response.data);
        setTimeout(() => {
        this.$router.go(0);
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.main .v-rating {
  text-align: center;
}
.buttonAdd {
  text-align: center;
}
.buttonAdd .v-btn {
  width: 40%;
}
.overView {
  text-align: center;
}
.overView .v-textarea {
  width: 400px;
}
@media screen and (min-width: 780px) {
  .img {
    display: block;
    margin: auto;
    width: 600px;
  }
  .buttonAdd .v-btn {
    width: 500px;
  }
}
</style>
