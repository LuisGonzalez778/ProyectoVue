<template>
    <div class="pagina open-sans">

        <div class="columna-formulario">
            <div class="barra-superior">
                <router-link to="/" class="link-ingresar">Volver</router-link>
                <span class="texto-cuenta">¿Ya tiene una cuenta?</span>
                <router-link to="/login" class="link-ingresar">Ingresar</router-link>
            </div>

            <div class="contenedor-form">
                <div class="logo-form">
                    <img src=@/assets/logo1.png  alt="Logo" class="img-logo-form">
                </div>
                <h2 class="titulo-form">Registrar Usuario</h2>

                <div class="campo">
                    <label class="etiqueta">Correo Electrónico</label>
                    <input type="email" v-model="correo" class="input-campo">
                </div>

                <div class="campo">
                    <label class="etiqueta">Nombre del Usuario</label>
                    <input type="text" v-model="nombre" class="input-campo">
                </div>

                <div class="campo">
                    <label class="etiqueta">Contraseña</label>
                    <input type="password" v-model="contrasena" class="input-campo">
                </div>

                <div class="campo">
                    <label class="etiqueta">Confirmar Contraseña</label>
                    <input type="password" v-model="confirmacion" class="input-campo">
                </div>

                <div class="campo">
                    <input type="checkbox" v-model="acepto" id="chk-acepto" class="checkbox">
                    <label for="chk-acepto" class="chk-acepto">Acepto los términos y condiciones</label>
                </div>

                <div class="requisitos">
                    <p class="requisito-item">Mínimo 8 caracteres de longitud</p>
                    <p class="requisito-item">Al menos una letra mayúscula</p>
                    <p class="requisito-item">Al menos un número o carácter especial</p>
                    <p class="requisito-item">Las contraseñas deben coincidir</p>
                </div>

                <button class="btn-registrar" @click="registrar">Registrar</button>

                <div v-if="mensajeWarning" class="warning" style="display: block;">{{ mensajeWarning }}</div>
                <div v-if="mensajeSuccess" class="success" style="display: block;">{{ mensajeSuccess }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const correo = ref('')
const nombre = ref('')
const contrasena = ref('')
const confirmacion = ref('')
const acepto = ref(false)

const mensajeWarning = ref('')
const mensajeSuccess = ref('')

const registrar = () => {
    mensajeWarning.value = ''
    mensajeSuccess.value = ''

    if (correo.value.trim() === '') {
        mensajeWarning.value = "Por favor digite un correo"
        return
    }
    if (nombre.value.trim() === '') {
        mensajeWarning.value = "Por favor digite un nombre"
        return
    }
    if (contrasena.value === '') {
        mensajeWarning.value = "Por favor digite una contraseña"
        return
    }
    if (confirmacion.value === '') {
        mensajeWarning.value = "Por favor confirme la contraseña"
        return
    }
    if (!acepto.value) {
        mensajeWarning.value = "Por favor acepte los términos y condiciones"
        return
    }
    if (contrasena.value !== confirmacion.value) {
        mensajeWarning.value = "Las contraseñas no coinciden"
        return
    }

  
    localStorage.setItem('usuarioRegistrado', correo.value.trim())
    localStorage.setItem('nombreRegistrado', nombre.value.trim())
    localStorage.setItem('contraRegistrada', contrasena.value)

    mensajeSuccess.value = `Señor/a ${nombre.value}, ha sido registrado/a correctamente`
    
    console.log("REGISTRO EXITOSO - Guardado en LocalStorage:", correo.value.trim())
    alert("REGISTRO EXITOSO!!!!")

    setTimeout(() => {
        router.push('/login')
    }, 1200)
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

.img-registro {
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

.link-ingresar {
    font-size: 14px;
    color: #0092FF;
    text-decoration: underline;
    text-underline-offset: 3px;
}

.link-ingresar:hover {
    color: #0CC200;
}

.contenedor-form {
    padding: 40px 28px;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.titulo-form {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 28px;
}

.campo {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
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
    background-color: #fff;
}


.requisitos {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 24px;
}

.requisito-item {
    font-size: 13px;
    color: #333;
    line-height: 1.5;
}

.btn-registrar {
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
}

.btn-registrar:hover {
    background-color: #0092FF;
}

.checkbox {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.chk-acepto {
    font-size: 14px;
    color: #333;
    cursor: pointer;
    margin-left: 8px;
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
        padding: 36px 24px;
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
        padding: 30px 24px;
    }

    .titulo-form {
        font-size: 1.2rem;
        margin-bottom: 22px;
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
        flex-wrap: wrap;
        gap: 10px;
    }

    .contenedor-form {
        padding: 28px 24px 32px;
    }

    .titulo-form {
        font-size: 1.15rem;
        margin-bottom: 20px;
    }

    .campo {
        margin-bottom: 14px;
    }

    .requisitos {
        margin-bottom: 20px;
    }

    .btn-registrar {
        padding: 13px;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .columna-imagen {
        height: 140px;
    }

    .contenedor-form {
        padding: 22px 16px 28px;
    }

    .barra-superior {
        padding: 12px 16px;
        gap: 8px;
    }

    .texto-cuenta {
        font-size: 13px;
    }

    .link-ingresar {
        font-size: 13px;
    }

    .titulo-form {
        font-size: 1.1rem;
    }

    .requisito-item {
        font-size: 12px;
    }
}
.logo-form {
    text-align: center;
    margin-bottom: 18px;
}

.img-logo-form {
    height: 80px;
    width: auto;
}

</style>
