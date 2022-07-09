import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Diretivas personalizadas Globais
Vue.directive('destaque', {
	bind(el, binding) {
		if(binding.arg === "fundo") {
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}
	}
})


Vue.directive('focus', {
	bind: function(binding) {
		
	},
	inserted: function (el, binding) {
		el.focus()
	}
})


new Vue({
	render: h => h(App),
}).$mount('#app')
