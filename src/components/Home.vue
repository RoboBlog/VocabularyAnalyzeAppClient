<template>
  <div>
    <router-link to="WordsFromFile"><button>Words From File</button></router-link>
    <router-link to="WordsFromUrl"><button>Words From Url</button></router-link>
    <br />
    <br/>

    <router-link to="Login"><button>SignIn</button></router-link>
    or
    <router-link to="SignUp"><button>SignUp</button></router-link>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        url: '',
        words: Map,
      };
    },
    methods: {
        sendUrl: function() {
          this.$http.post('http://localhost:8080/fetchwebsite?url='+this.url).then(response =>{
              this.words = response.body;
            }, response =>{
            alert("Oups");
          });
        },
    }
  }

</script>

