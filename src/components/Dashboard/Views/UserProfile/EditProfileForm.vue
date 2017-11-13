<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Edytuj Profil</h4>
    </div>
    <div class="contentprof">
      <form>
        <div class="row">
          <div class="col-md-5 col-xs-10 ">
            <fg-input type="text"
                      label="Username"
                      :disabled="true"
                      placeholder="Paper dashboard"
                      v-model="user.username">
            </fg-input>
          </div>
          <!--<br />-->
        </div>

        <div class="row">

          <div class="col-md-5 col-xs-10">

            <fg-input type="password"
                      label="Password"
                      :disabled="true"
                      placeholder="****"
                      v-model="user.password">
            </fg-input>
          </div>
          </div>
          <!--<div class="col-md-4">-->
            <!--<fg-input type="email"-->
                      <!--label="Username"-->
                      <!--placeholder="Email"-->
                      <!--v-model="user.email">-->
            <!--</fg-input>-->
          <!--</div>-->

        <div class="row">
          <div class="col-md-6 col-xs-10">
            <fg-input type="text"
                      label="E-mail"
                      placeholder="E-mail"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>
      </form>
      <button
        type="submit"
        class="btn btn-info btn-fill btn-wd"
        @click="updateProfile">
        Zaktualizuj profil
      </button>
      <br />

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
        }
      }
    },
    created: function(){
      this.$http.get(window.url + '/api/user/').then(response => {
          this.user = response.body;
        console.log(response.body)
        }, response => {
        });
      },
    methods: {
      updateProfile: function () {
        this.$http.put(window.url + '/api/user/edit/user', this.user).then(response => {
          location.reload();
        }, response => {
        });
      }
    }
  }
</script>
<style>

</style>
