<template>
  <div class="watch text-center text-7xl dark:text-white">
    {{ time }}
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";


const time = ref("");

const currentTime = () => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
};

currentTime()



</script>

<style scoped>

</style>
