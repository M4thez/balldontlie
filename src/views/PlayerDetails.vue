<template>
  <h1>Player Details</h1>
  <div v-if="player" class="player-details">
    <div class="basic-info">
      <p>{{ player["first_name"] + " " + player["last_name"] }}</p>
      <p>{{ player["team"]["abbreviation"] }}, {{ player["team"]["full_name"] }}</p>
      <p>Conference - {{ player["team"]["conference"] }}, Division - {{ player["team"]["division"] }}</p>
    </div>
    <div v-if="stats">
      <Stats
        :season="stats['season']"
        :games_played="stats['games_played']"
        :min="stats['min']"
        :pts="stats['pts']"
      />
    </div>
    <div v-else>
      <p>No statistics for the player available for season 2018</p>
    </div>
  </div>
  <div v-else>
    <h2>Loading the player...</h2>
  </div>
  <div id="nav">
    <router-link to="/">Return</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Stats from "@/components/Stats.vue";

export default defineComponent({
  name: "PlayerDetails",
  props: ["id"],
  components: { Stats },
  data() {
    return {
      player: null,
      baseUrl: "https://www.balldontlie.io/api/v1/",
      stats: null,
    }
  },
  mounted() {
    fetch(this.baseUrl + "players/" + this.id)
      .then(res => res.json())
      .then(data => this.player = data)
      .catch(error => console.log(error.message));
    fetch(this.baseUrl + "season_averages?season=2018&player_ids[]=" + this.id)
      .then(res => res.json())
      .then(data => this.stats = data.data[0])
      .catch(error => console.log(error.message));
  }
})

</script>

<style scoped>
.player-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  padding: 4rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
}

.basic-info {
  font-size: 1.2rem;
  padding: 0 2rem;
}
@media screen and (max-width: 720px) {
  .player-details {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
  .basic-info {
    text-align: center;
  }
}
</style>