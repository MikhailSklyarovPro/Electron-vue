import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';
import HistoryView from './views/HistoryView.vue';
import BeginTestView from './views/BeginTestView.vue';
import HomeView from './views/HomeView.vue';
import App from './App.vue';


const routes = 
[
    { 
        path: '/',
        component: HomeView 
    },
    { 
        path: '/history', 
        component: HistoryView 
    },
    { 
        path: '/begin-test', 
        component: BeginTestView 
    },
]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
