<template>
  <div class="row">

    <div>
      <br/>
      <div class="padCont col-lg-3 col-sm-6">
        <stats-card>
          <div slot="content"><h3><b>Tryb pisania</b></h3></div>

          <div class="stats" slot="footer">
            <router-link :to="{path : '/user/quiz/writing/pe/' + this.$route.params.id}">
              <button class="btn btn-info btn-fill">Pl ->   Eng</button>
            </router-link>

            <router-link :to="{path : '/user/quiz/writing/ep/' + this.$route.params.id}">
              <button class="btn btn-info btn-fill">Eng ->   Pl</button>
            </router-link>

          </div>
        </stats-card>
      </div>
      <div class="padCont col-lg-3 col-sm-6">
        <stats-card>
          <div slot="content"><h3><b>Dopasowania</b></h3></div>

          <div class="stats" slot="footer">
            <router-link :to="{path : '/user/quiz/select/pe/' + this.$route.params.id}">
              <button class="btn btn-info btn-fill">Pl ->   Eng</button>
            </router-link>

            <router-link :to="{path : '/user/quiz/select/ep/' + this.$route.params.id}">
              <button class="btn btn-info btn-fill">Eng ->   Pl</button>
            </router-link>
          </div>

        </stats-card>
      </div>


      <div class="padCont col-lg-3 col-sm-6 notav">
        <stats-card>
          <div slot="content"><h3><b>Test</b></h3></div>
          <div class="stats" slot="footer">
            <i>FUNKCJA JESZCZE NIEDOSTĘPNA</i>
          </div>
        </stats-card>
      </div>


    </div>

    <!--<div class="contentFlashcard">-->
    <!--<div class="card card-flashcard">-->
    <!--<div class="header">-->
    <!--</div>-->
    <!--<div class="content">-->
    <!--<center>-->
    <!--<h1 v-if="word">-->
    <!--{{word.englishWord}}-->
    <!--</h1>-->
    <!--<h1 v-else>-->
    <!--brak słówek-->
    <!--</h1>-->
    <!--</center>-->
    <!--</div>-->
    <!--<br/>-->
    <!--</div>-->
    <!--</div>-->

  </div>

</template>


<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'

  export default {
    name: 'quizView',
    components:{
      StatsCard,
      ChartCard
    },
    data() {
      return {
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
