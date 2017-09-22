<template>
  <div>

    <center><h1>Wybierz słownik</h1></center>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <stats-card>
          <div slot="content"><h4>Słówka z linku</h4></div>
          <div class="stats" slot="footer">
            &nbsp;
          </div>
        </stats-card>
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
  }
</script>
