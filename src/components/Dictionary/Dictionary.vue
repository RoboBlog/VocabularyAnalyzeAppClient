<template>
  <table v-if="words.length>0">
    <thead>
    <tr>
      <th><h3><b>Ang</b></h3></th>
      <th><h3><b>Pl</b></h3></th>
      <th><h3><b>Uk</b></h3></th>
      <th><h3><b>Us</b></h3></th>
      <th><h3><b>Opcje</b></h3></th>
    </tr>
    </thead>
    <tbody class="table" v-for="word in words">
    <tr>
      <td><b>{{word.word.englishWord}}&nbsp;&nbsp;</b></td>
      <td>{{word.word.polishWord}}&nbsp;&nbsp;</td>
      <td>
        <audio controls id="uk">
          <source v-bind:src="word.word.urlAudioUk" type="audio/mpeg">
          Your browser does not support the audio element.

        </audio>
        &nbsp;
      </td>
      <td>
        <audio controls id="us">
          <source v-bind:src="word.word.urlAudioUs" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        &nbsp;
      </td>
      <td><center><button v-on:click="deleteWord(word.id)">usuń</button></center></td>
    </tr>

    </tbody>
  </table>
  <div v-else> <center><h1>Brak słówek, dodaj słówka z tłumacza (link)</h1></center></div>
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
        this.$http.post('http://localhost:9000/api/user/dictionary/' + this.$route.params.id + '/16', options, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
          console.log(response)
        })},
//      },
      deleteWord:function (id) {
        this.$http.delete('http://localhost:9000/api/user/dictionary/'+ this.$route.params.id + "/" +id,{headers: { Authorization: localStorage.getItem("jwtToken") }}).then(response =>{
        })
        location.reload();
//        delete from var || refresh
    },
    },
    created: function () {
      this.$http.get('http://localhost:9000/api/user/dictionary/' + this.$route.params.id + '/all', {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
        this.words = response.body;
      }, response => {
        alert("Oups");
      });
    }
    }

</script>
