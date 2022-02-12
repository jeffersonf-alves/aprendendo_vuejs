<template>
	<div id="app">
		<UsoDeSlot/>
		<app-button />
		<app-button>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			Enviar
		</app-button>
		<app-button>Chutar</app-button>
	</div>
</template>

<script>
import AppButton from './components/AppButton.vue'
import UsoDeSlot from './components/UsoDeSlot.vue'

export default {
	name: "app",
	components: { UsoDeSlot, AppButton}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.7rem;
}

h1, h2, p {
	margin: 10px;
	padding: 0px;
}

button {
	font-size: 1.5rem;
	padding: 5px 15px;
	border-radius: 4px;
	margin: 10px;
}
</style>
