<template>
  <h2>Login</h2>

  <form method="post" class="form">
    <div class="emailForm">
      <input class="loginInput" type="email" v-model="email" name="email" placeholder="info@mailaddress.com">
    </div>

    <div class="passwordForm">
      <input class="loginInput" v-model="password" name="password" type="password" placeholder="••••••••••••">
    </div>

    <div class="submitButton">
      <input class="submitInput" @click="loginButtonPressed" type="submit" value="Sign in">
    </div>

  </form>
</template>

<script>
import { AdminApi } from "@/api/api.js";

export default {
  name: "AdminLoginPage",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
     loginButtonPressed(event) {
      if (this.email && this.password) {
        event.preventDefault();
        const t = this;

        AdminApi.login({ email: this.email, password: this.password }).then((res) => {
          localStorage.setItem("x-access-token", res.data.token);
          t.$router.push("/admin/panel");
        }, () => {
          alert("Incorrect username or password");
        });
      }
    }
  }
}

</script>

<style scoped>
h1 {
  color: #27A5E7;
}

.loginInput {
  color: #333;
  padding: 10px;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  margin: 0 auto 20px;
}

.loginInput{
  width: 200px;
}

.passwordForm {
  width: 200px;
  margin: 0 auto;
}

.submitInput {
  width: 150px;
  height: 40px;
  border: 1px solid black;
}

.submitInput:active {
  background-color: rgba(178, 80, 80, 0.97);
}

.submitInput:hover {
  background-color: #eaeaea;
}
</style>