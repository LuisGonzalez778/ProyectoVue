import api from '@/services/api'

// URL de una imagen concreta guardada en la API.
// Ejemplo: urlImagen('logos', 'logo1.png') -> http://localhost:3000/imagenes/logos/logo1.png
export function urlImagen(categoria, archivo) {
  return `${api.defaults.baseURL}/imagenes/${categoria}/${encodeURIComponent(archivo)}`
}

// Pide a la API todas las imagenes de una categoria (por ejemplo 'slides' o 'sidebar')
// y las devuelve como [{ src, alt }], listas para recorrer con v-for.
export async function obtenerImagenes(categoria) {
  const respuesta = await api.get(`/galeria/${categoria}`)
  return respuesta.data.imagenes.map((imagen) => ({
    src: imagen.url,
    alt: imagen.alt
  }))
}
