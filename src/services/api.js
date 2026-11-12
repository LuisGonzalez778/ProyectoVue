import axios from 'axios'
import { obtenerToken, cerrarSesion } from '@/services/auth'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

// Envia el token en cada peticion si hay una sesion iniciada
api.interceptors.request.use((config) => {
  const token = obtenerToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Si el servidor rechaza el token (vencido o invalido), se cierra la sesion
api.interceptors.response.use(
  (respuesta) => respuesta,
  (error) => {
    if (error.response?.status === 401 && obtenerToken()) {
      cerrarSesion()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
