<template>
  <div class="login">
  
  
    <v-form ref="form" v-model="valid" lazy-validation>
      <h1>環保小尖兵登錄</h1>
      {{ error }}
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
       class="input-group--focused"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
         :type="show4 ? 'text' : 'password'"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" @click="login()"> 登錄 </v-btn>
    </v-form>
  </div>
</template>

<script>


import axios from "axios";
import config from "../../config"; 
export default {

  data: () => ({
    valid: true,
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    error: "",
    userApi: [],
  }),
  mounted(){
    if(localStorage.getItem('username')){
          this.$router.push({ name: "Home" });   
    }

  },
  methods: {
    login() {
      let Login = {
        email: this.email,
        password: this.password,
      };

      axios.post(`${config.api}/api/user/login`, Login).then((response) => {
        if (response.data.message == "登錄成功") {
          this.userApi = {
            id: response.data.id,
            name: response.data.name,
          };
          localStorage.setItem('userid', response.data.id);
           localStorage.setItem('username', response.data.name);
          this.$router.push({ name: "Home" });
          console.log(response.data);
        } else if (response.data.message == "沒有這個帳號") {
          this.email = "";
          this.password = "";
          this.error = "帳號錯誤 請重新登錄";
        } else if (response.data.message == "密碼錯誤") {
          this.email = "";
          this.password = "";
          this.error = "密碼錯誤 請重新登錄";
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 200px;
}
.login .v-form {
  width: 400px;
}

.login .v-btn {
  width: 100%;
}
</style>
