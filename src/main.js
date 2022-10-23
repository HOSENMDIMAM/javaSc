import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import modalComponent from './components/others/modalComponent.vue'
import axios from 'axios'

router.beforeEach((to, from, next) => {
    axios.defaults.headers.common['Authorization'] = "Token" + localStorage.getItem("token");
    next()
})
// App.component("modal-Component", modalComponent)
// createApp(App).use(router).mount('#app')

const app = createApp(App);
app.component("modal-Component", modalComponent);
app.use(router).mount("#app");