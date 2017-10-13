<template>
  <div class="contentT">
    <div class="card card-map">
      <div class="header" v-for="information in informations">
        <h5><b>Autor:</b> {{information.author}}</h5>
        <h5><b>Data: </b>{{information.createDate}}</h5>
        <center><h1>{{information.content}}</h1></center>
        <br/>
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
        informations: [],
      };
    },
    created: function () {
      this.$http.get(window.url + '/api/information/allactive').then(response => {
        this.informations = response.body;
        console.log(this.informations)
      }, response => {
        alert("Oups");
      });
    }
  }
</script>
