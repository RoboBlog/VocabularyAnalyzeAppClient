<template>
  <div class="wrapper">
  <div class="main-panel-no-sidebar">


  <br />
    <br />
    <br />
    <br />



        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <div class="card-select">
              <br />
              <h2 class="title text-danger">Wybierz źródło słówek</h2>

              <h2 class="title">
                <router-link :to="{name:'fromfile'}">
                  <button class="btn btn-primary">
                    Plik
                  </button>
                </router-link>

                <router-link :to="{name:'fromurl'}">
                  <button class="btn btn-primary">
                    Strona WWW
                  </button>
                </router-link>
              </h2>

              <br>
                <router-link :to="{name:'login'}">
                  Zaloguj się
                </router-link>
                  lub
                <router-link :to="{name:'register'}">
                  Zarejestruj
                </router-link>
              (połącz z facebookiem)
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
</script>
