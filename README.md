MP-EMPRESAS es una aplicación de directorio de empresas multifunción que permite la navegación pública de listados de empresas al tiempo que proporciona interfaces autenticadas para propietarios y administradores de empresas. El sistema admite tres roles de usuario distintos: usuarios públicos anónimos que pueden explorar y buscar empresas, clientes autenticados que pueden administrar sus propios listados de empresas y administradores que tienen acceso CRUD completo a los usuarios, categorías y todas las empresas.

Este documento proporciona una descripción general de alto nivel de la arquitectura del sistema, los roles de usuario y la funcionalidad principal. Para obtener información detallada sobre interfaces específicas, consulte Interfaz pública, Interfaz de cliente e Interfaz de administración. Para ver la documentación de la API, consulte Referencia de la API.

Arquitectura del sistema:

MP-EMPRESAS sigue una arquitectura de aplicación web moderna con un frontend de aplicación de una sola página React que se comunica con un backend de API REST de Laravel. El sistema implementa el control de acceso basado en roles mediante tokens JWT y autenticación Laravel Sanctum.
Interfaz:

React 18 con JSX
React Router para el enrutamiento del lado del cliente
Bootstrap 5 para estilizar
Axios para solicitudes HTTP

Backend:

Laravel (framework PHP)
Laravel Sanctum para la autenticación de API
Arquitectura de API RESTful
ORM elocuente para operaciones de base de datos

Archivos clave:

Entrada principal de la aplicación: 
resources/js/App.jsx
83-89
Configuración del cliente API: 
resources/js/Config.jsx
3
Enrutamiento de backend: 
Rutas/api.php
14-36
Fuentes: 
resources/js/App.jsx
1-11
 
resources/js/Config.jsx
1-3
 
Rutas/api.php
1-11


Estructura de la API

La API de back-end se organiza en grupos lógicos según el nivel de acceso y la funcionalidad, con todos los puntos de conexión con el prefijo ./api/v1/

Grupo de puntos de conexión	Autenticación requerida	Propósito
/auth/*	Varía	Registro de usuario, inicio de sesión, cierre de sesión
/public/*	No	Navegación de empresas, listado de categorías, búsqueda
/client/*	Sí (rol de cliente)	Gestión de la empresa para clientes autenticados
/admin/*	Sí (rol de administrador)	Control administrativo total
Configuración del cliente de API

El frontend utiliza un cliente de API centralizado que maneja:Config.jsx

Configuración de URL base (http://localhost:8000/api/v1/)
Adjunto de token JWT para solicitudes autenticadas a través de encabezadosAuthorization: Bearer ${token}
Cliente HTTP basado en Axios con manejo de errores consistente
Las funciones clave del cliente de API incluyen:

Autenticación: , , getRegister()getLogin()getLogout()
Acceso público: , , , getEmpresas()searchEmpresas()CategoriaAll()CategoriaBySlug()
Operaciones del cliente: , , getEmpresaAllClient()getEmpresaStore()getEmpresaUpdateClient()
Operaciones de administración: , , con métodos CRUD completosgetUserAll()getCategoriaAll()getEmpresaAll()


![image](https://github.com/user-attachments/assets/14fbcc9c-ffcf-43ad-8164-1b0251d641e0)
![image](https://github.com/user-attachments/assets/09de2ae0-69e2-4681-ab95-cb00e60b85d8)

