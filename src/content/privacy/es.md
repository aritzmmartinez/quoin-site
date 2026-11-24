---
updated: 2026-11-24
summary: Quoin no recoge tus datos. No hay cuenta, analítica ni publicidad, y tu cartera no se envía a ningún servidor de Quoin, porque no existe.
summaryMuted: Lo que sigue explica las pocas conexiones que sí hace y por qué.
---

## Quién es el responsable

Aritz Martínez, desarrollador de Quoin. Para cualquier cuestión sobre privacidad, escríbeme a [quoin@aritzmmartinez.dev](mailto:quoin@aritzmmartinez.dev).

Esta política cubre la app Quoin para Android, la versión de ordenador y este sitio web.

## La app móvil

### Tus datos se quedan en el móvil

Las operaciones que importas, tus posiciones y tus ajustes se guardan en una base de datos dentro de la app. Los ficheros CSV de tu broker se leen en el propio móvil y no se envían a ningún sitio. La vinculación con tu ordenador se guarda en el almacenamiento cifrado de Android.

### Lo que sale del móvil

La app se conecta directamente a estos dos destinos, sin pasar por ningún servidor de Quoin. Nada más: ni analítica, ni informes de errores, ni cuentas.

| Destino                 | Para qué                                                                      | Qué recibe                                                                        |
| ----------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Banco Central Europeo   | Tipos de cambio, para valorar cada operación en otra divisa al tipo de su día | El código de la divisa y las fechas que faltan. Nada sobre tu cartera ni sobre ti |
| Tu ordenador, en tu red | Sincronizar con Quoin, si lo vinculas                                         | Tu cartera, cifrada, sin salir de tu red local                                    |

Como en cualquier conexión a internet, el BCE recibe la dirección IP del móvil y la trata según sus propias condiciones.

### Sincronización con tu ordenador

Si vinculas el móvil con Quoin en tu ordenador escaneando un código QR, los dos se sincronizan solo dentro de tu red local, por HTTPS y con el certificado del ordenador fijado: el QR lleva su huella y el móvil no habla con ningún otro equipo. Antes de aceptar el móvil, el ordenador te muestra un código de seis dígitos para comparar, y puedes revocarlo cuando quieras.

Si tu ordenador cambia de dirección y pides sincronizar, el móvil lo busca solo en tu propia red, nunca fuera de ella, por datos móviles ni por VPN. Solo le envía algo a un equipo que presente el certificado de un ordenador ya vinculado, y nunca tu cartera en esa búsqueda.

### Copia de seguridad de Android

Si tienes activada la copia de seguridad de Google, tu cartera se incluye en ella cifrada de extremo a extremo. La vinculación con tu ordenador y su token, el identificador de la instalación y los precios quedan fuera de la copia: un móvil restaurado se vincula de nuevo.

### Permisos

La app usa internet para los dos destinos de arriba y la cámara solo para leer el QR de vinculación, que se procesa en el propio móvil, sin conexión y sin guardar ninguna imagen. La app no pide tu ubicación, tus contactos ni acceso general a tus archivos: los CSV los eliges tú con el selector de Android.

### Cómo borrar tus datos

Desinstala la app o borra sus datos desde los ajustes de Android. Como no hay copia en ningún servidor de Quoin, después no queda nada que borrar, salvo la copia de Google si la tienes activada. Desvincular un ordenador borra del móvil su vinculación y su token, pero el ordenador sigue mostrando el móvil hasta que lo revoques allí.

### Google Play

La descarga y las actualizaciones las gestiona Google según su propia política. Google Play me muestra estadísticas agregadas, como instalaciones por país y fallos de la app sin datos personales, que uso solo para mejorarla.

## La versión de ordenador

Se ejecuta en tu propio equipo y guarda los datos allí. Las copias de seguridad y el acceso son cosa tuya. Para valorar tu cartera consulta el Banco Central Europeo, Kraken (precios de criptomonedas), Yahoo Finance (precios de acciones y ETF), el INE (IPC, para la rentabilidad real) y OpenFIGI (para identificar valores por su ISIN). Cada uno recibe los códigos de los valores o divisas que consulta, nunca cantidades ni importes.

## Este sitio web

Está alojado en Cloudflare, que trata la dirección IP de cada visita para servir la página y protegerla de abusos, según su propia política de privacidad. Este sitio no usa cookies, analítica ni scripts de terceros. El tema que elijas se guarda solo en tu navegador.

Los enlaces a GitHub o Docker Hub te llevan a servicios con su propia política de privacidad.

## Bases legales

| Tratamiento                      | Base legal (RGPD)                                         |
| -------------------------------- | --------------------------------------------------------- |
| Registros técnicos del sitio web | Interés legítimo en la seguridad del servicio, art. 6.1.f |
| Correos que me escribes          | Interés legítimo en responderte, art. 6.1.f               |

Lo que la app hace con tu cartera ocurre en tu móvil y en tu ordenador: no recibo esos datos. Los correos que me escribes los guardo el tiempo necesario para responderte y después los borro.

## Tus derechos

Puedes pedir acceso, rectificación, supresión, oposición, limitación o portabilidad de tus datos escribiendo a [quoin@aritzmmartinez.dev](mailto:quoin@aritzmmartinez.dev). Si crees que no se han respetado, puedes reclamar ante la Agencia Española de Protección de Datos, en [aepd.es](https://www.aepd.es).

## Menores

Quoin no está dirigida a menores de 18 años.

## Cambios

Publicaré aquí cualquier cambio con su fecha. Si afecta a lo que sale de tu móvil o de tu ordenador, lo diré también en las notas de la versión.
