<template>
  <div class="row">
    {{word}}
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
        word: null,
        id: null
      };
    },
    methods: {},
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
