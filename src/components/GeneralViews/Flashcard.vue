<template>
  <div>
    <div class="contentFlashcard">
      <div class="card card-flashcard">
        <div class="header">
        </div>
        <div class="content">
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
      <div class="contentFlashcard-btn" v-on:click="switchLanguage()">
        <div class="card card-map">
          <div class="header">
          </div>
          <div class="content">
            <center>
              <!--<b>-->
              ODWRÓĆ
              <!--</b>-->
            </center>
          </div>
          <br/>
        </div>
      </div>


      <div class="contentFlashcard-btn">
        <div class="card card-map-blue">
          <div class="header">
          </div>
          <div class="content" v-on:click="nextWord()">
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
        this.$http.get('http://localhost:9000/api/user/flashcard/' + this.$route.params.id).then(response => {
          this.word = response.body;
        }, response => {
          alert("Oups");
        });
      }
//      send: function () {
//        let options = {emulateJSON: true};
//        this.$http.post('http://localhost:9000/api/user/dictionary/' + this.$route.params.id + '/16', options, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
//          console.log(response)
//        })},


//      },
//      deleteWord:function (id) {
//        this.$http.delete('http://localhost:9000/api/user/dictionary/'+ this.$route.params.id + "/" +id,{headers: { Authorization: localStorage.getItem("jwtToken") }}).then(response =>{
//        })
//        location.reload();
//        delete from var || refresh
//      },
//    },
  },
    created: function () {
      this.$http.get('http://localhost:9000/api/user/flashcard/' + this.$route.params.id).then(response => {
        this.word = response.body;
      }, response => {
        alert("Oups");
      });
    }
  }

</script>
