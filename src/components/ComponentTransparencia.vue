<template>
    <div class="pagina-info">
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
                    <li class="item-menu item-menu-underline"><router-link to="/atencion-usuario">Atencion Usuario</router-link></li>
                </ul>
                <div class="acciones-mobile">
                    <router-link class="btn-registrar" to="/registrar">Registrar</router-link>
                    <router-link class="btn-ingresar" to="/login">Ingresar</router-link>
                </div>
            </nav>
        </menu>

        <header class="hero">
            <h1>Transparencia</h1>
            <p>Cómo se financia el proyecto, qué tan viable es, qué leyes cumple y cuáles son las metas con las que puedes medirnos.</p>
        </header>

        <main class="contenedor">

            <section class="bloque">
                <h2 class="titulo-seccion">Inversión estimada</h2>
                <div class="grid grid-3">
                    <article class="tarjeta cifra"><strong>$70 millones</strong><span>COP, inversión máxima requerida para el proyecto</span></article>
                    <article class="tarjeta cifra"><strong>99%</strong><span>disponibilidad del sistema que nos comprometemos a mantener</span></article>
                    <article class="tarjeta cifra"><strong>30%</strong><span>de los usuarios usando el sistema cada año (meta de adopción)</span></article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Estudio de viabilidad</h2>
                <p class="intro">Evaluamos el proyecto desde cuatro ángulos. Publicamos el resultado completo, incluso donde los resultados son bajos.</p>
                <div class="tabla-scroll">
                    <table>
                        <thead>
                            <tr><th>Tipo</th><th>Qué se evaluó</th><th>Resultado</th></tr>
                        </thead>
                        <tbody>
                            <tr v-for="fila in viabilidad" :key="fila.tipo">
                                <td><strong>{{ fila.tipo }}</strong></td>
                                <td>
                                    <ul>
                                        <li v-for="item in fila.items" :key="item">{{ item }}</li>
                                    </ul>
                                </td>
                                <td><span class="etiqueta" :class="fila.nivel">{{ fila.resultado }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Cómo se sostiene el proyecto</h2>
                <div class="grid grid-4">
                    <article class="tarjeta"><h3>Comisiones</h3><p>Una pequeña comisión por cada recarga o pago realizado en la app.</p></article>
                    <article class="tarjeta"><h3>Alianzas</h3><p>Empresas de transporte que pagan por promocionarse.</p></article>
                    <article class="tarjeta"><h3>Publicidad</h3><p>Venta de espacios publicitarios dentro de la aplicación.</p></article>
                    <article class="tarjeta"><h3>Datos anonimizados</h3><p>Venta de datos anonimizados a entidades gubernamentales o de transporte.</p></article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Marco legal que cumplimos</h2>
                <div class="grid grid-2">
                    <article class="tarjeta">
                        <h3>Protección de datos personales</h3>
                        <ul>
                            <li><strong>Artículo 15 de la Constitución (Habeas Data):</strong> derecho a conocer, actualizar y rectificar la información que se tenga sobre ti.</li>
                            <li><strong>Ley 1581 de 2012 y Decreto 1377 de 2013:</strong> protección de datos personales.</li>
                        </ul>
                    </article>
                    <article class="tarjeta">
                        <h3>Transporte y tecnología</h3>
                        <ul>
                            <li><strong>Ley 105 de 1993 y Ley 336 de 1996:</strong> transporte público.</li>
                            <li><strong>Ley 1341 de 2009 (Ley TIC):</strong> tecnologías de la información y las comunicaciones.</li>
                            <li><strong>Pagos:</strong> uso de pasarelas vigiladas por la Superintendencia Financiera de Colombia.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Quiénes participan</h2>
                <div class="grid grid-3">
                    <article v-for="actor in actores" :key="actor.nombre" class="tarjeta">
                        <h3>{{ actor.nombre }}</h3>
                        <p>{{ actor.descripcion }}</p>
                    </article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Metas con las que puedes medirnos</h2>
                <div class="grid grid-4">
                    <article class="tarjeta cifra"><strong>50.000</strong><span>usuarios registrados durante el primer año</span></article>
                    <article class="tarjeta cifra"><strong>100.000</strong><span>transacciones de recarga o pago en el primer año</span></article>
                    <article class="tarjeta cifra"><strong>99%</strong><span>de disponibilidad del sistema</span></article>
                    <article class="tarjeta cifra"><strong>Fase inicial</strong><span>integración con el sistema de transporte urbano</span></article>
                </div>
            </section>

            <section class="bloque">
                <h2 class="titulo-seccion">Información del servicio</h2>
                <div class="destacado">
                    <p><strong>Horario:</strong> de 5:00 a.m. a 10:00 p.m. La ruta Universidad del Magdalena opera hasta las 11:00 p.m.</p>
                    <p><strong>Flota:</strong> 477 buses repartidos entre las 22 rutas del sistema.</p>
                    <p><strong>Terminales de transferencia:</strong> Gaira, La Lucha y Mamatoco.</p>
                </div>
            </section>

        </main>

        <footer class="footer open-sans">
            <div class="footer-contenido">
                <div class="footer-marca">
                    <img src="@/assets/logo1.png" alt="Samaria Bus Route">
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
import { ref } from 'vue'

const menuAbierto = ref(false)

const viabilidad = [
    {
        tipo: 'Económica',
        items: ['Se requieren como máximo 70 millones de pesos.'],
        resultado: 'Sin viabilidad por ahora',
        nivel: 'nula'
    },
    {
        tipo: 'Técnica',
        items: [
            'Integración API con el sistema de recaudo',
            'Motor de planificación multimodal',
            'Infraestructura en la nube escalable',
            'Sistema antifraude',
            'Encriptación y cumplimiento de la Ley 1581 de 2012',
            'Integración con pasarela o entidad vigilada por la Superintendencia Financiera'
        ],
        resultado: 'Alta',
        nivel: 'alta'
    },
    {
        tipo: 'Operativa',
        items: [
            'Acceso a datos oficiales',
            'Voluntad política',
            'Interoperabilidad con el sistema actual',
            'Relación con los concesionarios'
        ],
        resultado: 'Baja',
        nivel: 'baja'
    },
    {
        tipo: 'Legal',
        items: ['Habeas Data, protección de datos, leyes de transporte público, Ley TIC y pasarelas vigiladas.'],
        resultado: 'Viable',
        nivel: 'alta'
    }
]

const actores = [
    { nombre: 'Usuario del transporte público', descripcion: 'Usa la app para planificar rutas, recargar su tarjeta y pagar el transporte.' },
    { nombre: 'Empresa de transporte', descripcion: 'Integra su sistema de recaudo y rutas con la aplicación.' },
    { nombre: 'Administrador del sistema', descripcion: 'Gestiona la app, los usuarios, los pagos, la publicidad y los datos.' },
    { nombre: 'Entidad financiera', descripcion: 'Sistema externo que procesa los pagos y las recargas.' },
    { nombre: 'Gobierno o entidad de transporte', descripcion: 'Proporciona los datos oficiales de rutas, horarios y del sistema de transporte.' },
    { nombre: 'Comercios y anunciantes', descripcion: 'Empresas que pagan por promocionarse dentro de la aplicación.' }
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

.etiqueta {
    display: inline-block; padding: 3px 12px; border-radius: 999px; font-size: 12px;
    font-weight: 700; letter-spacing: .03em; color: #fff;
}

.etiqueta.alta {
    background: #0CC200;
}

.etiqueta.baja {
    background: #d9822b;
}

.etiqueta.nula {
    background: #c0392b;
}

.tabla-scroll {
    overflow-x: auto; background: #fff; border-radius: 14px; border: 1px solid #dce7f1; box-shadow: 0 10px 28px rgba(22,56,88,.08);
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