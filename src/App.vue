<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-1-strong">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="15" alt=""
                            loading="lazy" />
                    </a> -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <!-- <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li> -->
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/plan">Plan</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/targets"
                  >Targets</router-link
                >
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center">
            <!-- Avatar -->
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user-tie bg-dark"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a class="dropdown-item" href="/pages/login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
    <footer class="bg-light text-lg-start">
      <div
        class="text-center p-3 bg-blue"
        style="background-color: rgba(151, 151, 151, 0.2)"
      >
        © 2021 Bluedid
        <div class="text-center py-4 align-items-center">
          <a
            href="https://github.com/markdid/CS260-vue-targets"
            class="btn btn-dark m-1"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style>
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover {
  color: white !important;
}

.bg-dark {
  color: white;
  background-color: #262626 !important;
}

.bg-blue {
  color: white;
}

.bg-secondary {
  color: white;
}

.navbar-dark .navbar-nav .nav-link .nav-item {
  color: rgb(255, 255, 255) !important;
}

.jumbotron {
  /* background-color: gray; */
  background-image: url("/images/stats.png");
  background-position: center top;
  background: rgba(0, 0, 0, 0.815), url("/images/stats.png");
  background-size: cover;
  min-height: 550px;
  color: white;
  text-align: right;
  padding: 30px;
}

.padding {
  padding: 70px;
}

.margin {
  margin: 60px;
}

.card {
  border-radius: 18px !important;
}

tr {
  color: white;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
}

.bg-secondary {
  background-color: rgba(106, 17, 203, 1) !important;
}

.bg-blue {
  background-color: rgba(37, 117, 252, 1) !important;
}
body {
  margin: 100;
  background-color: #262626;
}
</style>
