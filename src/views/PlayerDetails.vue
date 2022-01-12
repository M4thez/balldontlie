<template>
    <h1>Player</h1>
    <p>Player id: {{ id }}</p>
    <div id="nav">
        <router-link to="/">Return to Home</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: ['id'],

})


</script>