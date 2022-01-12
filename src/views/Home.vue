<template>
  <div class="home">
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
