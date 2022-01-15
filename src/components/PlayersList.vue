<template>
  <div class="search-box">
    <input v-model="search" placeholder="Find players" />
    <button @click="clearQuery">Clear</button>
    <button class="search-btn" @click="searchPlayers(search)">Search</button>
  </div>
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
  <div v-else-if="!players.length && !search">
    <h2>Loading data...</h2>
  </div>
  <div v-else>
    <h2>Can not find player with this name</h2>
  </div>
  <button class="link" @click="searchPlayers('')">Return</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlayersList",
  data() {
    return {
      players: [],
      search: ""
    };
  },
  methods: {
    getPlayers(params = "") {
      fetch("https://www.balldontlie.io/api/v1/players?per_page=48&search=" + params)
        .then(res => res.json())
        .then(data => this.players = data.data)
        .catch(error => console.log(error.message))
    },
    searchPlayers(query: string) {
      let searchQuery = encodeURI(query);
      this.getPlayers(searchQuery);
    },
    clearQuery() {
      this.search = "";
    }
  },
  created() {
    this.getPlayers();
  }
});
</script>

<style scoped>
.players-list {
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
  margin: 20px 0;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 16px 16px;
}
a {
  text-decoration: none;
}
.link {
  background-color: rgb(202, 202, 202);
  padding: 0.5rem;
  border: none;
  border-radius: 0 0 8px 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}
.link:hover {
  background-color: white;
}

.search-box {
  margin: 20px;
}
.search-box input,
.search-box button {
  border: none;
  padding: 0.7rem 1rem;
  transition: background-color 0.3s;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4);
}
.search-box input {
  width: 30%;
  border-radius: 8px 0 0 8px;
  outline: none;
  transition: border-radius 0.4s;
}
.search-box input:focus {
  border-radius: 16px 0 0 16px;
}
.search-box button {
  background-color: rgba(19, 8, 71, 0.8);
  color: white;
  cursor: pointer;
  font-weight: bold;
}
.search-box button:hover {
  background-color: black;
}
.search-btn {
  border-radius: 0 8px 8px 0;
}

/* Media Queries */
@media screen and (max-width: 1200px) {
  .players-list {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
  }
}
@media screen and (max-width: 700px) {
  .players-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 400px) {
  .players-list {
    grid-template-columns: 1fr;
  }
}
</style>
