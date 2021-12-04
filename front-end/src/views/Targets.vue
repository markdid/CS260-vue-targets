<template>
  <div class="container margin">
    <div class="row">
      <!-- planning -->
      <div class="col-md-6 padding">
        <TargetList :targets="targets" :getTargets="getTargets" />
        <br />
        <br />
        <CreateTarget :getTargets="getTargets" />
      </div>

      <!-- todos -->
      <div class="col-sm-4 bg-dark padding">
        <div class="card bg-secondary">
          <div class="card-body">
            <h5 class="card-title">Sub-Targets</h5>
            <div v-for="target in targets" :key="target.id">
              <p>{{ target.target }}</p>
              <div v-for="(subtarget, index) in target.subTargets" :key="index">
                <pre>      {{ subtarget }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreateTarget from "../components/CreateTarget.vue";
import TargetList from "../components/TargetList.vue";
export default {
  name: "Targets",
  components: {
    TargetList,
    CreateTarget,
  },
  data: function () {
    return {
      targets: [],
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