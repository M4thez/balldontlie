<template>
  <router-view />
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
  color: white;
}
body {
  background: rgb(0, 0, 56);
  background: linear-gradient(
    0deg,
    rgba(6, 0, 25, 1) 0%,
    rgba(6, 0, 37, 1) 80%,
    rgba(211, 95, 0, 1) 100%
  );
  min-height: 100vh;
}

#nav {
  margin: 40px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: black;
  background-color: rgb(202, 202, 202);
  padding: 0.5rem;
  border-radius: 0 0 8px 8px;
  transition: background-color 0.2s;
}
#nav a:hover {
  background-color: white;
}
</style>
