<template>
  <div class="card bg-blue">
    <div class="card-body">
      <h5 class="card-title">Targets</h5>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Target</th>
            <th scope="col">Hours Needed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="target in targets" :key="target.key">
            <th scope="row">{{ target.name }}</th>
            <td>{{ target.hours }}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "TargetList",
  props: {
    targets: Array,
  },
  //   methods: {
  //     removeFromCart(index) {
  //       this.$root.$data.cart.splice(index, 1);
  //     },
  //   },
};
</script>