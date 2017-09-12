<template>
  <div>
    <router-link :to="{name : 'WordsFromFile'}"><button>Words From File</button></router-link>
    <router-link :to="{name : 'WordsFromUrl'}"><button>Words From Url</button></router-link>
    <br />
    <br/>

    <router-link :to="{name : 'Login'}"><button>SignIn</button></router-link>
    or
    <router-link :to="{name : 'SignUp'}"><button>SignUp</button></router-link>

<br />
<br />
    <h2><b>USER</b></h2>
    ------------------------------------------------------------------------------------------------------------------------------------
    <br />


    <router-link :to="{name : 'Profile'}"><button>Profile</button></router-link>
    <router-link :to="{name : 'Quiz'}"><button>Quiz</button></router-link>
    <router-link :to="{name : 'Quiz'}"><button>Quiz History</button></router-link>
    <router-link :to="{name : 'Quiz'}"><button>The Hardest Words</button></router-link>
    <router-link :to="{name : 'Quiz'}"><button>flashcards</button></router-link>


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
          this.$http.post('http://localhost:9000/fetchwebsite?url='+this.url).then(response =>{
              this.words = response.body;
            }, response =>{
            alert("Oups");
          });
        },
    }
  }

</script>

