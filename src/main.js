import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ComponentAtencionUsuario from './components/ComponentAtencionUsuario.vue'
import ComponentNoticias from './components/ComponentNoticias.vue'
import ComponnentsPrincipal from './components/ComponnentsPrincipal.vue'
import ComponnentsRegistro from './components/ComponnentsRegistro.vue'
import ComponnentsLogin from './components/ComponnentsLogin.vue'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)
app.use(router)

app.component('ComponentAtencionUsuario', ComponentAtencionUsuario)
app.component('ComponentNoticias', ComponentNoticias)
app.component('ComponnentsLogin', ComponnentsLogin)
app.component('ComponnentsPrincipal', ComponnentsPrincipal)
app.component('ComponnentsRegistro', ComponnentsRegistro)

app.mount('#app')