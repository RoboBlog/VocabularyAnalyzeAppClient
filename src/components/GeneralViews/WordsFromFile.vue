<template>
  <div class="wrapper">

    <div class="main-panel2">
      <div class="headnav">
        <nav class="navbar navbar-default">
          <div class="container-fluid">

            <div class="navbar-header">
              <router-link :to="{path : '/selectsource' } ">
                <button type="button"
                        class="home-btn btn">
                  Strona główna
                </button>
              </router-link>
            </div>
          </div>
        </nav>
      </div>

      <div class="contentT">

        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <stats-card>
              <div class="text-center" slot="content">
                <h4>Słówka z pliku</h4>
              </div>
              <div class="stats" slot="footer">
                <input class="choose" type="file" @change="onFileChange"/>
                <button type="submit" class="btn btn-info btn-fill btn-wd" v-on:click="sendFile">wyślij</button>

              </div>
            </stats-card>
          </div>
        </div>


        <br/>
        <br/>
        <br/>


        <div class="row">
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
                    <th><h3><b> &nbsp;L. Wystąpień &nbsp;</b></h3></th>
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
                      <td><b>{{word.amount}}</b></td>

                    </tr>
                    </tbody>
                  </table>
                </div>

              </div>
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
        file2: NaN,
        uploadFile: NaN,
        url: '',
        words: [],
        dictionaries: [],
      };
    },
    methods: {
//      onFileChange(e) {
//        var files = e.target.files || e.dataTransfer.files;
//        this.uploadFile = files[0]
//      },
//      sendFile: function () {
//        var formData = new FormData();
//        formData.append('file', this.uploadFile)
//        this.$http.post(window.url + '/up/', formData).then(response => {
//          if (response.body.length !== 0) {
//            this.words = response.body;
//          }
//          else {
//            alert("Brak słówek")
//          }
//        }, response =>{
//          alert("Oups");
//        });
//      }
    },
//    created: function(){
//      this.$http.get(window.url + '/api/user/dictionary/all').then(response => {
//        this.dictionaries = response.body;
//      }, response =>{
//        alert("Oups");
//      });
//    }
  }
</script>
<style>

</style>
