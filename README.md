# Proyecto1 Interdisciplinar en curso 2ºDAM
Parte Frontend en este caso Aplicación de [Angular](https://angular.io/ "Angular.io") del Proyecto interdisciplinar 1 de las asignuaturas:
* Programación de Servicios y Procesos
* Sistemas de Gestión Empresarial
* Desarrollo de Interfaces
* Programación Multimedia y Dispositivos Móviles 

La parte Backend hecha con Spring Boot que es un ApiRest de esta Aplicación de Angular se encuentra en este otro repositorio de GitHub: [Backend con Spring Boot](https://github.com/DanielSantanoF/ProyectoInterdisciplinar1_Backend "Parte Backend de esta Aplicación de Angular")

Proyecto sobre la gestión de colegios internamente.

***

#### Datos para acceder a la aplicación:

##### Existen tres roles super_administrador, administrador y usuario

| Usuario    | Contraseña   | Rol         |
| ---------- |:------------:| -----------:|
| superAdmin | 1234         | SUPER_ADMIN |
| admin      | 1234         | ADMIN       |
| usuario    | 1234         | USER        |

***

#### Ejercicio realizado por grupos cooperativos en clase
##### Realizado por:
* [José Antonio Llamas Álvarez](https://github.com/jallamas "José Antonio Llamas perfil de GitHub")
* [Miguel Lázaro Domínguez](https://github.com/mlazarodominguez "Miguel Lázaro Domínguez perfil de GitHub")
* [José Luis Díez Cortés](https://github.com/joseluis10cortes "José Luis Díez Cortés perfil de GitHub")
* Daniel Santano Fernández

***


#### Tecnologías usadas:
* [Angular](https://angular.io/ "Angular.io")
* [TypeScript](https://www.typescriptlang.org/ "TypeScript.org")
* [npm](https://www.npmjs.com/)
* IDE: [Visual Studio Code](https://code.visualstudio.com/) necesario para arrancar la aplicación (se debe arrancar desde el IDE)

    
## Librerías a instalar

### ANGULAR MATERIAL
    npm install -g @angular/cli
    ng add @angular/material
    npm i -s @angular/flex-layout @angular/cdk
    npm install @auth0/angular-jwt
    npm i angular-material-fileupload

### PARA SUBIR ARCHIVOS
    npm i angular-material-fileupload

### FLEX LAYOUT
    npm i -s @angular/flex-layout @angular/cdk

### MODULO DE CONTROL DEL JWT
    npm install @auth0/angular-jwt

## Usar la aplicación de Angular

* Ejecuta el comando `ng serve` en el terminal de VSC. Arranca la aplicación en `http://localhost:4200/`. La aplicación recargara automaticamente cualquier cambio en el código de la misma.

## Ayuda en el uso de Angular CLI

* Ejecuta en el terminal de VSC `ng help` o revisa esta documentación [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).