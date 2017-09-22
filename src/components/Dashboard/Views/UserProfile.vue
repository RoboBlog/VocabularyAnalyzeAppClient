<template>
    <div class="contentT row">
      <div class="col-lg-4 col-md-5">
        <user-card>

        </user-card>
      </div>
      <div class="col-lg-8 col-md-7">
        <edit-profile-form>
        </edit-profile-form>
      </div>
    </div>
</template>
<script>

  export default {
//    mounted: function(){
//      if(localStorage.getItem("jwtToken")===null){
//        window.location.replace('/')
//      }
//
//    },
    components: {
      EditProfileForm,
      UserCard,
    }
  }
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'

</script>
<style>

</style>
