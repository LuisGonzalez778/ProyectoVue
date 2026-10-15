<template>
    <div class="pagina open-sans">
        <div class="columna-imagen">
            <div class="imagen-placeholder">
            </div>
        </div>

        <div class="columna-formulario">
            <div class="barra-superior">
                <router-link to="/" class="link-registrate">Volver</router-link>
                <span class="texto-cuenta">¿No tienes cuenta?</span>
                <router-link to="/registrar" class="link-registrate">Regístrate</router-link>
            </div>

            <form class="contenedor-form" @submit.prevent="login">
                <div class="logo-form">
                    <img src="@/assets/logo1.png" alt="Logo" class="img-logo-form">
                </div>
                <h2 class="campo">Ingresar Usuario</h2>

                <template v-if="cargando">
                    <div class="campo" aria-hidden="true">
                        <Skeleton width="42%" height="1rem" class="skeleton-etiqueta" />
                        <Skeleton width="100%" height="44px" />
                    </div>
                    <div class="campo" aria-hidden="true">
                        <Skeleton width="35%" height="1rem" class="skeleton-etiqueta" />
                        <Skeleton width="100%" height="44px" />
                    </div>
                    <Skeleton width="100%" height="48px" role="status" aria-label="Validando acceso" />
                </template>
                <template v-else>
                    <div class="campo">
                        <label class="etiqueta" for="usuario">Usuario o correo:</label>
                        <input id="usuario" v-model="usuario" type="text" class="input-campo" autocomplete="username">
                    </div>

                    <div class="campo">
                        <label class="etiqueta" for="password">Contraseña:</label>
                        <input id="password" v-model="password" type="password" class="input-campo" autocomplete="current-password">
                    </div>

                    <button class="btn-ingresar" type="submit">Ingresar</button>
                </template>

                <div v-if="mensajeWarning" class="warning" role="alert">{{ mensajeWarning }}</div>
                <div v-if="mensajeSuccess" class="success" role="status">{{ mensajeSuccess }}</div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Skeleton from 'primevue/skeleton'
import api from '@/services/api'

const router = useRouter()

const usuario = ref('')
const password = ref('')
const mensajeWarning = ref('')
const mensajeSuccess = ref('')
const cargando = ref(false)

async function login() {
    if (cargando.value) return
    mensajeWarning.value = ''
    mensajeSuccess.value = ''

    if (usuario.value.trim() === '') {
        mensajeWarning.value = "Por favor digite un usuario o correo"
        return
    }
    if (password.value === '') {
        mensajeWarning.value = "Por favor digite una contraseña"
        return
    }

    cargando.value = true
    try {
        const respuesta = await api.post('/login', {
            usuario: usuario.value.trim(),
            contrasena: password.value
        })
        sessionStorage.setItem('usuarioAutenticado', JSON.stringify(respuesta.data.usuario))
        mensajeSuccess.value = "¡Ingreso exitoso!"
        await router.push('/')
    } catch (error) {
        if (error.response?.status === 401) {
            mensajeWarning.value = "Usuario o contraseña incorrectos"
        } else {
            mensajeWarning.value = "No se pudo conectar con el servidor. Verifique que la API esté encendida."
        }
    } finally {
        cargando.value = false
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.open-sans {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
}

.pagina {
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #00FFAE;
}

.columna-imagen {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0092FF;
    padding: 40px;
}

.imagen-placeholder {
    width: 240px;
    height: 180px;
    background-color: rgba(255,255,255,0.55);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-login {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.columna-formulario {
    width: 500px;
    flex-shrink: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}

.barra-superior {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    padding: 18px 28px;
    border-bottom: 1px solid rgba(0, 204, 0, 0.4);
}

.texto-cuenta {
    font-size: 14px;
    color: #000000;
}

.link-registrate {
    font-size: 14px;
    color: #0092FF;
    text-decoration: underline;
    text-underline-offset: 3px;
}

.link-registrate:hover {
    color: #0CC200;
}

.contenedor-form {
    padding: 80px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
}

.etiqueta {
    font-size: 13.5px;
    color: #333;
    margin-bottom: 6px;
}

.input-campo {
    width: 100%;
    padding: 10px 12px;
    border: 1.5px solid #0CC200;
    border-radius: 2px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #1a1a1a;
    outline: none;
    background-color: #fff;
}

.input-campo:focus {
    border-color: #0092FF;
}

.btn-ingresar {
    width: 100%;
    padding: 14px;
    background-color: #0CC200;
    color: #fff;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 2px;
    letter-spacing: 0.5px;
    margin-top: 8px;
}

.btn-ingresar:hover {
    background-color: #0092FF;
}

.warning {
    background-color: rgba(255, 90, 90, 0.719);
    color: #000;
    font-size: 14px;
    margin-bottom: 18px;
    padding: 12px;
    border-radius: 4px;
    display: none;
}

.success {
    background-color: lightgreen;
    color: #000;
    font-size: 14px;
    margin-bottom: 18px;
    padding: 12px;
    border-radius: 4px;
    display: none;
}

@media (max-width: 1280px) {
    .columna-formulario {
        width: 440px;
    }

    .contenedor-form {
        padding: 60px 36px 40px;
    }
}

@media (max-width: 1024px) {
    .columna-formulario {
        width: 400px;
    }

    .columna-imagen {
        padding: 28px;
    }

    .imagen-placeholder {
        width: 200px;
        height: 150px;
    }

    .contenedor-form {
        padding: 50px 28px 36px;
    }
}

@media (max-width: 768px) {
    .pagina {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
    }

    .columna-imagen {
        flex: none;
        height: 180px;
        padding: 20px;
    }

    .imagen-placeholder {
        width: 100%;
        height: 100%;
        max-width: 300px;
    }

    .columna-formulario {
        width: 100%;
        flex: 1;
    }

    .barra-superior {
        padding: 14px 20px;
    }

    .contenedor-form {
        padding: 36px 24px 32px;
    }

    .btn-ingresar {
        padding: 13px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .columna-imagen {
        height: 140px;
    }

    .contenedor-form {
        padding: 28px 16px 28px;
    }

    .barra-superior {
        padding: 12px 16px;
        gap: 10px;
    }

    .texto-cuenta {
        font-size: 13px;
    }

    .link-registrate {
        font-size: 13px;
    }
}
.logo-form {
    text-align: center;
    margin-bottom: 18px;
}

.skeleton-etiqueta {
    margin-bottom: 6px;
}

.img-logo-form {
    height: 80px;
    width: auto;
}

</style>
