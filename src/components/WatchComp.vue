<template>
  <div class="watch flex flex-col bp700:w-[380px] bp400:w-[280px] h-[234px] bp700:h-[304px] items-center">
    <div class="h-[150px] text-7xl dark:text-white mb-[50px] px-[30px] bp700:text-5xl h-[150px] flex items-center">
    {{ time }}
    </div>
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
