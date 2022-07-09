<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Ola diretivas do vuejs'"></p>
		<p v-destaque="'lightblue'">Usando diretiva personalizada!</p>
		<p v-destaque:fundo="cor">Usando diretiva personalizada!</p>
		<input v-focus>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cor: 'red'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
