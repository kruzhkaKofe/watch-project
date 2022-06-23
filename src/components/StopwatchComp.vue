<template>
	<div class="stopwatch text-center text-7xl dark:text-white">
    {{ stopwatch }}
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const stopwatch = ref("00:00:00");


</script>

<style  scoped>

</style>