<template>
  <div class="timer flex flex-col items-center bp700:w-[380px] bp400:w-[280px]">
    <div class="text-center text-7xl dark:text-white mb-[30px] px-[30px] h-[150px] flex items-center bp700:text-5xl ">
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
import MyButton from "./MyButton.vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const modules = [Navigation, Autoplay]
const time = ref("00:00");
const state = ref('Старт');

const h = ref(0);
const m = ref(2);
let interval;

const test = ref('')

const autoplayOptions = () => {
  // return {
  //   reverseDirection: true,
  //   delay: 1000
  // }
}

// const defaut = () => {
//   h.value = `${h.value}`.padStart(2, '0')
//   m.value = `${m.value}`.padStart(2, '0')
// }

const startStop = (currentState) => {
  if (currentState === 'Старт') {
    interval = setInterval(timerValue, 60000)
    state.value = 'Пауза'
  } 
  if (currentState === 'Пауза') {
    clearInterval(interval)
    state.value = 'Старт'
  }
}

const timerValue = () => {
  if (h.value == 0 && m.value == 0) {
    alert('Установите необходмое время!')
    return
  }
  counter()
  if (m.value == 0) {
    breakeInterval()
    alert('!!! Время закончилось !!!')
  }
}

const counter = () => { 
  m.value--
  if (m.value == 0 && h.value != 0) {
    h.value = `${h.value--}`.padStart(2, "0")
    m.value = 59
  }
  
  // time.value = `${h.value}:${m.value}`
}

const breakeInterval = () => {
  clearInterval(interval);
  h.value = 0
  m.value = 0
  time.value = '00:00'
  state.value = 'Старт'
}

</script>

<style scoped>

</style>