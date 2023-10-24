import 'pinia'
import { PiniaPluginContext } from 'pinia'

declare module 'pinia' {
	export interface PiniaCustomStateProperties<S> {
		vuedapp: {
			boardOpen: boolean
			openBoard: () => void
			closeBoard: () => void
		}
	}
}

export function VueDappPinia({ store }: PiniaPluginContext) {
	store.vuedapp = {
		boardOpen: false,
		openBoard() {
			store.vuedapp.boardOpen = true
		},
		closeBoard() {
			store.vuedapp.boardOpen = false
		},
	}

	if (process.env.NODE_ENV === 'development') {
		store._customProperties.add('vuedapp')
	}
}
