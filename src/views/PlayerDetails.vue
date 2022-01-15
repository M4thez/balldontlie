<template>
  <h2>Player Details</h2>
  <div v-if="player" class="player-details">
    <div>
      <p>{{ player["first_name"] + " " + player["last_name"] }}</p>
      <p>Position: {{ player["position"] }}</p>
      <p>Team: {{ player["team"]["full_name"] }}</p>
    </div>
    <div v-if="stats">
      <Stats
        :season="stats['season']"
        :games_played="stats['games_played']"
        :min="stats['min']"
        :pts="stats['pts']"
      />
    </div>
  </div>
  <div v-else>
    <h2>Loading the player...</h2>
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
  padding: 2rem;

  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}
h2 {
  color: white;
}
</style>