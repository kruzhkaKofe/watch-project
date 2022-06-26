<template>
	<nav class="nav w-[650px] flex flex-col items-center bp700:w-[380px] bp700:flex-col px-[30px] mb-[15px] mr-0 bp400:w-[280px] bp700:mb-0">
		<label class="w-[150px] flex justify-center items-center mb-[30px] text-xl dark:text-white" for="mode">
			<input 
				class="input mr-[10px] relative w-[80px] h-[40px] appearance-none bg-slate-400 outline-none rounded-[20px] shadow-my
				checked:bg-green-500 before:absolute before:w-[40px] before:h-[40px] before:rounded-[20px] before:top-0 before:left-0 before:bg-black
				before:duration-500 before:scale-[1.1] before:shadow-circle checked:before:left-[40px] checked:before:bg-white" 
				@click="switchMode"
				type="checkbox" 
				name="mode">
				Тема
		</label>
		<div class="buttons w-[650px] bp700:w-[380px] bp700:flex-col bp400:w-[280px] flex justify-between items-center">
			<my-button
				v-for="(tab, i) in tabs"
				:key="i"
				@click="currentTab(tab)"
			>
				{{ tab }}
			</my-button>
		</div>

	</nav>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import MyButton from "../components/MyButton.vue"

const emit = defineEmits(['choosedTab'])

const tabs = ['Часы', 'Секундомер', 'Таймер']

const currentTab = (tab) => {
	emit('choosedTab', tab)
}

currentTab('Часы')

const switchMode = () => {
	const myHTML = document.querySelector('html')
	myHTML.classList.toggle('dark')
}


</script>

<style scoped>

</style>