<template>
  <div class="card card-user">
    <div class="image">
      <!--<img src="static/img/background.jpg" alt="...">-->
    </div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" src="static/img/faces/face-0.jpg" alt="...">
        <h4 class="title">{{user.username}}
          <br>
          <!--<a href="#">-->
            <!--<small>@chetfaker</small>-->
          <!--</a>-->
        </h4>
      </div>
      <!--<p class="description text-center">-->
        <!--"I like the way you work it-->
        <!--<br> No diggity-->
        <!--<br> I wanna bag it up"-->
      <!--</p>-->
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div class="col-md-4">
          <h5>{{user.amountWords}}
            <br>
            <small>Ilość słówek</small>
          </h5>
        </div>
        <div class="col-md-4">
          <h5>{{user.score}}
            <br>
            <small>Ilośc punktów</small>
          </h5>
        </div>

        <div class="col-md-4">
          <h5>{{user.dayScore}}
            <br>
            <small>Ilośc punktów dzisiaj</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user:{},
      }
    },
      created: function(){
        this.$http.get(window.url + '/api/user/').then(response => {
        this.user = response.body;
        console.log(response.body)
      }, response =>{
        alert("Oups");
      });
    },
    methods: {
    }
  }

</script>
<style>

</style>
