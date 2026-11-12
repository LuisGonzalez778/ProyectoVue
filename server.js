const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

// En produccion define JWT_SECRET como variable de entorno (cadena larga y aleatoria)
const JWT_SECRET = process.env.JWT_SECRET || 'clave-solo-para-desarrollo-cambiala'
const JWT_EXPIRA = '2h'

if (!process.env.JWT_SECRET) {
  console.warn('AVISO: usando una clave JWT de desarrollo. Define JWT_SECRET antes de publicar.')
}

app.use(cors())
app.use(express.json())

const usuarios = []

// ---------- Imagenes ----------
// Cada subcarpeta de /imagenes-api es una categoria (slides, sidebar, ...).
// Para agregar una imagen basta con copiarla a la carpeta; no hay que tocar codigo.
const CARPETA_IMAGENES = path.join(__dirname, 'imagenes-api')
const EXTENSIONES = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']

// Sirve los archivos: http://localhost:3000/imagenes/slides/01-bus.jpeg
app.use('/imagenes', express.static(CARPETA_IMAGENES))

// "02-bus-electrico.jpg" -> "bus electrico" (texto alternativo de la imagen)
function textoAlternativo(archivo) {
  return path.parse(archivo).name
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
}

function listarImagenes(categoria, req) {
  const carpeta = path.join(CARPETA_IMAGENES, categoria)

  return fs.readdirSync(carpeta)
    .filter((archivo) => EXTENSIONES.includes(path.extname(archivo).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((archivo, indice) => ({
      id: indice + 1,
      nombre: archivo,
      alt: textoAlternativo(archivo),
      url: `${req.protocol}://${req.get('host')}/imagenes/${categoria}/${encodeURIComponent(archivo)}`
    }))
}

// GET /galeria -> categorias disponibles
app.get('/galeria', (req, res) => {
  const categorias = fs.existsSync(CARPETA_IMAGENES)
    ? fs.readdirSync(CARPETA_IMAGENES, { withFileTypes: true })
      .filter((entrada) => entrada.isDirectory())
      .map((entrada) => entrada.name)
    : []

  res.json({ ok: true, categorias })
})

// GET /galeria/slides -> imagenes de esa categoria
app.get('/galeria/:categoria', (req, res) => {
  const { categoria } = req.params

  // Solo letras, numeros, guion y guion bajo: evita rutas como ../../
  const carpeta = path.join(CARPETA_IMAGENES, categoria)
  if (!/^[\w-]+$/.test(categoria) || !fs.existsSync(carpeta)) {
    return res.status(404).json({ ok: false, message: 'Categoria no encontrada' })
  }

  const imagenes = listarImagenes(categoria, req)
  return res.json({ ok: true, categoria, total: imagenes.length, imagenes })
})

function usuarioPublico(usuario) {
  return { id: usuario.id, correo: usuario.correo, nombre: usuario.nombre }
}

// Middleware: exige un token valido en el encabezado Authorization: Bearer <token>
function verificarToken(req, res, next) {
  const encabezado = req.headers.authorization || ''
  const token = encabezado.startsWith('Bearer ') ? encabezado.slice(7) : null

  if (!token) {
    return res.status(401).json({ ok: false, message: 'Se requiere iniciar sesion' })
  }

  try {
    req.usuario = jwt.verify(token, JWT_SECRET)
    return next()
  } catch (error) {
    const vencido = error.name === 'TokenExpiredError'
    return res.status(401).json({
      ok: false,
      message: vencido ? 'La sesion ha expirado' : 'Token invalido'
    })
  }
}

app.get('/health', (req, res) => {
  res.json({ ok: true, message: 'API funcionando' })
})

// Ruta protegida: lista de usuarios (sin contrasenas)
app.get('/usuarios', verificarToken, (req, res) => {
  const { correo } = req.query

  if (!correo) {
    return res.json(usuarios.map(usuarioPublico))
  }

  const resultado = usuarios
    .filter((usuario) => usuario.correo.toLowerCase() === String(correo).toLowerCase())
    .map(usuarioPublico)

  return res.json(resultado)
})

// Ruta protegida: datos del usuario autenticado
app.get('/perfil', verificarToken, (req, res) => {
  const usuario = usuarios.find((registro) => registro.id === req.usuario.id)

  if (!usuario) {
    return res.status(404).json({ ok: false, message: 'Usuario no encontrado' })
  }

  return res.json({ ok: true, usuario: usuarioPublico(usuario) })
})

app.post('/usuarios', async (req, res) => {
  const { correo, nombre, contrasena } = req.body || {}

  if (!correo || !nombre || !contrasena) {
    return res.status(400).json({
      ok: false,
      message: 'Faltan datos obligatorios: correo, nombre y contrasena'
    })
  }

  const correoNormalizado = String(correo).trim().toLowerCase()
  const usuarioExiste = usuarios.some(
    (usuario) => usuario.correo.toLowerCase() === correoNormalizado
  )

  if (usuarioExiste) {
    return res.status(409).json({
      ok: false,
      message: 'Ya existe un usuario con ese correo'
    })
  }

  const nuevoUsuario = {
    id: Date.now(),
    correo: correoNormalizado,
    nombre: String(nombre).trim(),
    contrasena: await bcrypt.hash(String(contrasena), 10)
  }

  usuarios.push(nuevoUsuario)

  return res.status(201).json({
    ok: true,
    message: 'Usuario registrado correctamente',
    usuario: usuarioPublico(nuevoUsuario)
  })
})

app.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body || {}

  if (!usuario || !contrasena) {
    return res.status(400).json({
      ok: false,
      message: 'Se requiere usuario o correo y contraseña'
    })
  }

  const identificador = String(usuario).trim().toLowerCase()
  const usuarioEncontrado = usuarios.find(
    (registro) => registro.correo.toLowerCase() === identificador
      || registro.nombre.toLowerCase() === identificador
  )

  const contrasenaValida = usuarioEncontrado
    && await bcrypt.compare(String(contrasena), usuarioEncontrado.contrasena)

  if (!contrasenaValida) {
    return res.status(401).json({
      ok: false,
      message: 'Usuario o contraseña incorrectos'
    })
  }

  const token = jwt.sign(
    { id: usuarioEncontrado.id, correo: usuarioEncontrado.correo },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRA }
  )

  return res.json({
    ok: true,
    token,
    usuario: usuarioPublico(usuarioEncontrado)
  })
})

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`)
})