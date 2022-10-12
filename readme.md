# Primer aplicación real creada en React con Vite

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

Otro consejo con sintaxis de arreglos, para añadir un elemento de un arreglo que 
es una constante:

> const a = [1,2,3]

> [...a, 4]

> me devuelve: [1,2,3,4] que es un nuevo arreglo sin alterar el inicial

También para los diccionarios

> const newTask = {

>   title,   

>}

Crea un diccionario con una propiedad title y el valor será el contenido de la variable
title asumiendo que exista la variable title.

NOTA MUY IMPORTANTE

Cuando se esté pasando una función desde un componente superior como prop a otor
no se coloca directamente sobre el elemento, por ejemplo: 

> < button onClick={funcionnombre()}> x </ button>

Sino que primero creamos un manejador de función

>const handleClick = ()=>{

>	x()

>}

> < button onClick={handleClick}>ok</ button>

Con react no vamos a estar alterando el array original, lo que vamos a estar haciendo es
devolver un array modificado con los cambios que nosotros querramos ya sea un array
con un elemento de más o un elemento menos.

Otra manera para no utilizar un handlex es no colocar paréntesis al momento de colocar
a función, automáticamente nos pasará el event

> < button onClick={funcionnombre}> x </ button>

o también usar una función anónima

> < button onClick={()=>{funcionnombre(parametro)} }> x </ button>

## Create context

Lo que hicimos anteriormente, de pasar una función como prop a un componente para 
que este se lo pase a otro componente se le conoce como prop drilling, en aplicaciones
muy grandes se vuelve insostenible. En este caso la razón por la que estamos haciendo
esto es porque los estados useState están en el componente App y como necesitamos
interactuar con este estado las funciones fueron cradas allí, para luego pasarlas
a los componentes que las estarán usando. 

Una mejor forma de hacer esto sería que un componente accesa directamente al estado
en este caso que task card accesa directamente al estado o si el task list requiere
al estado va directo a él o si el task form requiere un estado que valla directo a él.

Para ello App ya no va a contener al estado sino que creamos un componente aparte
que coitiene a todos, incluso a App y su nombre es contexto. Su tarea será almacenar
el estado. La diferencia de usar esto es que React brinda una nueva forma de traer datos
ya que todos están adentro todos pueden acceder.

En react se le llama api context. Para ello creamos una carpeta en src y un nuevo archivo
jsx. Aquí se crea un módulo sencillo pero que no retorna un div, lo que retorna es un
elemento que permite englovar al resto. Colocamos un fragment y le decimos que aquí
irán elementos children.

Por medio de esta propiedad y como context englova a todo podemos colocar elementos que
serán visibles para toda la página, y para demostrar dónde irá el restro colocamos:

>{props.children}

Dentro del fragment y abajo o arriba de los elementos constantes.

Para meter elementos dentro de mi context lo tengo que importar:

>import TaskContext from "../context/TaskContext";

Y colocamos dentro a los elementos que irán dentro del contexto, esto en el return:

> < TaskContext>

> 	 < div>

> 	 	...

> 	 < / div>

> < /TaskContext>

Para poder craer un context correctamente importamos una función especial 
de la librería de React:

>import {createContext} from 'react'

Y creamos un context en mayúsculas

> const TaskContext = createContext()

Para no confundirnos el nombre de nuestro módulo pasa a ser el mismo seguido de 
la palabra provider

> function TaskContextProvider(props) {

Para en englove a todo esto lo importamos en el main.jsx

> import {TaskContextProvider} from './context/TaskContext'

Y encapsulo el app en él:

>< TaskContextProvider>
>   < App />
>< /TaskContextProvider>

Para tener valores dentro del context creamos variables dentro del componente

> let x = 20

Y se la damos al provider para que la pueda proveer:

> < TaskContext.Provider value={x}>

Ahora donde querramos utilizar ese contexto primero importamos la herramienta para 
poder hacerlo:

> import {useContext} from 'react'

Y dentro del componente lo llamamos y trabajamos con él:

    NOTA: EN REACT PUEDEN HABER VARIOS CONTEXTOS EN UNA SOLA APP ES POR ELLO QUE 
    DEBEMOS PASARLE EL NOMBRE DEL CONTEXTO QUE ESTAMOS USANDO, EL NOMBRE DEL
    CONTEXTO ES EL QUE DECLARAMOS EN UN CONSTANTE 

>import {TaskContext} from '../context/TaskContext'

Y lo setiamos, esto dentro del componente:

>useContext(TaskContext)

Podemos extraer y utilizar los valores que tiene:

>const valor = useContext(TaskContext)
>console.log(valor)

También puedo jalar valores estructurados:

>const { deleteTask } = useContext(TaskContext);
