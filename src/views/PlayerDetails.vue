<template>
  <div v-if="player" class="player-details">
    <div>
      <h2>Player</h2>
      <p>{{ player["first_name"] + " " + player["last_name"] }}</p>
      <p>Position: {{ player["position"] }}</p>
      <p>Team: {{ player["team"]["full_name"] }}</p>
    </div>
  </div>
  <div v-else>
    <h2>Loading the player...</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id"],
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    fetch("https://www.balldontlie.io/api/v1/players/" + this.id)
      .then(res => res.json())
      .then(data => this.player = data)
      .catch(error => console.log(error.message))
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
</style>