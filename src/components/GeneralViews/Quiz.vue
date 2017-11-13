<template>
  <div>
    <center><h1>Wybierz słownik</h1></center>
    <div class="contentT row">
      <div class="padCont col-lg-3 col-sm-6" v-for="dictionary in dictionaries">
        <stats-card>
          <div slot="content" @click="createNewQuiz(dictionary.id)"><a><h4>{{dictionary.name}}</h4></a></div>
          <div class="stats" slot="footer">

          </div>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'

  export default {
    name: 'quiz',
    components: {
      StatsCard,
      ChartCard
    },
    data() {
      return {
        dictionaries: [],
        quizId: 0,
      };
    },
    created: function(){
      this.$http.get(window.url + '/api/user/dictionary/all').then(response => {
        this.dictionaries = response.body;
        console.log(this.dictionaries)
      }, response =>{
        alert("Oups");
      });
    },
    methods: {
      createNewQuiz: function (dictId) {
        this.$http.get(window.url + '/api/quiz/' + dictId).then(response => {
          this.quizId = response.body['id'];
          location.href = '/#/user/quizview/' + this.quizId;
        }, response => {
          alert("Oups");
        });
      }
    }
  }
</script>
