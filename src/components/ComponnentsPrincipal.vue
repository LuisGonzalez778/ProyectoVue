<template>
    <menu class="menu open-sans">
        <div class="menu-top">
            <img src="@/assets/logo1.png" alt="Samaria Bus Route">
            <div class="acciones">
                <router-link class="btn-registrar" to="/registrar">Registrar</router-link>
                <router-link class="btn-ingresar" to="/login">Ingresar</router-link>
            </div>
            <button
                class="btn-hamburguesa"
                :class="{ activo: menuAbierto }"
                @click="toggleMenu"
                :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'"
                :aria-expanded="menuAbierto"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav class="navegacion" :class="{ 'nav-abierta': menuAbierto }">
            <ul class="navegacion-lista">
                <li class="item-menu item-menu-underline"><router-link to="/">Inicio</router-link></li>
                <li class="item-menu item-menu-underline">Que es</li>
                <li class="item-menu item-menu-underline">Transparencia</li>
                <li class="item-menu item-menu-underline">Gestion Tecnica</li>
                <li class="item-menu item-menu-underline"><a href>Atencion Usuario</a></li>
            </ul>
            <div class="acciones-mobile">
                <router-link class="btn-registrar" to="/registrar">Registrar</router-link>
                <router-link class="btn-ingresar" to="/login">Ingresar</router-link>
            </div>
        </nav>
    </menu>

    <section class="banner">
        <section id="banner" class="banner-slider" :style="estiloSlider">
            <div class="slide" v-for="(slide, index) in slides" :key="index">
                <img class="image" :src="slide.src" :alt="slide.alt">
            </div>
        </section>

        <button class="flotante atras" @click="moverAtras">‹</button>
        <button class="flotante adelante" @click="moverAdelante">›</button>

        <section id="content-point" class="content-point">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="point"
                :class="{ active: index === slideActual }"
                @click="irASlide(index)"
            ></div>
        </section>
    </section>

    <section class="banner-secundario">
        <!-- <img class="img-banner-secundario" src="" alt=""> -->
    </section>

    <div class="contenido-principal open-sans">

        <div class="columna-izquierda">
            <section class="seccion-noticias">
                <h2 class="titulo-seccion">Noticias</h2>
                <div v-if="cargandoTarjetas" class="grid-noticias" role="status" aria-label="Cargando noticias">
                    <article v-for="placeholder in noticias" :key="placeholder.titulo" class="noticia noticia-skeleton" aria-hidden="true">
                        <Skeleton class="skeleton-imagen" height="auto" />
                        <div class="skeleton-contenido">
                            <Skeleton width="82%" height="1.4rem" />
                            <Skeleton width="64%" height="1.4rem" />
                            <div class="skeleton-lineas">
                                <Skeleton
                                    v-for="linea in 6"
                                    :key="linea"
                                    :width="linea % 3 === 0 ? '72%' : '100%'"
                                    height="1rem"
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div v-else class="grid-noticias">
                    <article v-for="noticia in noticias" :key="noticia.titulo" class="noticia">
                        <img :src="noticia.imagen" :alt="noticia.alt" class="img-noticia">
                        <div class="noticia-contenido">
                            <h3>{{ noticia.titulo }}</h3>
                            <p class="texto-noticia">{{ noticia.texto }}</p>
                        </div>
                    </article>
                </div>

                <div class="cta-noticias">
                    <!-- <a class="btn-ver-mas" href="noticias.html">Ver mas noticias</a> -->
                    <router-link class="btn-ver-mas" to="/noticias">Ver mas noticias</router-link>
                </div>
            </section>

            <section class="seccion-anuncios">
                <h2 class="titulo-seccion">Anuncios</h2>

                <div v-if="cargandoTarjetas" class="anuncios-grid" role="status" aria-label="Cargando anuncios">
                    <article v-for="anuncio in anuncios" :key="anuncio.titulo" class="anuncio anuncio-skeleton" aria-hidden="true">
                        <Skeleton width="65%" height="1.4rem" />
                        <Skeleton v-for="linea in 9" :key="linea" :width="linea % 3 === 0 ? '74%' : '100%'" height="1rem" />
                    </article>
                </div>
                <div v-else class="anuncios-grid">
                    <article v-for="anuncio in anuncios" :key="anuncio.titulo" class="anuncio">
                        <h3>{{ anuncio.titulo }}</h3>
                        <p v-for="parrafo in anuncio.parrafos" :key="parrafo">{{ parrafo }}</p>
                    </article>
                </div>
            </section>

        </div>

        <aside class="sidebar">
            <input type="text" class="buscador" v-model="busqueda">

            <div class="sidebar-texto">
                <p>Consulta rutas, horarios y tarifas del sistema integrado de transporte público metropolitano en tiempo real desde cualquier dispositivo.</p>
                <p>Descarga la app oficial y accede a información actualizada sobre el estado del servicio, alertas y novedades del sistema de movilidad.</p>
                <p>Reporta inconvenientes y comunícate directamente con los operadores a través del canal oficial de atención ciudadana.</p>
            </div>

            <div v-for="imagen in imagenesSidebar" :key="imagen.alt" class="sidebar-imagen">
                <Skeleton v-if="cargandoTarjetas" class="skeleton-sidebar" aria-hidden="true" />
                <img v-else :src="imagen.src" :alt="imagen.alt" class="img-sidebar">
            </div>
        </aside>

    </div>

    <footer class="footer open-sans">
        <div class="footer-contenido">
            <div class="footer-marca">
            <img src="@/assets/logo1.png" alt="Logo">
                <div class="footer-direccion">
                    <p><strong>Address:</strong></p>
                    <p>123 Main Street, City</p>
                    <p>State Province, Country</p>
                </div>
                <div class="footer-redes">
                    <li class="fa fa-instagram"></li>
                    <li class="fa fa-facebook"></li>
                    <li class="fa fa-twitter"></li>
                </div>
            </div>
            <div class="footer-columnas">
                <div class="footer-columna">
                    <h4 class="footer-titulo-col">Column one</h4>
                    <ul class="footer-lista">
                        <li class="footer-link">Link one</li>
                        <li class="footer-link">Link two</li>
                        <li class="footer-link">Link three</li>
                        <li class="footer-link">Link four</li>
                    </ul>
                </div>
                <div class="footer-columna">
                    <h4 class="footer-titulo-col">Column two</h4>
                    <ul class="footer-lista">
                        <li class="footer-link">Link five</li>
                        <li class="footer-link">Link six</li>
                        <li class="footer-link">Link seven</li>
                        <li class="footer-link">Link eight</li>
                    </ul>
                </div>
                <div class="footer-columna">
                    <h4 class="footer-titulo-col">Column three</h4>
                    <ul class="footer-lista">
                        <li class="footer-link">Link nine</li>
                        <li class="footer-link">Link ten</li>
                        <li class="footer-link">Link eleven</li>
                        <li class="footer-link">Link twelve</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Skeleton from 'primevue/skeleton'


import busImg from '@/assets/bus.jpeg'
import busElectricoImg from '@/assets/imagenes/buselectrico.jpg'
import busesImg from '@/assets/imagenes/buses.jpg'
import busetasImg from '@/assets/imagenes/busetas.jpg'
import imagesImg from '@/assets/imagenes/images.jpg'
import datafonoImg from '@/assets/imagenes/datafono.jpg'
import rutaBusImg from '@/assets/imagenes/rutabus.jpg'
import bankImg from '@/assets/imagenes/bank.png'
import walletImg from '@/assets/imagenes/wallet.jpg'

const noticias = [
    {
        imagen: busImg,
        alt: 'Nueva flota de buses eléctricos',
        titulo: 'Nueva flota de buses eléctricos',
        texto: 'Nueva flota de buses eléctricos llega a la ciudad mejorando la calidad del aire y reduciendo emisiones de CO2 en un 40% durante el primer semestre del año.'
    },
    {
        imagen: datafonoImg,
        alt: 'Sistema de pago integrado',
        titulo: 'Sistema de pago integrado',
        texto: 'Sistema de pago integrado facilita el acceso a todos los medios de transporte público con una sola tarjeta ciudadana recargable en toda la ciudad.'
    },
    {
        imagen: rutaBusImg,
        alt: 'Nuevas rutas intermunicipales',
        titulo: 'Nuevas rutas intermunicipales',
        texto: 'Nuevas rutas intermunicipales reducen tiempos de desplazamiento hasta en un 30% para miles de usuarios diarios que viajan entre municipios.'
    }
]

const anuncios = [
    {
        titulo: 'Nuevas rutas de transporte masivo',
        parrafos: [
            'El Ministerio de Transporte anuncia la implementación de nuevas rutas de transporte masivo para las zonas periféricas de la ciudad. Este proyecto beneficiará a más de 200,000 habitantes que actualmente no cuentan con acceso directo al sistema integrado de transporte. Las obras de infraestructura comenzarán el próximo trimestre con una inversión inicial de $150 mil millones de pesos.',
            'Se habilitarán 15 nuevas estaciones distribuidas estratégicamente en los barrios de mayor densidad poblacional. Cada estación contará con zonas de cicloparqueadero, accesibilidad para personas con movilidad reducida y tecnología de información en tiempo real sobre llegadas y capacidad de los vehículos. La ciudadanía podrá participar en las audiencias públicas programadas para los próximos meses y hacer valer su derecho a la participación en la planificación urbana.'
        ]
    },
    {
        titulo: 'Actualización del sistema de recaudo',
        parrafos: [
            'Actualización del sistema de recaudo: a partir del 1 de abril entrará en vigencia la nueva tarifa integrada que permitirá realizar transbordos gratuitos entre bus, metro y cable durante un período de 90 minutos. Esta medida busca incentivar el uso del transporte público y reducir la congestión vehicular en las horas pico.',
            'Los usuarios podrán recargar su tarjeta en cualquiera de los 450 puntos habilitados en toda el área metropolitana, incluyendo supermercados, farmacias y estaciones de servicio. También se habilitará la recarga virtual a través de la aplicación oficial. Para los adultos mayores, personas con discapacidad y estudiantes de estratos 1, 2 y 3, se mantienen los subsidios y descuentos especiales vigentes.'
        ]
    }
]

const imagenesSidebar = [
    { src: bankImg, alt: 'Servicios bancarios' },
    { src: busImg, alt: 'Comunidad' },
    { src: walletImg, alt: 'Wallet' }
]

const slides = [
    { src: busImg, alt: 'Slide 1' },
    { src: busElectricoImg, alt: 'Slide 2' },
    { src: busesImg, alt: 'Slide 3' },
    { src: busetasImg, alt: 'Slide 4' },
    { src: imagesImg, alt: 'Slide 5' },
]

const slideActual = ref(0)
const cargandoTarjetas = ref(true)
let autoplayId = null

const estiloSlider = computed(() => ({
    transform: `translateX(-${slideActual.value * 100}vw)`
}))

function irASlide(index) {
    slideActual.value = index
}

function moverAdelante() {
    slideActual.value = (slideActual.value + 1) % slides.length
}

function moverAtras() {
    slideActual.value = (slideActual.value - 1 + slides.length) % slides.length
}

function iniciarAutoplay() {
    autoplayId = setInterval(moverAdelante, 5000)
}

function detenerAutoplay() {
    clearInterval(autoplayId)
}

onMounted(() => {
    iniciarAutoplay()
    void cargarTarjetas()
})
onUnmounted(detenerAutoplay)

async function cargarTarjetas() {
    await Promise.all([
        Promise.all([...noticias, ...imagenesSidebar].map(({ imagen, src }) => new Promise((resolve) => {
            const imagenCargada = new Image()
            imagenCargada.onload = resolve
            imagenCargada.onerror = resolve
            imagenCargada.src = imagen || src
        }))),
        new Promise((resolve) => setTimeout(resolve, 900))
    ])
    cargandoTarjetas.value = false
}

const menuAbierto = ref(false)

function toggleMenu() {
    menuAbierto.value = !menuAbierto.value
}

const busqueda = ref('')
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

.menu {
    width: 100%;
    background-color: #0092FF;
    border-bottom: 1px solid rgba(0, 255, 174, 0.35);
    display: flex;
    flex-direction: column;
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.menu-top {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.menu img {
    height: 60px;
    width: auto;
    margin: 10px 24px 10px 24px;
}

.acciones {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.acciones-mobile {
    display: none;
}

.btn-hamburguesa {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 110;
}

.btn-hamburguesa span {
    display: block;
    width: 24px;
    height: 2.5px;
    background-color: #fff;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.btn-hamburguesa.activo span:nth-child(1) {
    transform: translateY(7.5px) rotate(45deg);
}
.btn-hamburguesa.activo span:nth-child(2) {
    opacity: 0;
}
.btn-hamburguesa.activo span:nth-child(3) {
    transform: translateY(-7.5px) rotate(-45deg);
}

.btn-registrar {
    min-width: 112px;
    min-height: 40px;
    padding: 7px 18px;
    border: 1.5px solid #ffffff;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    line-height: 1.2;
}

.btn-registrar:hover {
    background-color: #0CC200;
    border-color: #0CC200;
    color: #fff;
}

.btn-ingresar {
    min-width: 112px;
    min-height: 40px;
    padding: 7px 18px;
    border: 1.5px solid #ffffff;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    line-height: 1.2;
}

.btn-ingresar:hover {
    background-color: #0CC200;
    border-color: #0CC200;
}

.navegacion {
    width: 100%;
    border-top: 1px solid #eee;
    padding: 0 24px;
}

.navegacion-lista {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    gap: 0;
    margin: 0;
    padding: 0;
}

.item-menu {
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-menu a {
    color: inherit;
    text-decoration: none;
}

.item-menu:hover {
    color: #00FFAE;
}

.item-menu-underline {
    text-decoration: underline;
    text-underline-offset: 3px;
}

.banner {
    height: 340px;
    width: 100%;
    overflow: hidden;
    background-color: #0092FF;
    position: relative;
}

.banner-slider {
    height: 100%;
    width: 500vw;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    height: 100%;
    width: 100vw;
    flex-shrink: 0;
}

.image {
    height: 100%;
    width: 100vw;
    object-fit: cover;
    object-position: center;
}

.flotante {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 44px;
    width: 44px;
    font-size: 1.8rem;
    z-index: 10;
    background: rgba(0, 0, 0, 0.35);
    border: none;
    color: #fff;
    border-radius: 9999px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.flotante:hover {
    background: rgba(255, 255, 255, 0.2);
}

.atras {
    left: 16px;
}

.adelante {
    right: 16px;
}

.content-point {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 10;
}

.point {
    height: 12px;
    width: 12px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 9999px;
    cursor: pointer;
}

.point.active {
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.16);
}

.img-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner-secundario {
    height: 80px;
    width: 100%;
    overflow: hidden;
    background-color: white;
}

.img-banner-secundario {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contenido-principal {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 28px 24px 48px;
    display: flex;
    gap: 32px;
    align-items: flex-start;
}

.columna-izquierda {
    flex: 1;
}

.seccion-noticias {
    margin-bottom: 36px;
}

.titulo-seccion {
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
    text-decoration: underline;
    text-underline-offset: 3px;
    display: inline-block;
}

.grid-noticias {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    align-items: stretch;
    gap: 20px;
    margin-bottom: 18px;
}

.img-noticia {
    display: block;
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    margin: 0;
}

.noticia {
    background-color: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.noticia:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 48px rgba(0, 0, 0, 0.12);
}

.noticia h3 {
    margin: 18px;
    font-size: 1.05rem;
    color: #111;
}

.noticia p {
    margin: 0;
    font-size: 14px;
    color: #4a4a4a;
}

.noticia-contenido {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 18px;
}

.noticia-contenido h3 {
    margin: 0 0 12px;
    font-size: 1.05rem;
    color: #12436b;
}

.noticia-contenido p {
    flex: 1;
    line-height: 1.55;
}

.noticia-skeleton {
    min-height: 100%;
}

.skeleton-imagen {
    display: block;
    width: 100%;
    aspect-ratio: 4/3;
    height: auto;
    flex: 0 0 auto;
    border-radius: 0;
}

.skeleton-contenido {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 18px;
}

.skeleton-lineas {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
}

.skeleton-contenido :deep(.p-skeleton) {
    flex-shrink: 0;
}

.texto-noticia {
    font-size: 13.5px;
    color: #333;
    line-height: 1.55;
}

.cta-noticias {
    text-align: center;
    margin-top: 8px;
}

.btn-ver-mas {
    padding: 9px 22px;
    background-color: #0092FF;
    color: #fff;
    border: 1.5px solid #0092FF;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
    text-decoration: none;
    display: inline-block;
}

.btn-ver-mas:hover {
    background-color: #0CC200;
    border-color: #0CC200;
}

.seccion-anuncios {
    margin-bottom: 36px;
}

.anuncio {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    padding: 20px;
    border: 1px solid #dce7f1;
    border-radius: 14px;
    background-color: #ffffff;
    box-shadow: 0 10px 28px rgba(22, 56, 88, 0.08);
}

.anuncios-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    gap: 20px;
}

.anuncio h3 {
    color: #12436b;
    font-size: 1.05rem;
    line-height: 1.4;
}

.anuncio-skeleton {
    justify-content: flex-start;
    min-height: 300px;
}

.anuncio p {
    font-size: 14px;
    line-height: 1.7;
    color: #333;
    margin-bottom: 10px;
}

.sidebar {
    width: 260px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.buscador {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    outline: none;
}

.buscador:focus {
    border-color: #0092FF;
}

.sidebar-texto {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebar-texto p {
    font-size: 13px;
    color: #333;
    line-height: 1.55;
}

.sidebar-imagen {
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    border-radius: 3px;
    background-color: #e6ffef;
}

.skeleton-sidebar {
    display: block;
    width: 100%;
    height: 100%;
}

.img-sidebar {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.footer {
    background-color: #0CC200;
    color: #fff;
    padding: 40px 24px;
}

.footer-contenido {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 48px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.footer-marca {
    flex: 0 0 220px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}
    .footer-marca img {
    width: 200px;
    height: auto;
    display: block;
}

.footer-logo {
    font-size: 1.6rem;
    font-weight: 700;
    color: #000000;
}

.footer-direccion {
    font-size: 13px;
    line-height: 1.7;
}

.footer-direccion strong {
    color: #fff;
}

.footer-redes {
    display: flex;
    gap: 14px;
    align-items: center;
    font-size: 18px;
    color: #ffffff;
}

.footer-redes i:hover {
    color: #797979;
    cursor: pointer;
}

.footer-columnas {
    flex: 1;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.footer-columna {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-lista {
    display: flex;
    flex-direction: column;
    gap: 7px;
    list-style: none;
}

.footer-titulo-col {
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 5px;
}

.footer-link {
    font-size: 13px;
    color: #ffffff;
    cursor: pointer;
    list-style: none;
}

.footer-link:hover {
    color: #8b8b8b;
}

@media (max-width: 1280px) {
    .contenido-principal {
        max-width: 100%;
        padding: 24px 20px 40px;
    }

    .sidebar {
        width: 220px;
    }

    .grid-noticias {
        gap: 16px;
    }

    .footer-contenido {
        gap: 36px;
    }
}

@media (max-width: 1024px) {
    .menu img {
        height: 50px;
        width: 50px;
        margin: 10px 16px 0 16px;
    }

    .acciones {
        top: 10px;
        right: 16px;
    }

    .item-menu {
        padding: 10px 12px;
        font-size: 13px;
    }

    .banner {
        height: 260px;
    }

    .banner-secundario {
        height: 60px;
    }

    .contenido-principal {
        padding: 20px 16px 36px;
        gap: 24px;
    }

    .sidebar {
        width: 200px;
    }

    .grid-noticias {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    .anuncios-grid {
        grid-template-columns: 1fr;
    }

    .footer-contenido {
        gap: 28px;
    }

    .footer-marca {
        flex: 0 0 180px;
    }

    .footer-columnas {
        gap: 24px;
    }

}

@media (max-width: 768px) {
    .menu {
        position: sticky;
    }

    .menu img {
        height: 44px;
        width: 44px;
        margin: 10px 12px;
    }

    .btn-hamburguesa {
        display: flex;
    }

    .acciones {
        position: static;
        transform: none;
        display: none;
    }

    .navegacion {
        display: none;
        width: 100%;
        padding: 0;
        border-top: 1px solid rgba(255,255,255,0.2);
        background-color: #0078d4;
    }

    .navegacion.nav-abierta {
        display: flex;
        flex-direction: column;
    }

    .navegacion-lista {
        flex-direction: column;
        width: 100%;
    }

    .acciones-mobile {
        display: flex;
        gap: 10px;
        padding: 14px 20px;
        border-top: 1px solid rgba(255,255,255,0.15);
    }

    .item-menu {
        padding: 14px 20px;
        font-size: 14px;
        justify-content: flex-start;
        color: #fff;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        white-space: normal;
    }

    .item-menu:hover {
        background-color: rgba(255,255,255,0.1);
        color: #00FFAE;
    }

    .banner {
        height: 180px;
    }

    .banner-secundario {
        height: 50px;
    }

    .contenido-principal {
        flex-direction: column;
        padding: 16px 12px 32px;
        gap: 20px;
    }

    .sidebar {
        width: 100%;
        order: -1;
    }

    .sidebar-imagen {
        max-height: 180px;
    }

    .grid-noticias {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .anuncios-grid {
        grid-template-columns: 1fr;
    }

    .titulo-seccion {
        font-size: 0.95rem;
    }

    .anuncio p {
        font-size: 13.5px;
    }

    .btn-ver-mas {
        width: 100%;
        padding: 11px;
        text-align: center;
    }

    .footer {
        padding: 28px 16px;
    }

    .footer-contenido {
        flex-direction: column;
        gap: 24px;
    }

    .footer-marca {
        flex: none;
        width: 100%;
    }

    .footer-columnas {
        flex-direction: column;
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .item-menu {
        font-size: 13px;
        padding: 13px 18px;
    }

    .banner {
        height: 140px;
    }
}
</style>