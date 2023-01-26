<template>
  <h2>Add Workout</h2>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Title</label>
      <input type="text" v-model="title" />
    </div>
    <div>
      <label>Reps</label>
      <input type="number" v-model="reps" />
    </div>
    <div>
      <label>Load</label>
      <input type="number" v-model="load" />
    </div>

    <button type="submit">Add</button>
  </form>
</template>

<script>
import { fetchData } from "./Workouts.vue";

export default {
  data() {
    return {
      title: "",
      reps: "",
      load: "",
    };
  },

  methods: {
    async handleSubmit() {
      const res = await fetchData("/workouts/post", {
        body: JSON.stringify({
          title: this.title,
          reps: this.reps,
          load: this.load,
        }),
        method: "POST",
      });

      // const workout = await res.json();

      if (res.ok) {
        this.title = "";
        this.reps = "";
        this.load = "";
        this.$router.push("/");
      } else {
        console.log(res);
      }
    },
  },
};
</script>

<style></style>
