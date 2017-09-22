<template>
  <div class="contentT">

    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div slot="content"><h4>Słówka z linku</h4></div>
          <div class="stats" slot="footer">
            <input class="link" type="text" placeholder="link">
            &nbsp;
            <button class="btn btn-primary">send</button>
          </div>
        </stats-card>
      </div>


      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div class="text-center" slot="content">
            <h4>Słówka z pliku</h4>
          </div>
          <div class="stats" slot="footer">
            <input type="file" />

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

    <!--Charts-->
    <div class="row">


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
<style>

</style>
