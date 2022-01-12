<template>
  <div v-if="players.length" class="players-list">
    <ul v-for="player in players" :key="player['id']">
      <li>
        <h2>{{ player["first_name"] + " " + player["last_name"] }}</h2>
        <p>{{ player["team"]["full_name"] }}</p>
        <router-link :to="{ name: 'PlayerDetails', params: { id: player['id'] } }">
          <button class="link">Check</button>
        </router-link>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Loading data...</h2>
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
  padding: 3rem 1rem;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 16px 16px;
}
a {
  text-decoration: none;
}
.link {
  background-color: rgb(134, 255, 123);
  padding: 0.5rem;
  border: none;
  border-radius: 0 0 8px 8px;
  color: black;
  font-weight: bold;
  cursor: pointer;
}
.link:hover {
  background-color: rgb(205, 255, 209);
}
</style>
