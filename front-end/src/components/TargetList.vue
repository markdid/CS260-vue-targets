<template>
  <div class="card bg-blue">
    <div class="card-body">
      <h5 class="card-title">Targets</h5>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Target</th>
            <th scope="col">Hours Needed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="target in targets" :key="target._id">
            <th scope="row">{{ target.target }}</th>
            <td>{{ target.hoursNeeded }}</td>
            <td>
              <button v-on:click="deleteTarget(target)" class="delete">
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TargetList",
  props: {
    targets: Array,
    getTargets: Function,
  },
  methods: {
    async deleteTarget(target) {
      try {
        console.log(target);
        await axios.delete("/api/targets/" + target._id);
        this.getTargets();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>