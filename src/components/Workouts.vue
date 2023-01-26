<template>
  <h2>{{ title }}</h2>
  <div v-if="workouts" class="workouts">
    <div v-for="workout in workouts" :key="workout.id" class="workout">
      <h4>{{ workout.title }}</h4>
      <p>Reps: {{ workout.reps }}</p>
      <p>Load: {{ workout.load }}</p>
      <p>Created: {{ workout.createdAt }}</p>
      <button @click="deleteWorkout(workout._id)">delete</button>
    </div>
  </div>
  <div v-else-if="error">
    <h2>{{ error }}</h2>
  </div>
  <div v-else>
    <h2>You have no workouts :(</h2>
    <a href="#">Create one?</a>
  </div>
</template>

<script>
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NjNTZhMzBjMzc4OTNkYWJjZjVkZWUiLCJpYXQiOjE2NzQ2NzM1MjUsImV4cCI6MTY3NDc1OTkyNX0.QidV9jCjnCl8Yaxo1hfnaY3boLD5kcN4jNT1zbTjOMs";

const baseUrl = "http://localhost:4000/api";

export const fetchData = (url, rest) => {
  return fetch(baseUrl + url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    ...rest,
  });
};
export default {
  data() {
    return {
      workouts: null,
      title: "Workouts",
      error: "",
    };
  },
  mounted() {
    console.log("mounted");
    fetchData(`/workouts`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.workouts = data;
      })
      .catch((err) => {
        this.error = err.message;
      });
  },
  methods: {
    async deleteWorkout(id) {
      const res = await fetchData(`/workouts/delete/${id}`, {
        method: "DELETE",
      });
      const deletedWork = await res.json();

      if (res.ok) {
        this.workouts = this.workouts.filter((w) => w._id !== deletedWork._id);
      } else {
        console.log(res);
      }
    },
  },
};
</script>

<style>
.home h2 {
  color: #333;
}
.home {
  width: 90%;
  margin: 0 auto;
}
.workouts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.workout {
  background: #f4f4f4;
  margin: 5px;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  /* box-sizing: border-box; */
}
.workout h4 {
  margin: 0;
  padding: 0;
}
.workout p {
  margin: 0;
}
.workout button {
  background-color: red;
  color: #f4f4f4;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
