<template>
  <div>
  <center><h1>Wybierz słownik</h1></center>
    <div class="contentT row">
      <div class="padCont col-lg-3 col-sm-6" v-for="dictionary in dictionaries">
        <stats-card>
          <div slot="content"><router-link :to="{path:'/user/flashcard/'+dictionary.id}"><h4>{{dictionary.name}}</h4></router-link></div>
          <div class="stats" slot="footer">

          </div>
        </stats-card>
      </div>
<!--<div class="contentT">-->
  <!--<div class="card card-map">-->
    <!--<div class="header">-->
      <!--<center><h1 class="map" >FUNKCJA JESZCZE NIEDOSTĘPNA</h1></center>-->
    <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  </div>
  </div>
</template>
<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'
  export default {
    name: 'flashcards',
    components: {
      StatsCard,
      ChartCard
    },
    data() {
      return {
        dictionaries: [],
      };
    },
    created: function(){
      this.$http.get('http://localhost:9000/api/user/dictionary/all',{headers: { Authorization: localStorage.getItem("jwtToken") }}).then(response =>{
        this.dictionaries = response.body;
        console.log(this.dictionaries)
      }, response =>{
        alert("Oups");
      });
    }}
//    created: function () {
//      this.$http.get('http://localhost:9000/api/user/flashcard/'+this.$route.params.id, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
//        this.word = response.body;
//        console.log(this.dictionaries)
//      }, response => {
//        alert("Oups");
//      });
//    }
//  }
</script>
