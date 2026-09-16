<template>
<body class="noticias-page">
    <menu class="menu open-sans">
        <div class="menu-top">
            <img src="@/assets/logo1.png" alt="Logo">
            <div class="acciones">
                <button class="btn-registrar"><router-link to="/registrar">Registrar</router-link></button>
                <button class="btn-ingresar"><router-link to="/login">Ingresar</router-link></button>
            </div>
            <button class="btn-hamburguesa" id="btnHamburguesa" aria-label="Abrir menú" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav class="navegacion" id="navegacion">
            <li class="item-menu item-menu-underline"><router-link to="/">Inicio</router-link></li>
            <li class="item-menu item-menu-underline">Que es</li>
            <li class="item-menu item-menu-underline">Transparencia</li>
            <li class="item-menu item-menu-underline">Gestion Tecnica</li>
            <li class="item-menu item-menu-underline"><a href="atencionUsuario.html">Atencion Usuario</a></li>
            <div class="acciones-mobile">
                <button class="btn-registrar"><router-link to="/registrar">Registrar</router-link></button>
                <button class="btn-ingresar"><router-link to="/login">Ingresar</router-link></button>
            </div>
        </nav>
    </menu>

    <div class="banner-fila noticias-banner">
        <h1>Noticias del Sistema de Transporte Público</h1>
        <h2>Encuentra las últimas novedades sobre las nuevas rutas, las mejoras ambientales y los proyectos de infraestructura que transforman la movilidad urbana.</h2>
    </div>

    <main class="contenido-principal open-sans">
        <section class="seccion-noticias">
            <h2 class="titulo-seccion">Últimas noticias</h2>
            <div class="grid-noticias">
                <article class="noticia">
                    <!-- HACERLE V-FOR A ESTAS IMAGENES -->
                    <img src="imagenes/bus1.jpeg" alt="Buses eléctricos" class="img-noticia">
                    <h3>Inauguración de la nueva línea eléctrica urbana</h3>
                    <p class="texto-noticia">El sistema de transporte presentó hoy la nueva línea de buses eléctricos que cubrirá 12 rutas principales de la ciudad, reduciendo las emisiones de CO2 en un 45% y mejorando la frecuencia en horas pico.</p>
                </article>
                <article class="noticia">
                    <img src="imagenes/buselectrico.jpg" alt="Bus eléctrico" class="img-noticia">
                    <h3>Tarifa integrada beneficiará a estudiantes y adultos mayores</h3>
                    <p class="texto-noticia">A partir del próximo mes, el plan de tarifa integrada permitirá transbordos gratuitos entre buses, metro y teleférico durante 90 minutos para pasajeros con carnés estudiantiles y de tercera edad.</p>
                </article>
                <article class="noticia">
                    <img src="imagenes/buses.jpg" alt="Nuevas estaciones" class="img-noticia">
                    <h3>15 nuevas estaciones con accesibilidad total</h3>
                    <p class="texto-noticia">Las nuevas estaciones incluyen ascensores, rampas, señalización táctil para personas con discapacidad visual y zonas de cicloparqueadero, optimizando el acceso para todos los ciudadanos.</p>
                </article>
                <article class="noticia">
                    <img src="imagenes/busetas.jpg" alt="Control digital" class="img-noticia">
                    <h3>Centro de control digital en tiempo real</h3>
                    <p class="texto-noticia">Se abrió un nuevo centro de monitoreo que permite a los operadores gestionar la flota en tiempo real, reducir retrasos y alertar sobre cambios en el servicio durante contingencias climatológicas.</p>
                </article>
                <article class="noticia">
                    <img src="imagenes/troll.png" alt="Movilidad sostenible" class="img-noticia">
                    <h3>Campaña ciudadana por una movilidad sostenible</h3>
                    <p class="texto-noticia">El programa "Movilidad Responsable" invita a los usuarios a participar en jornadas de educación vial, reducir el uso de autos particulares y aprovechar el transporte público integrado.</p>
                </article>
                <!-- HACERLE V-FOR A ESTAS IMAGENES -->
            </div>
        </section>

        <aside class="sidebar">
            <h3>Área de consulta</h3>
            <p>Descarga la app oficial para ver rutas, horarios y alertas en tiempo real.</p>
            <p>Participa en las audiencias públicas y consulta tus derechos como usuario del sistema.</p>
            <img src="img/trabajo.png" alt="Transporte" class="img-sidebar">
        </aside>
    </main>

    <footer class="footer open-sans">
        <div class="footer-contenido">
            <div class="footer-marca">
                <h2 class="footer-logo">Logo</h2>
                <div class="footer-direccion">
                    <p><strong>Address:</strong></p>
                    <p>123 Main Street, City</p>
                    <p>State Province, Country</p>
                </div>
                <div class="footer-redes">
                    <i class="fa fa-instagram"></i>
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
            <div class="footer-columnas">
                <div class="footer-columna">
                    <h4 class="footer-titulo-col">Column one</h4>
                    <li class="footer-link">Link one</li>
                    <li class="footer-link">Link two</li>
                    <li class="footer-link">Link three</li>
                    <li class="footer-link">Link four</li>
                </div>
                <div class="footer-columna">
                    <h4 class="footer-titulo-col">Column two</h4>
                    <li class="footer-link">Link five</li>
                    <li class="footer-link">Link six</li>
                    <li class="footer-link">Link seven</li>
                    <li class="footer-link">Link eight</li>
                </div>
                <div class="footer-columna">
                    <h4 class="footer-titulo-col">Column three</h4>
                    <li class="footer-link">Link nine</li>
                    <li class="footer-link">Link ten</li>
                    <li class="footer-link">Link eleven</li>
                    <li class="footer-link">Link twelve</li>
                </div>
            </div>
        </div>
    </footer>
</body>
</template>

<script>
export default {

}
</script>

<style>
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
    padding: 7px 18px;
    background: #ffffff;
    border: 1.5px solid #ffffff;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
}

.btn-registrar:hover {
    background-color: #0CC200;
    border: #0CC200;
    color: #fff;
}

.btn-ingresar {
    padding: 7px 18px;
    background: #ffffff;
    border: 1.5px solid #ffffff;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
}

.btn-ingresar:hover {
    background-color: #0CC200;
    border: #0CC200;
}

.navegacion {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    gap: 0;
    border-top: 1px solid #eee;
    padding: 0 24px;
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
    transition: left 0.5s ease-in-out;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 18px;
}


.img-noticia {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: 3px;
    margin-bottom: 10px;
}

.noticia {
    background-color: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
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
    margin: 0 18px 18px;
    font-size: 14px;
    color: #4a4a4a;
}

.noticias-page .contenido-principal {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 30px;
    padding: 38px 32px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.10);
}

.noticias-page .sidebar {
    background: #ffffff;
    padding: 24px;
    border-radius: 22px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
}

.noticias-page .sidebar h3 {
    margin-bottom: 18px;
}

.noticias-page .titulo-seccion {
    margin-bottom: 26px;
}

.noticias-page .grid-noticias {
    gap: 26px;
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
}

.btn-ver-mas:hover {
    background-color: #0CC200;
    border: #0CC200;
}

.form-quejas {
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 100%;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 14px;
    color: #1a1a1a;
    font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid #0CC200;
    border-radius: 6px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #1a1a1a;
    background-color: #f9fdf9;
    outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: #0092FF;
}

.mensaje-warning,
.mensaje-success {
    width: 100%;
    padding: 12px 14px;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.5;
    display: none;
}

.mensaje-warning {
    background-color: rgba(255, 90, 90, 0.15);
    color: #800;
    border: 1px solid rgba(255, 90, 90, 0.45);
}

.mensaje-success {
    background-color: rgba(153, 255, 153, 0.25);
    color: #0a5e0a;
    border: 1px solid rgba(0, 204, 0, 0.4);
}

.atencion-usuario {
    background: url('imagenes/bus1.jpeg') center/cover no-repeat fixed;
}

.atencion-usuario .banner-fila.noticias-banner {
    background: rgba(0, 0, 0, 0.38);
    color: #fff;
    min-height: 260px;
    padding: 60px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.atencion-usuario .banner-fila.noticias-banner h1,
.atencion-usuario .banner-fila.noticias-banner h2 {
    color: #ffffff;
}

.noticias-page .banner-fila.noticias-banner h1 {
    font-size: clamp(2.2rem, 3.5vw, 3.6rem);
    letter-spacing: 0.08em;
    line-height: 1.05;
    margin-bottom: 16px;
    text-transform: uppercase;
    text-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
}

.noticias-page .banner-fila.noticias-banner h2 {
    font-size: clamp(1.05rem, 1.8vw, 1.55rem);
    font-weight: 400;
    max-width: 860px;
    margin: 0 auto;
    color: #e8f6ff;
    text-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.atencion-usuario .contenido-principal {
    justify-content: center;
    padding-top: 40px;
}

.atencion-usuario .form-quejas {
    max-width: 760px;
    width: 100%;
    margin: 0 auto;
}

.atencion-usuario .seccion-noticias {
    width: 100%;
    max-width: 760px;
}

.atencion-usuario .sidebar {
    width: 100%;
    max-width: 360px;
}

.seccion-anuncios {
    margin-bottom: 36px;
}

.anuncio {
    margin-bottom: 28px;
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
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
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
        flex-direction: column;
        width: 100%;
        padding: 0;
        border-top: 1px solid rgba(255,255,255,0.2);
        background-color: #0078d4;
    }

    .navegacion.nav-abierta {
        display: flex;
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
        display: none;
    }

    .sidebar-texto {
        display: none;
    }

    .grid-noticias {
        grid-template-columns: 1fr;
        gap: 20px;
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