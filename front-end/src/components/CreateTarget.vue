<template>
  <div class="card bg-blue">
    <div class="card-body">
      <h5 class="card-title">Create New Target</h5>

      <form class="form" v-on:submit.prevent="addTarget">
        <div class="form-group">
          <label>Target Label</label>
          <input class="form-control" type="text" v-model="target" />
          <label>Required Hours</label>
          <input class="form-control" type="number" v-model="hoursneeded" />
          <br />
          <form class="form" v-on:submit.prevent="addSub">
            <input type="text" v-model="subtarget" />
            <button class="btn-secondary" type="submit">Add Sub-target</button>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sub-Target</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sub, index) in subTargets" :key="index">
                  <td>
                    {{ sub }}
                  </td>
                  <td>
                    <button v-on:click="deleteSub(index)" class="delete">
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <button class="btn-secondary" type="submit">Submit Target</button>
        </div>
      </form>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateTarget",
  props: {
    getTargets: Function,
  },
  data: function () {
    return {
      target: "",
      hoursneeded: 1,
      subtarget: "",
      subTargets: [],
    };
  },
  methods: {
    async addTarget() {
      try {
        await axios.post("/api/targets", {
          target: this.target,
          hoursNeeded: this.hoursneeded,
          hoursCompleted: 0,
          subTargets: this.subTargets,
        });
        this.target = "";
        this.hoursneeded = 1;
        this.subtarget = "";
        this.subtargets = [];
        this.getTargets();
      } catch (error) {
        console.log(error);
      }
    },
    addSub() {
      this.subTargets.push(this.subtarget);
      this.subtarget = "";
    },
    deleteSub(index) {
      if (index > -1) this.subTargets.splice(index, 1);
    },
  },
};
</script>