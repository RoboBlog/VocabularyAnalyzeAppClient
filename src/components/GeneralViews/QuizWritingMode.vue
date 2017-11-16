<template>
  <div class="row">
    <div v-if="$route.params.type=='ep'">{{word.englishWord}}</div>
    <div v-else="$route.params.type=='pe'">{{word.polishWord}}</div>

    <input type="text" v-model="answer">
    <button @click="sendAnswer">sub</button>

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
        word: {},
        id: null,
        answer: null
      };
    },
    methods: {
      sendAnswer: function () {
        let options = {emulateJSON: true};
        this.$http.post(window.url + '/api/quiz/' + this.id + '?answer=' + this.answer + '&type=' + this.$route.params.type, options).then(response => {

          if (response.bodyText === "is Incorrect") {
            alert("Oups. Jednak nie. Poprawna odpowiedz to: ")
          }
          else {
            alert("Brawo")
          }

        })
      },
    },
    created: function () {
      this.$http.get(window.url + '/api/quiz/' + this.$route.params.id + '/exercise').then(response => {
        this.word = response.body.userWord.word;
        this.id = response.body.id;
      }, response => {
        alert("Oups");
      });
    }
  }

</script>
