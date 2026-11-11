const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const usuarios = []

app.get('/health', (req, res) => {
  res.json({ ok: true, message: 'API funcionando' })
})

app.get('/usuarios', (req, res) => {
  const { correo } = req.query

  if (!correo) {
    return res.json(usuarios)
  }

  const resultado = usuarios.filter(
    (usuario) => usuario.correo.toLowerCase() === String(correo).toLowerCase()
  )

  return res.json(resultado)
})

app.post('/usuarios', (req, res) => {
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
    contrasena: String(contrasena)
  }

  usuarios.push(nuevoUsuario)

  return res.status(201).json({
    ok: true,
    message: 'Usuario registrado correctamente',
    usuario: {
      id: nuevoUsuario.id,
      correo: nuevoUsuario.correo,
      nombre: nuevoUsuario.nombre
    }
  })
})

app.post('/login', (req, res) => {
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

  if (!usuarioEncontrado || usuarioEncontrado.contrasena !== String(contrasena)) {
    return res.status(401).json({
      ok: false,
      message: 'Usuario o contraseña incorrectos'
    })
  }

  return res.json({
    ok: true,
    usuario: {
      id: usuarioEncontrado.id,
      correo: usuarioEncontrado.correo,
      nombre: usuarioEncontrado.nombre
    }
  })
})

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`)
})
