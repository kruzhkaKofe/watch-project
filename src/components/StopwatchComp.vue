<template>
  <div class="stopwatch flex flex-col items-center bp700:w-[380px] bp400:w-[280px]">
    <div class="text-center text-7xl dark:text-white mb-[50px] px-[30px] bp700:text-5xl">
      {{ stopwatch }}
    </div>
    <div class="stopwatch__contols w-[650px] flex justify-around items-center bp700:w-[280px] bp700:flex-col px-[30px]">
      <my-button
        class="hover:bg-transparent"
        :class="{
          'bg-green-500': state === 'Старт',
          'bg-red-500': state === 'Пауза',
          'hover:bg-green-500': state === 'Старт',
          'hover:bg-red-500': state === 'Пауза',
          'dark:hover:bg-green-500': state === 'Старт',
          'dark:hover:bg-red-500': state === 'Пауза',
        }"
        @click="startPause(state)"
      >
        {{ state }}
      </my-button>
      <my-button @click="clearOrSave">{{ additionalState }}</my-button>
    </div>
    <div
      v-if="logs.length"
      class="logs w-[590px] h-[200px] bp700:w-[380px] bp400:w-[320px] bp400:h-[170px]
       dark:text-white mt-[15px] p-[15px] text-center flex flex-col flex-wrap text-2xl bp400:text-lg"
      >
      <span v-for="(log, i) in logs" :key="i">{{ i + 1 }} ) {{ log }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import MyButton from "./MyButton.vue";

const stopwatch = ref("00:00:00.00");
const state = ref("Старт");
const additionalState = ref("Сброс");

const h = ref(0);
const m = ref(0);
const s = ref(0);
const ms = ref(0);
let interval;

const logs = ref([]);

const startPause = (currentState) => {
  clearInterval(interval);
  if (currentState === "Старт") {
    state.value = "Пауза";
    additionalState.value = "Круг";
    interval = setInterval(start, 10);
  }
  if (currentState === "Пауза") {
    clearInterval(interval);
    state.value = "Старт";
    additionalState.value = "Сброс";
  }
};

const start = () => {
  // Milliseconds
  ms.value++;
  if (ms.value <= 9) {
    ms.value = `${ms.value}`.padStart(2, "0");
  }
  if (ms.value > 9) {
    ms.value = ms.value;
  }
  if (ms.value > 99) {
    s.value++;
    ms.value = `0`.padStart(2, "0");
  }

  // Seconds
  if (s.value <= 9) {
    s.value = `${s.value}`.padStart(2, "0");
  }
  if (s.value > 9) {
    s.value = s.value;
  }
  if (s.value > 59) {
    m.value++;
    s.value = `0`.padStart(2, "0");
  }

  // Minutes
  if (m.value <= 9) {
    m.value = `${m.value}`.padStart(2, "0");
  }
  if (m.value > 9) {
    m.value = m.value;
  }
  if (m.value > 59) {
    h.value++;
    m.value = `0`.padStart(2, "0");
  }

  // Hours
  if (h.value <= 9) {
    h.value = `${h.value}`.padStart(2, "0");
  }
  if (h.value > 9) {
    h.value = h.value;
  }
  if (h.value == 99 && m.value == 59 && s.value == 59 && ms.value == 99) {
    clearInterval(interval);
    alert("Не умею считать дальше! >_<");
  }

  stopwatch.value = `${h.value}:${m.value}:${s.value}.${ms.value}`;
};

const breakCount = () => {
  clearInterval(interval);
  clearAllCounters();
  state.value = "Старт";
};

const clearAllCounters = () => {
  h.value = 0;
  m.value = 0;
  s.value = 0;
  ms.value = 0;
  stopwatch.value = "00:00:00.00";
  logs.value = [];
};

const saveLog = () => {
  if (logs.value.length < 10) {
    logs.value.push(stopwatch.value);
  } else {
    alert("Максимальное количество кругов!");
  }
};

const clearOrSave = () => {
  if (additionalState.value === "Сброс") {
    breakCount();
  }
  if (additionalState.value === "Круг") {
    saveLog();
  }
};
</script>
