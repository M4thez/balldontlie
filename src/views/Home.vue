<template>
  <div class="home">
    <h1>NBA Players</h1>
    <PlayersList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayersList from '@/components/PlayersList.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    PlayersList,
  },
});
</script>