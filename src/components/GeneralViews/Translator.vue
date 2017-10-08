<template>
  <div class="contentT">

    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div slot="content"><h4>Słówka z linku</h4></div>
          <div class="stats " slot="footer">
            <input v-model="url"  type="text" placeholder="link" >
            &nbsp;
            <br />
            <button v-on:click="sendUrl" class=" btn btn-primary">wyślij</button>
            <div class="btt3"></div>
          </div>
        </stats-card>
      </div>


      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div class="text-center" slot="content">
            <h4>Słówka z pliku</h4>
          </div>
          <div class="stats" slot="footer">
            <input type="file" @change="onFileChange" />
            <button v-on:click="sendFile" class="btn btn-primary">wyślij</button>

          </div>
        </stats-card>
      </div>



      <div class="col-lg-3 col-sm-6 ">
        <stats-card class="notav">
          <div class="text-center " slot="content">
            <h4>Słówka z wideo</h4>
          </div>
          <div class="stats" slot="footer">
            <i>FUNKCJA JESZCZE NIEDOSTĘPNA</i>
          </div>
        </stats-card>
      </div>
    </div>


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
          <td>
            <drop-down title="Dodaj do słownika">
              <li v-for="dictionary in dictionaries"><a v-on:click=addToDictionary(dictionary.id,word.word.id)>{{dictionary.name}}</a></li>
            </drop-down>

          </td>
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
        file2: NaN,
        uploadFile: NaN,
        url: '',
        words: [],
        dictionaries: [],
//        test: 'test'
      };
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        this.uploadFile=files[0]
      },

      addToDictionary: function (dictionaryId, wordId) {
        this.$http.post('http://localhost:9000/api/user/dictionary/' + dictionaryId + '/' + wordId).then(response =>{
        }, response =>{
          alert("Oups");
        });
      },

        sendUrl: function() {
          this.$http.post('http://localhost:9000/fetchwebsite?url='+this.url).then(response =>{
            console.log(response.body);
            this.words = response.body;
          }, response =>{
            alert("Oups");
          });
        },

        sendFile: function() {
          var formData = new FormData();
          formData.append('file', this.uploadFile)
          this.$http.post('http://localhost:9000/up/', formData).then(response =>{
            console.log(response.body)
            this.words = response.body;
          }, response =>{
            alert("Oups");
          });
        }
      },
    created: function(){
      this.$http.get('http://localhost:9000/api/user/dictionary/all').then(response =>{
        this.dictionaries = response.body;
      }, response =>{
        alert("Oups");
      });
    }
  }
</script>
<style>

</style>
