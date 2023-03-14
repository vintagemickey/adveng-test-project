import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory  } from 'vue-router'

import AuthPage from './components/auth-page'
import EventsPage from './components/events-page'
import EventAdd from './components/event-add'
import App from './App.vue'

const routes = [
    { path: '/', component: EventsPage },
    { path: '/auth', component: AuthPage },
    { path: '/add', component: EventAdd },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
  
createApp(App).use(createPinia()).use(router).mount('#app')