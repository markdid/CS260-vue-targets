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
                <tr v-for="(time, index) in times" :key="index">
                  <th scope="row">{{ time }}</th>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
              </tbody>
            </table>
            <p class="card-text"></p>
            <!-- <button type="button" class="btn btn-light">Save</button> -->
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
                <tr v-for="target in targets" :key="target._id">
                  <th scope="row">{{ target.target }}</th>
                  <td>{{ target.hoursCompleted }}/{{ target.hoursNeeded }}</td>
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
import axios from "axios";
export default {
  name: "Plan",
  components: {
    ToDo,
  },
  data: function () {
    return {
      targets: [],
      times: [
        "7:00AM",
        "8:00AM",
        "9:00AM",
        "10:00AM",
        "11:00AM",
        "12:00PM",
        "1:00PM",
        "2:00PM",
        "3:00PM",
        "4:00PM",
        "5:00PM",
        "6:00PM",
        "7:00PM",
        "8:00PM",
        "9:00PM",
        "10:00PM",
      ],
    };
  },
  created: function () {
    this.getTargets();
  },
  methods: {
    async getTargets() {
      try {
        const response = await axios.get("/api/targets");
        this.targets = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>