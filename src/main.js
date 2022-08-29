import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './register/components'
import './package'


createApp(App).use(store).use(router).use(components).mount('#app');
