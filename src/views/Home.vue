<template>
  <body>
    <div class="jumbotron jumbotron-main">
      <h1>Target Planner</h1>
      <p class="lead">Plan your days based on your most important goals</p>
      <p class="lead">
        <!-- <a class="btn btn-primary m-1" href="/pages/login.html" role="button"
          >Get Started</a
        > -->
        <router-link class="btn btn-primary m-1" to="/plan"
          >Get Started</router-link
        >
      </p>
    </div>

    <div class="container shadow-1-strong margin bg-dark">
      <div class="row">
        <div class="col-lg content padding">
          <h1>Planning by targets helps you reach your goals</h1>
          <br />
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
