<template>
  <div class="container margin bg-dar">
    <div class="row">
      <!-- planning -->
      <div class="col-md-8 padding">
        <div class="card bg-blue">
          <div class="card-body">
            <h5 class="card-title">Day Plan</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Plan</th>
                  <th scope="col">Actual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">7:00AM</th>
                  <td>Go to school</td>
                  <td>Go to school</td>
                </tr>
                <tr>
                  <th scope="row">11:00AM</th>
                  <td>Leave school</td>
                  <td>Go to work</td>
                </tr>
                <tr>
                  <th scope="row">12:00PM</th>
                  <td>Go to work</td>
                  <td>finish work</td>
                </tr>
                <tr>
                  <th scope="row">3:00PM</th>
                  <td>Project 1</td>
                  <td>work on project</td>
                </tr>
                <tr>
                  <th scope="row">6:00PM</th>
                  <td>dinner</td>
                  <td>dinner</td>
                </tr>
              </tbody>
            </table>

            <p class="card-text"></p>
            <button type="button" class="btn btn-light">Save</button>
          </div>
        </div>
      </div>

      <!-- todos -->
      <div class="col-sm-4 bg-dark padding">
        <ToDo />

        <!-- time spent -->
        <div class="card bg-secondary" style="margin-top: 30px">
          <div class="card-body">
            <h5 class="card-title">Time Spent</h5>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Target</th>
                  <th scope="col">Hours Done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Project 1</th>
                  <td>6/8</td>
                </tr>
                <tr>
                  <th scope="row">Project 2</th>
                  <td>0/2</td>
                </tr>
                <tr>
                  <th scope="row">Project 3</th>
                  <td>0/4</td>
                </tr>
                <tr>
                  <th scope="row">Project 4</th>
                  <td>.5/.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDo from "../components/ToDo.vue";
export default {
  name: "Plan",
  components: {
    ToDo,
  },
  computed: {
    // targets() {
    //   return this.$root.$data.targets;
    // },
  },
};
</script>