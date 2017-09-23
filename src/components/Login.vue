<template>
  <div class="wrapper">
    <div class="main-panel-no-sidebar">


      <br />
      <br />
      <br />
      <br />



      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <div class="card-select ">
              <div v-on:keyup.enter="login" class = 'btt'>
                <br />
              <h1 class="title text-danger">Zaloguj się</h1>
              <br/>
              <input type = "text" v-model="credentials.username" placeholder="nazwa użytkownika">
              <br />
              <br />
              <input type = "password" v-model="credentials.password" placeholder="hasło">
                <br />
                <br />

                <button v-on:click="login" class="btn btn-primary">Login</button>
              <!--VALIDATE-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          location.href = "/#/user/";
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>
