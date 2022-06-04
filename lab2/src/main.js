import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/js/bootstrap.min'
import PrimeVue from 'primevue/config';

import routes from './routes'

const app = createApp(App);

app.use(PrimeVue);
app.use(routes);

app.mount('#app')
