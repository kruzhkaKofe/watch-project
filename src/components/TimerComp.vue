<template>
  <div class="timer flex flex-col items-center bp700:w-[380px] bp400:w-[280px]">
    <div 
      v-if="time === '00:00'" 
      class="text-center text-7xl dark:text-white mb-[30px] px-[30px] h-[150px] flex items-center bp700:text-5xl "
    >
      <input 
        class="dark:bg-gray-800 w-[150px] border-2 border-solid border-black text-right" 
        type="text" 
        maxlength="2"
        v-model="m"
      >
      :
      <input 
        class="dark:bg-gray-800 w-[150px] border-2 border-solid border-black" 
        type="text" 
        maxlength="2"
        v-model="s"
      >
    </div>
    <div 
      v-else 
      class="text-center text-7xl dark:text-white mb-[30px] px-[30px] h-[150px] flex items-center bp700:text-5xl "
    >
     {{ time }}
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
        @click="startStop(state)"
      >
        {{ state }}
      </my-button>
      <my-button @click="breakeInterval">Сброс</my-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import MyButton from "./MyButton.vue"

const time = ref("00:00");
const state = ref('Старт');

const m = ref('00');
const s = ref('00');
let interval;
let timeInSec;

const setTimeinSec = watch(() => {
  if (m.value || s.value) {
    timeInSec = parseInt(m.value) * 60 + parseInt(s.value)
  }
})

const checkValid = () => {
  if ((m.value == 0 && s.value == 0)) {
    alert('Установите время корректно!')
    m.value = '00'
    s.value = '00'
    return false
  }
}

const startStop = (currentState) => {
  if (checkValid() === false) {
    return
  }
  if (currentState === 'Старт') {
    interval = setInterval(counter, 1000)
    state.value = 'Пауза'
  } 
  if (currentState === 'Пауза') {
    clearInterval(interval)
    state.value = 'Старт'
  }
}

const counter = () => { 
  const min = `${Math.floor(timeInSec/60)}`.padStart(2, "0");
  const sec = `${timeInSec%60}`.padStart(2, 0);
  if (timeInSec === 0) {
    breakeInterval()
    alert('!!! Время закончилось !!!')
    return
  } 
  time.value = `${min}:${sec}`
  timeInSec--
}

const breakeInterval = () => {
  s.value = 0
  m.value = 0
  time.value = '00:00'
  state.value = 'Старт'
  clearInterval(interval);
}

</script>