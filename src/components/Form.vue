<template>
  <form>
    <h2>Login</h2>
    <div class="form_control">
      <label>Email</label>
      <input type="email" value="email" />
    </div>
    <div class="form_control">
      <label>Password</label>
      <input type="text" value="password" />
    </div>
  </form>
</template>

<script>
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NjNTZhMzBjMzc4OTNkYWJjZjVkZWUiLCJpYXQiOjE2NzQ2NzM1MjUsImV4cCI6MTY3NDc1OTkyNX0.QidV9jCjnCl8Yaxo1hfnaY3boLD5kcN4jNT1zbTjOMs";

export default {
  data() {
    return {
      email: "ash@gmail.com",
      password: "ash123",
    };
  },
};
</script>

<style></style>
