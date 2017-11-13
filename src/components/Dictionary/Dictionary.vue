<template>

  <div class="row">
    <br/>
    <div class="col-md-12">
      <div class="card" v-if="this.words.length!=0">
        <div>
          <div class="cont table-responsive table-full-width">
            <table class="table">
              <thead>
              <th><h3><b> &nbsp;Ang &nbsp;&nbsp;</b></h3></th>
              <th><h3><b> &nbsp;Pol &nbsp;</b></h3></th>
              <th><h3><b> &nbsp;Us &nbsp;</b></h3></th>
              <th><h3><b> &nbsp;Uk &nbsp;</b></h3></th>
              <th><h3><b> &nbsp;Opcje &nbsp;</b></h3></th>
              </thead>
              <tbody v-for="word in words">
              <tr>
                <td><b>{{word.word.englishWord}}</b></td>
                <td><b>{{word.word.polishWord}}</b></td>
                <td>
                  <audio controls id="us" class="audio" controlsList="nodownload">
                    <source v-bind:src="word.word.urlAudioUs" type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio>
                </td>
                <td>
                  <audio controls id="uk" class="audio" controlsList="nodownload">
                    <source v-bind:src="word.word.urlAudioUk" type="audio/mpeg">
                    Your browser does not support the audio element.
                  </audio>
                </td>
                <td>
                  <button class="btn btn-info btn-fill" v-on:click="deleteWord(word.id)">usuń</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <!--</table>-->
        </div>
      </div>
    </div>
  </div>

  <!--<div v-else> <center><h1>Brak słówek, dodaj słówka z tłumacza (link)</h1></center></div>-->
</template>


<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'
  export default {
    name: 'dictionary',
    components:{
      StatsCard,
      ChartCard
    },
    data() {
      return {
        words:[]
      };
    },
    methods: {
      send: function () {
        let options = {emulateJSON: true};
        this.$http.post(window.url + '/api/user/dictionary/' + this.$route.params.id + '/16', options, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
          console.log(response)
        })},
//      },
      deleteWord:function (id) {
        this.$http.delete(window.url + '/api/user/dictionary/' + this.$route.params.id + "/" + id, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
        })
        location.reload();
//        delete from var || refresh
      },
    },
    created: function () {
      this.$http.get(window.url + '/api/user/dictionary/' + this.$route.params.id + '/all', {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
        this.words = response.body;
      }, response => {
        alert("Oups");
      });
    }
  }

</script>
