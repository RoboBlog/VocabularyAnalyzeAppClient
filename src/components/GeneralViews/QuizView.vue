<template>
  <div v-if="word>null">{{word}}</div>
  <div v-else>brak słówek</div>
</template>


<script>
  import StatsCard from '@/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from '@/components/UIComponents/Cards/ChartCard.vue'
  export default {
    name: 'quizView',
    components:{
      StatsCard,
      ChartCard
    },
    data() {
      return {
        word: {}
      };
    },
    methods: {
//      send: function () {
//        let options = {emulateJSON: true};
//        this.$http.post('http://localhost:9000/api/user/dictionary/' + this.$route.params.id + '/16', options, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
//          console.log(response)
//        })},


//      },
//      deleteWord:function (id) {
//        this.$http.delete('http://localhost:9000/api/user/dictionary/'+ this.$route.params.id + "/" +id,{headers: { Authorization: localStorage.getItem("jwtToken") }}).then(response =>{
//        })
//        location.reload();
//        delete from var || refresh
//      },
//    },
    },
    created: function () {
      this.$http.get(window.url + 'api/user/quiz/' + this.$route.params.id, {headers: {Authorization: localStorage.getItem("jwtToken")}}).then(response => {
        this.word = response.body;
      }, response => {
        alert("Oups");
      });
    }
  }

</script>
