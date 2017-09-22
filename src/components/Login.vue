<template>
  <div v-on:keyup.enter="login">
    <h1>Login</h1>
    <br/>
    <input type = "text" v-model="credentials.username" placeholder="Enter your username">
    <br />
    <br />
    <input type = "password" v-model="credentials.password" placeholder="Enter your password">
    <button v-on:click="login">Login</button>
    <!--VALIDATE-->
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        credentials: {
            username: '',
            password: ''
        }
      };
    },
    methods: {
      login: function() {
        this.$http.post('http://localhost:9000/login', this.credentials).then(response =>{
          this.words = response.body;
          localStorage.setItem("jwtToken", response.headers.get('authorization'));
          location.href = "/";
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>
