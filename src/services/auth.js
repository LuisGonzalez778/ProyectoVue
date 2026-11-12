const CLAVE_TOKEN = 'token'
const CLAVE_USUARIO = 'usuarioAutenticado'

export function guardarSesion(token, usuario) {
  sessionStorage.setItem(CLAVE_TOKEN, token)
  sessionStorage.setItem(CLAVE_USUARIO, JSON.stringify(usuario))
}

export function obtenerToken() {
  return sessionStorage.getItem(CLAVE_TOKEN)
}

export function obtenerUsuario() {
  const guardado = sessionStorage.getItem(CLAVE_USUARIO)
  return guardado ? JSON.parse(guardado) : null
}

export function estaAutenticado() {
  return Boolean(obtenerToken())
}

export function cerrarSesion() {
  sessionStorage.removeItem(CLAVE_TOKEN)
  sessionStorage.removeItem(CLAVE_USUARIO)
}
