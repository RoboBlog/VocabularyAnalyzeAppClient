<template>
  <div>
    <table v-if="this.words.length!=0">
      <thead>
      <tr>
        <th><h3><b>Ang</b></h3></th>
        <th><h3><b>Pl</b></h3></th>
        <th><h3><b>Uk</b></h3></th>
        <th><h3><b>Us</b></h3></th>
        <th><h3><b>Opcje</b></h3></th>
      </tr>
      </thead>
      <!--<button v-on:click="send()">test</button>-->
      <tbody class="table" v-for="word in words">
      <tr>
        <td><b>{{word.englishWord}}&nbsp;&nbsp;</b></td>
        <td>{{word.polishWord}}&nbsp;&nbsp;</td>
        <td>
          <audio controls id="uk">
            <source v-bind:src="word.urlAudioUk" type="audio/mpeg">
            Your browser does not support the audio element.

          </audio>
          &nbsp;
        </td>
        <td>
          <audio controls id="us">
            <source v-bind:src="word.urlAudioUs" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          &nbsp;
        </td>
        <td><center><button v-on:click="deleteWord(word.id)">usuń</button></center></td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'dictionary',
    data() {
      return {
        words: [
        ],
      };
    },
    methods:{
      send:function() {
        this.$http.get('http://localhost:9000/api/user/dictionary/add/word/18', {headers: {Authorization: localStorage.getItem("jwtToken") }}).then(response => {
        })
      },
      deleteWord:function (id) {
        this.$http.delete('http://localhost:9000/api/user/dictionary/delete/word/'+id,{headers: { Authorization: localStorage.getItem("jwtToken") }}).then(response =>{
        })
        location.reload();
        //delete from var || refresh
    },
  },
    created: function(){
        this.$http.get('http://localhost:9000/api/user/dictionary/words/get/all',{headers: { Authorization: localStorage.getItem("jwtToken") }}).then(response =>{
          this.words = response.body;
          console.log(this.words)
      }, response =>{
        alert("Oups");
      });
      }

  }

</script>

