<template>
  <div class="contentT">
    <h1>Przeanalizuj stronę</h1>
    <input v-model="url" placeholder="url">
    <button v-on:click="sendUrl">send</button>

    <br />
    <br />
    <br />
    <div class="row">
      <div class="col-md-12">
        <div class="card"  v-if="this.words.length!=0">
          <div>
            <!--<div class="header">-->
            <!--<h4 class="title">test</h4>-->
            <!--<p class="category">subtitle</p>-->
            <!--</div>-->
            <div class="cont table-responsive table-full-width">
              <!--<table class="table table-striped">-->
              <table class="table">
                <thead>
                <th><h3><b> &nbsp;Polski &nbsp;</b></h3></th>
                <th><h3><b> &nbsp;Angielski &nbsp;</b></h3></th>
                <th><h3><b> &nbsp;Us &nbsp;</b></h3></th>
                <th><h3><b> &nbsp;Uk &nbsp;</b></h3></th>
                <th><h3><b> &nbsp;Liczba Wystąpień &nbsp;</b></h3></th>
                <th><h3><b> &nbsp;Opcje &nbsp;</b></h3></th>
                </thead>
                <tbody v-for="word in words">
                <tr>
                  <td><b>{{word.word.englishWord}}</b></td>
                  <td><b>{{word.word.polishWord}}</b></td>
                  <td><audio controls id="us">
                    <source v-bind:src="word.word.urlAudioUs" type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio></td>
                  <td><audio controls id="uk">
                    <source v-bind:src="word.word.urlAudioUk" type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio></td>
                  <td><b>{{word.amount}}</b></td>
                  <td></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'
  export default {
    components: {
      StatsCard,
      ChartCard
    },

    data() {
      return {
        url: '',
        words: [],
      };
    },
    methods: {
sendUrl: function() {
  this.$http.post(window.url + 'fetchwebsite?url=' + this.url).then(response => {
          console.log(response.body)
          this.words = response.body;
        }, response =>{
          alert("Oups");
        });
      },
},
  }
</script>
<style>

</style>
