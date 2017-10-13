<template>
  <div class="wrapper">
    <div class="main-panel-no-sidebar">


      <br />
      <br />
      <br />



      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center">
            <div class="card-select ">
              <div v-on:keyup.enter="login" class = 'btt'>
                <br />
                <h1 class="title text-danger">Zarejestruj się</h1>
                <br />
                <input type = "text" v-model="credentials.username" placeholder="nazwa użytkownika">
                <br />

                <br />
                <input type = "password" v-model="credentials.password" placeholder="hasło">
                <br />
                <br />
                <input type = "text" v-model="credentials.email" placeholder="e-mail">
                <br />
                <br />
                <button v-on:click="signUp" class="btn btn-primary">Zarejestruj</button>

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
        this.$http.post(window.url + 'signup', body).then(response => {
          this.words = response.body;
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>
