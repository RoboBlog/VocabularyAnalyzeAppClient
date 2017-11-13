<template>
  <div>


    <div class="contentT row">
      <div v-if="dictionaries.length>0">
        <div v-for="dictionary in dictionaries" class="padCont col-lg-3 col-sm-6">
          <stats-card>
            <div slot="content">
              <router-link :to="{path:'/user/dictionary/'+dictionary.id}"><h4>{{dictionary.name}}</h4></router-link>
            </div>
            <div class="stats" slot="footer">
              <button class="btn btn-info btn-fill btn-wd" v-on:click="deleteDictionary(dictionary.id)">usuń</button>
            </div>
          </stats-card>
        </div>
      </div>

        <div class="padCont col-lg-3 col-sm-6" >
          <stats-card>
            <div class="padDict" slot="content"><h5><input type="text" v-model="dictionaryName"
                                                           placeholder="nazwa słownika"></h5></div>

            <div class="stats" slot="footer">
              <button class="btn btn-info btn-fill btn-wd" v-on:click="send(dictionaryName)">Dodaj słownik</button>
            </div>
          </stats-card>
        </div>

      </div>


  </div>
</template>

<script>
  //TODO VALIDATION
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
        dictionaryName: '',
        dictionaries: [],
      };
    },
    methods:{
      send: function(dictionaryName) {
        let options = { emulateJSON: true };
        this.$http.post(window.url + '/api/user/dictionary/?dictionaryName=' + dictionaryName, options).then(response => {
          location.reload();
        });

      },

      deleteDictionary: function (id) {
        this.$http.delete(window.url + '/api/user/dictionary/?dictionaryId=' + id).then(response => {
          location.reload();
        })
//        delete from var || refresh
    },
  },
    created: function(){
      this.$http.get(window.url + '/api/user/dictionary/all').then(response => {
          this.dictionaries = response.body;
      }, response =>{
        alert("Oups");
      });
    }

  }

</script>

