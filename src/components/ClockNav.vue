<template>
	<nav class="nav w-[650px] flex justify-between items-center bp700:w-[380px] bp700:flex-col px-[30px] mb-[50px] mr-0 bp400:w-[280px]">
		<my-button
			v-for="(tab, i) in tabs"
			:key="i"
			@click="currentTab(tab)"
		>
			{{ tab }}
		</my-button>

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

</script>

<style scoped>

</style>