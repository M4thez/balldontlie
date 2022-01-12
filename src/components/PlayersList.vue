<template>
  <div class="players-list">
    <ul v-for="player in players" :key="player['id']">
      <li>
        <h2>{{ player["first_name"] + " " + player["last_name"] }}</h2>
        <p>{{ player["position"] }}</p>
        <p>{{ player["team"]["full_name"] }}</p>
        <router-link :to="{ name: 'PlayerDetails', params: { id: player['id'] } }">
          <span class="link">Check</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlayersList",
  data() {
    return {
      players: [],
    };
  },
  mounted() {
    fetch("https://www.balldontlie.io/api/v1/players")
      .then(res => res.json())
      .then(data => this.players = data.data)
      .catch(error => console.log(error.message))
  },
});
</script>

<style scoped>
.players-list {
  background-color: rgb(0, 72, 139);
  color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0.8rem;
  margin: 20px;
  background-color: rgb(0, 38, 87);
}
a {
  text-decoration: none;
}
.link {
  background-color: rgb(209, 209, 209);
  padding: 0.5rem;
  border-radius: 0 0 8px 8px;
  color: black;
  font-weight: bold;
}
.link:hover {
  background-color: white;
}
</style>
