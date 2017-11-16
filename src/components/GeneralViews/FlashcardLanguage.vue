<template>
  <div class="row">
    <div class="contentFlashcard">
      <div class="card card-flashcard">
        <div class="content">

          <center>
            <h1>
              Język
            </h1>
            <br/>

            <router-link :to="{path : '/user/quiz/writing/ep/' + this.$route.params.id}">
              <button class="btn btn-info btn-fill">Eng ->   Pl</button>
            </router-link>

            <router-link :to="{path : '/user/quiz/writing/ep/' + this.$route.params.id}">
              <button class="btn btn-info btn-fill">Eng ->   Pl</button>
            </router-link>

          </center>
        </div>
        <br/>
      </div>
    </div>
  </div>
</template>


<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'

  export default {
    name: 'quizView',
    components: {
      StatsCard,
      ChartCard
    },
    data() {
      return {
//        word: null,
//        word: null,
//        id: null
      };
    },
    methods: {
//      sendAnswer: function () {
//        let options = {emulateJSON: true};
//        this.$http.post( + this.$route.params.id + '/16', options, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
//          console.log(response)
//        })},

    }
//    created: function () {
//      this.$http.get(window.url + '/api/quiz/' + this.$route.params.id+'/exercise').then(response => {
//        this.word = response.body.userWord.word;
//        this.id = response.body.id;
//      }, response => {
//        alert("Oups");
//      });
//    }
  }

</script>
