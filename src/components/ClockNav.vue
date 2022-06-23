<template>
	<nav class="nav w-[650px] flex justify-between items-center my700:flex-col my700:w-[350px] mb-[50px] px-[30px]">
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
import { onBeforeUpdate, onMounted } from "@vue/runtime-core"
import MyButton from "../components/MyButton.vue"

const emit = defineEmits(['choosedTab'])

const tabs = ['Часы', 'Секундомер', 'Таймер']

const currentTab = (tab) => {
	emit('choosedTab', tab)
}

onMounted(() => {
	currentTab('Часы')
})


</script>

<style scoped>

</style>