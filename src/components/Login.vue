<template>
  <div class="hello">
    <h1>Login</h1>
    <br/>
    <input type = "text" v-model="credentials.username" placeholder="Enter your username">
    <br />
    <br />
    <input type = "password" v-model="credentials.password" placeholder="Enter your password">
    <button v-on:click="login">Login</button>//Or Click enter
    <!--VALIDATE-->
  </div>
</template>

<script>
  export default {
    name: 'home',
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
          console.log(this.credentials)
        this.$http.post('http://localhost:8080/login', body).then(response =>{
          this.words = response.body;
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>
