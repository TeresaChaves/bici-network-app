# Prueba técnica Front

Objetivo
Desarrollar una página que muestre las redes de bicicletas de España y seleccionando una de ellas
poder ver los puntos que indique el grado de disponibilidad de bicicletas (bajo, medio y alto).

## Tecnología

- [x] Desarrollar una prueba en React con Vite y Typescript
- [x] Apoyarse en la librería de Tailwind (y, si se quiere, usar componentes predefinidos como shadcn). La
      interfaz tienen que ser operativa, no estamos poniendo a prueba el diseño, pero la información tiene
      que verse bien y poder utilizarse desde Desktop.
- [x] Utilizar la librería de TanSack Query para realizar las peticiones HTTP.
- [x] Utilizar patrones container-presenter y diferenciar bien las capas de acceso a los datos, controladores
      y presentación.
- [x] Aplicar buenas prácticas de código.

## Información para la prueba técnica

Utilizar el API expuesto por
https://api.citybik.es/v2/
Y generar dos listados,
El primer listado serían los puntos “networks” de España
https://api.citybik.es/v2/networks

- [x] Donde se tendrá que mostrar el nombre, la compañía, el sistema de la reserva y la ciudad en la que
      está la red de Bicicletas.
      Una vez elegida la red de bicicletas mostrar el listado de puntos/estaciones disponible de esa red en
      un segundo listado (p.e. https://api.citybik.es//v2/networks/albabici).
- [x] Se debe indicar el nombre del punto y la localización de este punto, junto con un enlace a google
      maps.
- [x] La fecha relativa de la ultima actualización (hace 10min, hace 4 días)
- [x] Un indicador de disponibilidad de bicicletas en la estación (bajo, medio y alto)

## Extra

- [x] Preparar toda la aplicación para que sea multi-idioma gestionando las traducciones en archivos .json
      con i18next
- [x] Optimizar la comunicación HTTP con el API
