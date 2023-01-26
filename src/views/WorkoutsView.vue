<template>
  <div class="home">
    <Workouts />
  </div>
</template>

<script>
// import here
import Workouts from "../components/Workouts.vue";

export default {
  name: "HomeView",
  components: { Workouts },
};
</script>
