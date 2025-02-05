import React from 'react'

const NotFound = () => {
  return (
    <body class="bg-light d-flex justify-content-center align-items-center vh-100">
        <div class="text-center bg-white p-5 rounded-3 shadow">
            <h1 class="display-1 fw-bold text-danger">404</h1>
            <p class="fs-3 text-secondary">¡Ups! Página no encontrada.</p>
            <p class="lead text-muted mb-4">
                Parece que la página que estás buscando no existe o ha sido movida.
            </p>
            <a href="/" class="btn btn-primary btn-lg">Volver al Inicio</a>
        </div>

    </body>
  )
}

export default NotFound