import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/styles.scss'

import UIcomponents from '@/components/UI';

const app = createApp(App)

UIcomponents.forEach(UIcomponent => {
    app.component(UIcomponent.name, UIcomponent)
})

app.use(store).use(router).mount('#app')
