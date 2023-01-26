<template>
  <nav>
    <router-link :to="{ name: 'Workouts' }">Home</router-link>
    <router-link :to="{ name: 'AddWorkout' }">Add Workout</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <button @click="loggedIn(null)">Logout</button>
  </nav>
  <router-view @loggedIn="loggedIn" />
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    loggedIn(user) {
      console.log("🚀 loggedIn ~ user", user);
      if (user) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/");
      } else {
        this.user = null;
        localStorage.removeItem("user");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
