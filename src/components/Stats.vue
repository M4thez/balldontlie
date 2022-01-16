<template>
  <div class="table-box">
    <table>
      <tbody>
        <tr>
          <th>Season</th>
          <th>Games</th>
          <th>Minutes</th>
          <th>Points</th>
          <th>Assists</th>
          <th>Blocks</th>
        </tr>
        <tr>
          <td>{{ season }}</td>
          <td>{{ games_played }}</td>
          <td>{{ min }}</td>
          <td>{{ pts }}</td>
          <td>{{ ast }}</td>
          <td>{{ blk }}</td>
        </tr>
      </tbody>
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
    ast: Number,
    blk: Number,
  }
})

</script>

<style scoped>
.table-box {
  overflow-x: auto;
}

table {
  margin: 2rem 0;
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
@media screen and (max-width: 768px) {
  table td,
  th {
    padding: 0.4rem;
  }
}
</style>