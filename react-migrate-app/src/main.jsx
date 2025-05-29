import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './migracion.css'
// importamos en proveedor del Router --> RouterProvider (componente) viene desde el paquete React Router DOM
import { RouterProvider } from 'react-router-dom'
// importamos el router creado en routes.jsx
import { router } from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* se incorpora el proveeedor del Router en el método render */}
    <RouterProvider router={router} >
    </RouterProvider>
  </StrictMode>,
)
