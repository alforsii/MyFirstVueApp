<template>
  <form @submit.prevent="handleLogin">
    <h2>Login</h2>
    <div class="form_control">
      <label>Email</label>
      <input type="email" ref="email" value="ak@gmail.com" />
    </div>
    <div class="form_control">
      <label>Password</label>
      <input type="text" ref="password" value="abc123" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import { fetchData } from "@/components/Workouts.vue";

export default {
  methods: {
    async handleLogin() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      console.log({ email, password });
      const res = await fetchData("/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();

      if (res.ok) {
        this.$emit("loggedIn", user);
      } else {
        this.$emit("loggedIn", null);
      }
    },
  },
};
</script>

<style></style>
