<template>
      <div>
        <h1>Przeanalizuj stronę</h1>
        <input v-model="url" placeholder="url">
        <button v-on:click="sendUrl">send</button>
        <!--VALIDATE-->
        <!--<br />-->
        <!--<table v-if="this.words.length!=0">-->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th><h3>Word</h3></th>-->
            <!--<th><h3>Amount</h3></th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody class="table" v-for="(key, word) in words">-->
          <!--<tr>-->
            <!--<td><b>{{word}}</b></td>-->
            <!--<td>{{key}}</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</table>-->
      <!--</div>-->
    </div>
</template>

<script>
</script>
