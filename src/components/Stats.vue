<template>
  <div>
    <table>
      <tr>
        <th>SEASON</th>
        <th>GAMES PLAYED</th>
        <th>MINUTES PLAYED</th>
        <th>PTS</th>
      </tr>
      <tr>
        <td>{{ season }}</td>
        <td>{{ games_played }}</td>
        <td>{{ min }}</td>
        <td>{{ pts }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stats",
  props: {
    season: Number,
    games_played: Number,
    min: String,
    pts: Number,
  }
})

</script>

<style scoped>
table {
  width: 100%;
  border: 2px solid rgb(110, 110, 110);
}
table td,
th {
  padding: 0.8rem;
}
table th {
  background-color: rgb(211, 95, 0);
}
table td {
  background-color: rgb(6, 0, 37);
}
</style>