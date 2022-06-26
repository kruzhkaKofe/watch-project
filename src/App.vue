<template>
  <div class="app py-[15px] w-screen h-screen flex bg-white dark:bg-black">
    <div class="inner-wrapper m-auto">
      <clock-nav @choosedTab="openTab" />
      <keep-alive>
        <component :is="renderTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import ClockNav from "./components/ClockNav.vue";
import WatchComp from "./components/WatchComp.vue";
import StopwatchComp from "./components/StopwatchComp.vue";
import TimerComp from "./components/TimerComp.vue";
import { computed } from "@vue/runtime-core";

const currentTab = ref("");

const openTab = (tab) => {
  currentTab.value = tab;
};

const renderTab = computed(() => {
  if (currentTab.value === "Часы") {
    return WatchComp;
  }
  if (currentTab.value === "Секундомер") {
    return StopwatchComp;
  }
  if (currentTab.value === "Таймер") {
    return TimerComp;
  }
});

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
}
</style>
