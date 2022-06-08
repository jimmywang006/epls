<template>
  <div>
    <Card :commentApi="commentApi" />
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import axios from "axios";
import config from "../../config";
export default {
  name: "CommitClass",
  components: { Card },
  mounted() {
     if (!localStorage.getItem("username")) {
      this.$router.push({ name: "Login" });
    }
    axios.get(`${config.api}/api/commentclass`).then((response) => {
      this.commentApi = response.data;
      console.log(this.commentApi);
    });
  },

  data() {
    return {
      commentApi: [],
    };
  },
};
</script>
