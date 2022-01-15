<template>
  <router-view />
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
</template>

<style>
html {
  font-size: 16px;
}
#app {
  font-family: "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: rgb(0, 0, 56);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 50, 1) 0%,
    rgba(6, 0, 37, 1) 70%,
    rgba(211, 95, 0, 1) 100%
  );
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(134, 255, 123);
}
</style>
