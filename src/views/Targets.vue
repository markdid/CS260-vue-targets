<template>
  <div class="container margin">
    <div class="row">
      <!-- planning -->
      <div class="col-md-6 padding">
        <TargetList :targets="targets" />
      </div>

      <!-- todos -->
      <div class="col-sm-4 bg-dark padding">
        <div class="card bg-secondary">
          <div class="card-body">
            <h5 class="card-title">Sub-Targets</h5>
            <div v-for="target in targets" :key="target.id">
              <p>{{ target.name }}</p>
              <div v-for="(subtarget, index) in target.subtargets" :key="index">
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
import TargetList from "../components/TargetList.vue";
export default {
  name: "Targets",
  components: {
    TargetList,
  },
  computed: {
    targets() {
      return this.$root.$data.targets;
    },
  },
};
</script>