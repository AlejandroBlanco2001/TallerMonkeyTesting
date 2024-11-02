# Monkey testing 
Esto es una prueba de concepto de monkey testing, en este caso se ha utilizado el lenguaje de programación de JavaScript,
en este caso cubrimos los casos de clicks aleatorios y de eventos aleatorios en la pagina de web https://losestudiantes.co, para la materia Pruebas automatizadas de software de la Universidad de los Andes para la maestria de ingenieria de software.

## Instalacion

1. Clonar el repositorio con el comando `git clone` o descargar el repositorio.
2. Acceder al directorio del proyecto.
3. Ejecutar el comando `npm install` para instalar las dependencias necesarias.
4. Ejecutar el comando `npm run cypress-test-monkeys` para ejecutar el monkey testing con las configuraciones por defecto.

## Configuraciones
Dentro del archivo `monkey-config.json` se encuentran las configuraciones para el monkey testing, las cuales son:

- "monkeysClickEventAmount": Cantidad de clicks aleatorios que se realizaran.
- "monkeysRandomEventAmount": Cantidad de eventos aleatorios que se realizaran.

>[!IMPORTANT]
>Para que el monkey testing funcione correctamente, se debe tener en cuenta que la pagina de web https://losestudiantes.co debe estar disponible.

>[!WARNING]
> El monkey testing puede generar comportamientos inesperados en la pagina de web https://losestudiantes.co, por lo que si el test falla, puede ser debido a que no encontro un link disponible o el evento generado es invalido.