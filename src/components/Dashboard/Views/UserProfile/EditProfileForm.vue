<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Profile</h4>
    </div>
    <div class="contentprof">
      <form>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Username"
                      :disabled="true"
                      placeholder="Paper dashboard"
                      v-model="user.company">
            </fg-input>
          </div>
          <!--<br />-->
        </div>

        <div class="row">

          <div class="col-md-5">

            <fg-input type="password"
                      label="Password"
                      placeholder="Username"
                      v-model="user.username">
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
          <div class="col-md-6">
            <fg-input type="text"
                      label="E-mail"
                      placeholder="E-mail"
                      v-model="user.firstName">
            </fg-input>
          </div>
        </div>
      </form>
      <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
        Update Profile
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
          company: 'maciek331',
          username: 'michael23',
          email: '',
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
