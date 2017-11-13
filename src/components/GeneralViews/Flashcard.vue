<template>
  <div>
    <div class="contentFlashcard">
      <div class="card card-flashcard">
        <div class="content">
          <p v-if="lang==1">
            Angielski
          </p>
          <p v-if="lang==0">
            Polski
          </p>
          <center>
            <h1 v-if="word">
              <b v-if="lang==1">
                {{word.englishWord}}
              </b>
              <b v-if="lang==0">
                {{word.polishWord}}
              </b>
            </h1>
            <h1 v-else>
              brak słówek
            </h1>

          </center>
        </div>
        <br/>
      </div>
    </div>


    <div>
      <div class="contentFlashcard-btn">
        <div class="card card-map" v-on:click="switchLanguage()" v-bind:style="{cursor: 'pointer'}">
          <div class="header">
          </div>
            <center>
              <b>
              ODWRÓĆ
              </b>
            </center>
          <br/>
        </div>
      </div>


      <div class="contentFlashcard-btn">
        <div class="card card-map-blue">
          <div class="header">
          </div>
          <div v-on:click="nextWord()" v-bind:style="{cursor: 'pointer'}">
            <center>
              <!--<b>-->
              Następne słówko
              <!--</b>-->
            </center>
          </div>
          <br/>
        </div>
      </div>
    </div>


  </div>


</template>


<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'
  export default {
    name: 'flashcard',
    components:{
      StatsCard,
      ChartCard
    },
    data() {
      return {
        word: null,
        lang: 1,
      };
    },
    methods: {
      switchLanguage: function () {
        if (this.lang === 1) {
          this.lang = 0;
        }
        else {
          this.lang = 1;
        }
      },

      nextWord: function () {
        this.$http.get(window.url + '/api/user/flashcard/' + this.$route.params.id).then(response => {
          this.word = response.body;
          this.lang = 1;
        }, response => {
          alert("Oups");
        });
      }
  },
    created: function () {
      this.$http.get(window.url + '/api/user/flashcard/' + this.$route.params.id).then(response => {
        this.word = response.body;
      }, response => {
        alert("Oups");
      });
    }
  }

</script>
