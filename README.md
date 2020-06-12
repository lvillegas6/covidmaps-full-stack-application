
# 🔬 Covid Maps

CovidMaps es una página web capaz de brindar apoyo e información de utilidad que potencie el cuidado y la protección frente al virus actual. El funcionamiento de la página está orientado a que los usuarios reporten sus síntomas (leves, moderados o graves ) con el fin de saber en qué lugar se detectó el contagio. Con esta información buscamos que las personas cercanas al punto de contagio tengas los cuidados necesarios. Además, se muestra un listado del estado actual de contagios y recuperados en diferentes departamentos y municipios de Colombia.

## 🕹 ¿Qué se utilizó para construir la aplicación?

Esta es una aplicación full stack que utiliza para el front-end **React.js** y para el back-end **Node.js**. Para cada una de estas tecnologías se utilizo TypeScript. Para almacenar la información se utilizo la base de datos MySql. 

Se utiliza **MapBox** para presentar la información de los puntos de contagios reportados por las personas. Para esto es necesario que el usuario nos permita conocer su ubicación para que esta se pueda registrar.

Se implementó **Travis-ci** para que se suba automáticamente el código a la máquina. Además de generar las Releases.

![enter image description here](https://assets.covidmaps.media/images/map.png)

[Click para ver la página.](https://covidmaps.media/)

## 🎛 Instalación del servidor 

    cd CovidMap-backend
    npm install
    npm start

El servidor estará disponible en [http://localhost:3000/](http://localhost:3000/). 

## 🖥 Instalación del cliente

    cd CovidMap-web
    npm install
    npm start

El cliente estará disponible en [http://localhost:8080/](http://localhost:8080/)

## 📦 Deploy 
En travis.yml se encuentra el código para hacer un deploy automático a la VPS. Para que el código se suba a la maquina, tienes que realizar un commit o un pull request a la rama master.

## 👮‍♂️ Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://github.com/Boogst/covidmaps-full-stack-application/blob/master/LICENSE)
