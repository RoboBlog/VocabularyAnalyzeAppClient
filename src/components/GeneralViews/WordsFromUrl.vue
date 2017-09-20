<template>
  <div>
    <h1>Przeanalizuj stornę</h1>
    <input v-model="url" placeholder="url">
    <button v-on:click="sendUrl">send</button>
    <!--VALIDATE-->
    <br />
    <table v-if="this.words.length!=0">
      <thead>
      <tr>
        <th><h3>Word</h3></th>
        <th><h3>Amount</h3></th>
      </tr>
      </thead>
      <tbody class="table" v-for="(key, word) in words">
      <tr>
        <td><b>{{word}}</b></td>
        <td>{{key}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'wordsfromurl',
    data() {
      return {
        url: '',
        words: [
        ],
      };
    },
    methods: {
      sendUrl: function() {
        this.$http.post('http://localhost:9000/fetchwebsite?url='+this.url+'&part=1').then(response =>{
          let data = JSON.stringify(response.body.get(0))
          console.log(data)
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>

