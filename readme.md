Primer aplicación real creada en React con Vite

Vite es una alternativa directa para create-react-app

Comando para comenzar a crea con vite:

>npm create vite

elegimos instalar con `y`

le damos el nombre de la app en este caso `react-tasks-application`

Para el nombre del paquete le damos el mismo nombre que el proyecto

Framework seleccioné React

javascript o typescript seleccioné javascript

y se crea el proyecto, es importante notar que no se han instalado las dependencias
para eso corremos 

>npm install

El equivalente de `npm start` es

>npm run dev

Acá en vit si es necesario usar el .jsx

Aquí en vite el equivalente de index.js es main.jsx

También como cosa distinta nos topamos esta etiqueta:

>   < React.StrictMode >

Para lo que sirve es para saber si estámos escribiendo código correcto en React,
es más que todo para el entorno de desarrollo y deecho se recomienda que se trabaje
con ella. Da recomendaciones.

También como diferencia el index.html ahora está afuera de la carpeta public pero
es normal, no causará mayores diferencias, también el comando para contruir la app
de producción es

>npm run build

Tema recomendado para vs code: `ayu`

Tambiién vamos a estar utilizando atajos de html con `emmet`:

>ul>li*4>a[Enlace $]

Esto genera código de html. Para que funcione con jsx debemos configurar lo siguiente:

Precionamos `F1` y buscamos `user preferences` y acá le damos click a la que no dice JSON
en paréntesis. Ahora buscamos include lenguajes, si ya aparede javascriptreact genial
sino lo agregamos

>en item: javascript, en value: javascriptreact

Y también como última recomendacion la extención `ES7 react` la cual nos brinda snippets
para poder trabajar mucho más rápido. Por ejemplo:

>rfce

Eso crea un componente de forma automática donde el título por defecto es el nombre 
del archivo.

Otro consejo, esta combinación quita una línea de código entera.

> ctrl + x 

Un atajo para importar es colocar

>imp

Atajo para console.log()

>clg

Atajo para useState

>useState y darle click a useStateSnipped

Por defecto ya nos deja los cursores listos para alterar los nombres de las 
2 variables y en la segunda ya tiene se tal inicio. Con `TAB` cambiamos
entre las selecciones para poder colocar el valor inicial.