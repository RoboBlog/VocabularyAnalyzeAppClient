<template>
  <div>
    <h1>Sign Up</h1>
    <br/>
    <input type = "text" v-model="credentials.username" placeholder="Enter your username">
    <br />
    <br />
    <input type = "password" v-model="credentials.password" placeholder="Enter your password">
    <br />
    <br />
    <input type = "text" v-model="credentials.email" placeholder="Enter your email">
    <button v-on:click="signUp">SignUp</button>//Or Click enter
    <!--VALIDATE-->
  </div>
</template>

<script>
  export default {
    name: 'signup',
    data() {
      return {
        credentials: {
          username: '',
          password: '',
          email: ''
        }
      };
    },
    methods: {
      signUp: function() {
        console.log(this.credentials)
        this.$http.post('http://localhost:8080/signup', body).then(response =>{
          this.words = response.body;
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>
