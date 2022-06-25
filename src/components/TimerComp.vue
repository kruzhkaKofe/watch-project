<template>
	 <div class="timer text-center text-7xl dark:text-white h-[176px]">
    {{ timer }}
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const timer = ref("TI:ME:R!");

</script>

<style lang="scss" scoped>

</style>