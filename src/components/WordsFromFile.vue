<template>
  <div>
    <h1>Get Words</h1>
    <input type="file">//send file
    <br />
    <br />
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
      <tbody class="table"  v-for="(key, word) in words">
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
    name: 'wordsfromfile',
    data() {
      return {
        file:'',
        words: Map,
      };
    },
    methods: {
      sendUrl: function() {
        this.$http.post('http://localhost:9000/fetchwebsite?url='+this.url).then(response =>{
          this.words = response.body;
        }, response =>{
          alert("Oups");
        });
      },
    }
  }

</script>

