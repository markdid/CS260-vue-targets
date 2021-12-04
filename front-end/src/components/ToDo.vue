<template>
  <div class="card bg-secondary">
    <div class="card-body">
      <h5 class="card-title">To-Do's</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </th>
            <th scope="col">To-do</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            draggable="true"
            v-on:dragstart="dragItem(item)"
            v-on:dragover.prevent
            v-on:drop="dropItem(item)"
            :key="item._id"
          >
            <th scope="row">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  v-model="item.completed"
                  @click="completeItem(item)"
                />
              </div>
            </th>
            <td v-bind:class="{ completed: item.completed }">
              {{ item.text }}
            </td>
            <td>
              <button v-on:click="deleteItem(item)" class="delete">X</button>
            </td>
          </tr>
        </tbody>
      </table>

      <form v-on:submit.prevent="addItem">
        <input type="text" v-model="message" />
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ToDo",
  data: function () {
    return {
      items: [],
      drag: {},
    };
  },
  props: {
    // todoList: Array,
  },
  created: function () {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get("/api/todos");
        this.items = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addItem() {
      try {
        await axios.post("/api/todos", {
          text: this.message,
          completed: false,
        });
        this.message = "";
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/todos/" + item._id);
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    async completeItem(item) {
      try {
        axios.put("/api/todos/" + item._id, {
          text: item.text,
          completed: !item.completed,
        });
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    // showAll() {
    //   this.show = "all";
    // },
    // showActive() {
    //   this.show = "active";
    // },
    // showCompleted() {
    //   this.show = "completed";
    // },
    // deleteCompleted() {
    //   this.todos = this.todos.filter((item) => {
    //     return !item.completed;
    //   });
    // },
    // dragItem(item) {
    //   this.drag = item;
    // },
    // dropItem(item) {
    //   const indexItem = this.todos.indexOf(this.drag);
    //   const indexTarget = this.todos.indexOf(item);
    //   this.todos.splice(indexItem, 1);
    //   this.todos.splice(indexTarget, 0, this.drag);
    // },
  },
};
</script>
