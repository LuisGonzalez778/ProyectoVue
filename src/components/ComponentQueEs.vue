<template>
    <div class="pagina-info">
        <menu class="menu open-sans">
            <div class="menu-top">
                <img :src="logo" alt="Samaria Bus Route">
                <div class="acciones">
                    <router-link class="btn-registrar" to="/registrar">Registrar</router-link>
                    <router-link class="btn-ingresar" to="/login">Ingresar</router-link>
                </div>
                <button
                    class="btn-hamburguesa"
                    :class="{ activo: menuAbierto }"
                    :aria-label="menuAbierto ? 'Cerrar menú' : 'Abrir menú'"
                    :aria-expanded="menuAbierto"
                    @click="menuAbierto = !menuAbierto"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav class="navegacion" :class="{ 'nav-abierta': menuAbierto }">
                <ul class="navegacion-lista">
                    <li class="item-menu item-menu-underline"><router-link to="/">Inicio</router-link></li>
                    <li class="item-menu item-menu-underline"><router-link to="/que-es">Que es</router-link></li>
                    <li class="item-menu item-menu-underline"><router-link to="/transparencia">Transparencia</router-link></li>
                    <li class="item-menu item-menu-underline"><router-link to="/gestion-tecnica">Gestion Tecnica</router-link></li>
                    <li class="item-menu item-menu-underline"><a href="#">Atencion Usuario</a></li>
                </ul>
                <div class="acciones-mobile">
                    <router-link class="btn-registrar" to="/registrar">Registrar</router-link>
                    <router-link class="btn-ingresar" to="/login">Ingresar</router-link>
                </div>
            </nav>
        </menu>

        <header class="hero">
            <h1>¿Qué es Samaria Bus Route?</h1>
            <p>Una web/app para modernizar el transporte público de Santa Marta: pago con tarjeta virtual, rutas, horarios y disponibilidad de buses en un solo lugar.</p>
        </header>

        <main class="contenedor">

            <section class="bloque">
                <h2 class="titulo-seccion">El problema</h2>
                <div class="destacado">
                    <p>En Santa Marta el sistema de transporte público es irregular y algo obsoleto. A diferencia de otras ciudades, donde existen métodos de pago electrónicos, mejor organización y mayor responsabilidad de los conductores, aquí nada de eso ocurre. A esto se suma la desinformación general sobre posibles cambios de ruta.</p>
                    <p>La mayoría de la población colombiana ya usa métodos de pago virtuales como Nequi o Daviplata. Una ciudad con 500 años de existencia merece un transporte público digno: aunque Santa Marta no sea una metrópolis, nos merecemos un avance, así sea mínimo, frente a ciudades como Cartagena.</p>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Nuestra solución</h2>
                <p class="intro">Una plataforma web y móvil que reúne tres cosas que hoy el usuario no tiene en un solo lugar:</p>
                <div class="grid grid-3">
                    <article class="tarjeta">
                        <h3>Pago con tarjeta virtual</h3>
                        <p>Recargas y pagos electrónicos con pasarelas autorizadas en Colombia, sin depender del efectivo.</p>
                    </article>
                    <article class="tarjeta">
                        <h3>Rutas, horarios y disponibilidad</h3>
                        <p>Consulta de las rutas, los horarios y la disponibilidad de buses para planificar el viaje con información confiable.</p>
                    </article>
                    <article class="tarjeta">
                        <h3>Conductores más responsables</h3>
                        <p>Concientización sobre la importancia de la labor del conductor y de hacerla bien, para un servicio más ordenado.</p>
                    </article>
                </div>
                <p class="nota">Meta de adopción: que al menos el 30% de los usuarios pueda darle uso cada año.</p>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Beneficios</h2>
                <div class="grid grid-3">
                    <article class="tarjeta"><h3>Viajes más eficientes</h3><p>La app te ayuda a llegar a tu destino de manera más eficiente.</p></article>
                    <article class="tarjeta"><h3>Cuida el ambiente</h3><p>Fomenta el uso del transporte público, lo que es bueno para el medio ambiente.</p></article>
                    <article class="tarjeta"><h3>Menores costos</h3><p>Reduce los costos para el sistema de transporte.</p></article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Objetivos del proyecto</h2>
                <div class="grid grid-2">
                    <article class="tarjeta">
                        <h3>Objetivos específicos</h3>
                        <ul>
                            <li>Diseñar una aplicación móvil intuitiva para consultar rutas, horarios y combinaciones del transporte público.</li>
                            <li>Implementar un sistema seguro de pagos electrónicos y recargas digitales con pasarelas autorizadas.</li>
                            <li>Integrar la aplicación con el sistema oficial de transporte para ofrecer información actualizada.</li>
                            <li>Cumplir la normativa colombiana de protección de datos personales y seguridad de la información.</li>
                            <li>Fomentar el uso del transporte público reduciendo tiempos de viaje y facilitando el acceso.</li>
                        </ul>
                    </article>
                    <article class="tarjeta">
                        <h3>Metas medibles</h3>
                        <div class="grid grid-2">
                            <div class="cifra"><strong>50.000</strong><span>usuarios registrados en el primer año</span></div>
                            <div class="cifra"><strong>100.000</strong><span>transacciones de recarga o pago en el primer año</span></div>
                            <div class="cifra"><strong>99%</strong><span>de disponibilidad del sistema</span></div>
                            <div class="cifra"><strong>Fase 1</strong><span>integración con el sistema de transporte urbano</span></div>
                        </div>
                    </article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">¿A quién le interesa?</h2>
                <div class="grid grid-3">
                    <article class="tarjeta"><h3>Usuarios diarios</h3><p>La gente que usa el transporte público todos los días.</p></article>
                    <article class="tarjeta"><h3>Empresas de transporte</h3><p>Las que quieren modernizar su sistema de pago.</p></article>
                    <article class="tarjeta"><h3>Comercios locales</h3><p>Los que quieren promocionarse dentro de la aplicación.</p></article>
                </div>
                <p class="nota">Referentes: Moovit y Citymapper ya ofrecen herramientas similares y han tenido éxito, lo que demuestra que la gente necesita planificar rutas y pagar de manera fácil.</p>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Servicio actual</h2>
                <div class="grid grid-4">
                    <article class="tarjeta cifra"><strong>22</strong><span>rutas urbanas</span></article>
                    <article class="tarjeta cifra"><strong>477</strong><span>buses repartidos entre las 22 rutas</span></article>
                    <article class="tarjeta cifra"><strong>5 a.m. – 10 p.m.</strong><span>horario general de servicio</span></article>
                    <article class="tarjeta cifra"><strong>11 p.m.</strong><span>cierre de la ruta Universidad del Magdalena</span></article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Rutas del sistema</h2>
                <p class="intro">Todas las rutas parten y terminan en una de las tres terminales de transferencia: Gaira, La Lucha y Mamatoco.</p>
                <div class="rutas-grid">
                    <div v-for="ruta in rutas" :key="ruta.numero" class="ruta">
                        <div class="ruta-num">{{ ruta.numero }}</div>
                        <div>
                            <div class="ruta-nombre">{{ ruta.nombre }}</div>
                            <div class="ruta-term">Terminal {{ ruta.terminal }}</div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer class="footer open-sans">
            <div class="footer-contenido">
                <div class="footer-marca">
                    <img :src="logo" alt="Samaria Bus Route">
                    <div class="footer-direccion">
                        <p><strong>Ubicación:</strong></p>
                        <p>Santa Marta, Magdalena</p>
                        <p>Colombia</p>
                    </div>
                </div>
                <div class="footer-columnas">
                    <div class="footer-columna">
                        <h4 class="footer-titulo-col">El proyecto</h4>
                        <ul class="footer-lista">
                            <li class="footer-link"><router-link to="/que-es">Qué es</router-link></li>
                            <li class="footer-link"><router-link to="/transparencia">Transparencia</router-link></li>
                            <li class="footer-link"><router-link to="/gestion-tecnica">Gestión técnica</router-link></li>
                            <li class="footer-link"><router-link to="/noticias">Noticias</router-link></li>
                        </ul>
                    </div>
                    <div class="footer-columna">
                        <h4 class="footer-titulo-col">Servicio</h4>
                        <ul class="footer-lista">
                            <li class="footer-link">22 rutas urbanas</li>
                            <li class="footer-link">5:00 a.m. – 10:00 p.m.</li>
                            <li class="footer-link">477 buses</li>
                            <li class="footer-link">Pago con tarjeta virtual</li>
                        </ul>
                    </div>
                    <div class="footer-columna">
                        <h4 class="footer-titulo-col">Cuenta</h4>
                        <ul class="footer-lista">
                            <li class="footer-link"><router-link to="/registrar">Registrarse</router-link></li>
                            <li class="footer-link"><router-link to="/login">Ingresar</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { urlImagen } from '@/services/imagenes'
import { ref } from 'vue'

const menuAbierto = ref(false)
const logo = urlImagen('logos', 'logo1.png')

const rutas = [
    { numero: 1, nombre: 'Santa Rita', terminal: 'Gaira' },
    { numero: 2, nombre: 'Taganga', terminal: 'Mamatoco' },
    { numero: 3, nombre: 'Universitaria', terminal: 'Gaira' },
    { numero: 4, nombre: 'Vía Minca', terminal: 'La Lucha' },
    { numero: 5, nombre: 'Ruta Calle 19', terminal: 'Mamatoco' },
    { numero: 6, nombre: 'Ruta del Ferrocarril', terminal: 'La Lucha' },
    { numero: 7, nombre: 'Bahía Concha', terminal: 'Gaira' },
    { numero: 8, nombre: 'Ruta El Parque', terminal: 'La Lucha' },
    { numero: 9, nombre: 'San Pablo', terminal: 'Mamatoco' },
    { numero: 10, nombre: 'Libertador', terminal: 'Mamatoco' },
    { numero: 11, nombre: '20 de Julio', terminal: 'La Lucha' },
    { numero: 12, nombre: 'La 30', terminal: 'Mamatoco' },
    { numero: 13, nombre: 'Chimila', terminal: 'Mamatoco' },
    { numero: 14, nombre: 'Gaira', terminal: 'La Lucha' },
    { numero: 15, nombre: 'Rodrigo Galván de Bastidas', terminal: 'La Lucha' },
    { numero: 16, nombre: 'Pozos Colorados', terminal: 'Gaira' },
    { numero: 17, nombre: 'Estudiantes', terminal: 'Mamatoco' },
    { numero: 18, nombre: 'La Bahía', terminal: 'Gaira' },
    { numero: 19, nombre: 'Ciudad Equidad', terminal: 'Mamatoco' },
    { numero: 20, nombre: 'Rodadero', terminal: 'La Lucha' },
    { numero: 21, nombre: 'Ruta del Río', terminal: 'Mamatoco' },
    { numero: 22, nombre: 'Universidad del Magdalena', terminal: 'La Lucha' }
]
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


.item-menu a.router-link-exact-active { color: #00FFAE; }

@media (max-width: 1024px) {
    .menu img { height: 50px; width: 50px; margin: 10px 16px 0 16px; }
    .acciones { top: 10px; right: 16px; }
    .item-menu { padding: 10px 12px; font-size: 13px; }
}
@media (max-width: 768px) {
    .menu img { height: 44px; width: 44px; margin: 10px 12px; }
    .btn-hamburguesa { display: flex; }
    .acciones { position: static; transform: none; display: none; }
    .navegacion { display: none; width: 100%; padding: 0; border-top: 1px solid rgba(255,255,255,0.2); background-color: #0078d4; }
    .navegacion.nav-abierta { display: flex; flex-direction: column; }
    .navegacion-lista { flex-direction: column; width: 100%; }
    .acciones-mobile { display: flex; gap: 10px; padding: 14px 20px; border-top: 1px solid rgba(255,255,255,0.15); }
    .item-menu { padding: 14px 20px; font-size: 14px; justify-content: flex-start; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.1); white-space: normal; }
    .item-menu:hover { background-color: rgba(255,255,255,0.1); color: #00FFAE; }
}
@media (max-width: 480px) {
    .item-menu { font-size: 13px; padding: 13px 18px; }
}

.pagina-info {
    font-family: "Open Sans", sans-serif; color: #2c3e50; text-align: left; background: #f6fafd;
}

.hero {
    min-height: 260px; padding: 56px 24px; display: flex; flex-direction: column;
    justify-content: center; align-items: center; text-align: center; color: #fff;
    background: linear-gradient(130deg, #073b66, #0879b9 60%, #18a6ba);
}

.hero h1 {
    font-size: clamp(2rem, 3.5vw, 3.4rem); letter-spacing: .08em; line-height: 1.05;
    margin: 0 0 16px; text-transform: uppercase; text-shadow: 0 10px 24px rgba(0,0,0,.35);
}

.hero p {
    font-size: clamp(1rem, 1.6vw, 1.4rem); font-weight: 400; max-width: 860px;
    margin: 0 auto; color: #e8f6ff; line-height: 1.5;
}

.contenedor {
    width: 100%; max-width: 1200px; margin: 0 auto; padding: 36px 24px 56px;
}

.bloque {
    margin-bottom: 44px;
}

.titulo-seccion {
    font-size: 1.25rem; font-weight: 700; color: #12436b; margin: 0 0 8px;
    padding-bottom: 6px; border-bottom: 3px solid #0CC200; display: inline-block;
}

.intro {
    font-size: 15px; line-height: 1.7; color: #333; margin: 12px 0 20px; max-width: 900px;
}

.grid {
    display: grid; gap: 20px;
}

.grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tarjeta {
    background: #fff; border: 1px solid #dce7f1; border-radius: 14px; padding: 22px;
    box-shadow: 0 10px 28px rgba(22, 56, 88, .08); height: 100%;
}

.tarjeta h3 {
    margin: 0 0 10px; font-size: 1.05rem; color: #12436b; line-height: 1.35;
}

.tarjeta p {
    margin: 0 0 8px; font-size: 14px; line-height: 1.65; color: #333;
}

.tarjeta ul {
    margin: 0; padding-left: 18px;
}

.tarjeta li {
    font-size: 14px; line-height: 1.65; color: #333; margin-bottom: 4px;
}

.destacado {
    background: #fff; border-left: 6px solid #0092FF; border-radius: 10px; padding: 22px 26px;
    box-shadow: 0 10px 28px rgba(22, 56, 88, .08); font-size: 15px; line-height: 1.75;
}

.destacado p {
    margin: 0 0 10px;
}

.destacado p:last-child {
    margin-bottom: 0;
}

.cifra {
    text-align: center;
}

.cifra strong {
    display: block; font-size: 2.1rem; color: #0092FF; line-height: 1.1; margin-bottom: 6px;
}

.cifra span {
    font-size: 13.5px; color: #4a4a4a; line-height: 1.4;
}

table {
    width: 100%; border-collapse: collapse; font-size: 14px;
}

th {
    background: #0092FF; color: #fff; text-align: left; padding: 12px 16px; font-weight: 600; white-space: nowrap;
}

td {
    padding: 12px 16px; border-top: 1px solid #e8eef4; color: #333; vertical-align: top; line-height: 1.55;
}

tbody tr:nth-child(even) {
    background: #f6fafd;
}

.rutas-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px;
}

.ruta {
    display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid #dce7f1;
    border-radius: 12px; padding: 12px 14px; box-shadow: 0 4px 14px rgba(22,56,88,.06);
}

.ruta-num {
    flex: 0 0 38px; height: 38px; border-radius: 50%; background: #0092FF; color: #fff;
    display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;
}

.ruta-nombre {
    font-size: 14px; font-weight: 600; color: #12436b; line-height: 1.25;
}

.ruta-term {
    font-size: 12px; color: #5b6b79; margin-top: 2px;
}

.nota {
    font-size: 13px; color: #5b6b79; margin-top: 12px; line-height: 1.55;
}

@media (max-width: 1024px) {
    .grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 768px) {
    .hero { min-height: 200px; padding: 36px 16px; }
    .contenedor { padding: 24px 14px 40px; }
    .grid-2,
    .grid-3,
    .grid-4 { grid-template-columns: 1fr; }
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


.footer-link a { color: inherit; text-decoration: none; }
.footer-link a:hover { color: #8b8b8b; }

@media (max-width: 1024px) {
    .footer-contenido { gap: 28px; }
    .footer-marca { flex: 0 0 180px; }
    .footer-columnas { gap: 24px; }
}
@media (max-width: 768px) {
    .footer { padding: 28px 16px; }
    .footer-contenido { flex-direction: column; gap: 24px; }
    .footer-marca { flex: none; width: 100%; }
    .footer-columnas { flex-direction: column; gap: 20px; }
}
</style>
