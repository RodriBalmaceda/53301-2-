# Analizador de Lenguaje Simple

+ Descripción
Analizador léxico, sintáctico e intérprete para un lenguaje simple, implementado con ANTLR4 y JavaScript.
Un intérprete de un lenguaje simple implementado con y basado en ANTLR4.

+ Requisitos previos
- Node.js (versión 16 o superior)
- Instalar ANTLR4 globalmente: npm install -g antlr4

+ Instalación

1. Clonar el repositorio:
   https://github.com/RodriBalmaceda/53301.git

2. Entrar a la carpeta:
   cd 53301

3. Instalar dependencias:
   npm install

4. Generar el parser y lexer:
   antlr4 -Dlanguage=JavaScript javascript.g4

+ Ejecución

Para ejecutar el analizador escribimos en la terminal powershell:
   node index.js

El programa lee el archivo input.txt por defecto.

+ ¿Cómo probar los ejemplos?

Ejemplo correcto 1 (flujo Tesis):
   cp Ejemplos\EjemploCorrecto1.txt input.txt
   node index.js

Ejemplo correcto 2 :
   cp Ejemplos\EjemploCorrecto2.txt input.txt
   node index.js

Ejemplo con error (falta punto y coma):
   cp Ejemplos\EjemploIncorrecto.txt input.txt
   node index.js

Ejemplo con error (Escribir mal concatenado):
   cp Ejemplos\EjemploIncorrecto2.txt input.txt
   node index.js

+ Salida del programa
- Tabla de lexemas-tokens
- Análisis sintáctico (correcto/incorrecto con línea y causa)
- Árbol de análisis sintáctico
- Código JavaScript generado
- Ejecución del intérprete

+ Tecnologías
- ANTLR4
- JavaScript (ES6+)
- Node.js

+ Autor
Rodrigo Balmaceda
Legajo: 53301
