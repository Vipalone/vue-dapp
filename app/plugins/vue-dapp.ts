import { VueDappPinia } from '@vue-dapp/core'

export default defineNuxtPlugin(({ $pinia }) => {
	$pinia.use(VueDappPinia)
})
