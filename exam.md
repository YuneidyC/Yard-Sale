-----------MAL-----------
1.
¿Qué es React.js?
Una librería de JavaScript para separar código de JavaScript en componentes.

React es una librería de JS para desarrollar interfaces de usuario, donde solo nos vamos a enforcar en la vista dentro del modelo MCUB o mejor conocido como vista controlador. React solo viene a resolvernos las vistas de nuestra aplicación.

-----------MAL-----------
2.
Si nos basamos en el patrón MVC (modelo-vista-controlador), ¿de cuál se encarga React.js?
Se encarga de las 3.

vista controlador

3.
React.js nos permite construir interfaces con base en:
Componentes

4.
¿Cuál es la súper empresa encargada de construir React.js?
Facebook

5.
¿Qué es JSX?
El sistema de plantillas de React que combina la sintaxis de JavaScript con XML.

-----------MAL-----------
6.
¿Qué es el Virtual DOM?
Una librería de JavaScript que usa internamente React.js para traducir JSX a JavaScript.

Es un concepto precioso de React. El virtual DOM es una copia en memoria del DOM normal del navegador. Pero ¿por qué hacer una copia? Bueno, cuando el UI cambia de estado, normalmente el DOM es muy lento. Sin embargo, virtual DOM es extremadamente rápido. Lo que ocurre es que primero, todo se computa en el virtual DOM, se actualiza por completo el virtual DOM (a pesar de que se re-renderiza el virtual DOM, no afecta el rendimiento porque primero no se tiene que mostrar gráficamente y realmente es muy rápido) y realiza el proceso de diff que compara ambos DOM para después igualar o "reconciliar" ambos UI y cambiar el aspecto de la manera más corta y rápida posible.  

7.
¿Cómo creamos un elemento de React que se transforme en un DIV con la clase "container" usando JSX?

`<div className="container"></div>`

-----------MAL-----------
8.
¿Cómo creamos un elemento de React que se transforme en un input de tipo texto usando JSX?

`<input type="text">`

9.
¿Cuáles son las herramientas indispensables que debemos instalar para usar React en una aplicación web?
react y react-dom

10.
¿Cómo renderizamos el componente principal de nuestra aplicación con React?

ReactDOM.render()

11.
Escalar nuestro proyecto será mucho más fácil si usamos Create React App en vez de configurar manualmente Webpack y Babel. Esta afirmación es:
Falsa

12.

Teniendo lo siguiente:
```
const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
```
¿Cuál es el código correcto del componente Layout?

```
const Layout = ({ children }) => { return (

<divclassname="Layout">{children}</div>

); }
```

13.
¿Qué es React Router DOM?
La herramienta más popular de React para separar nuestra aplicación entre páginas / rutas.

14.
¿Cuál es la forma correcta crear un 404 con React Router DOM?

Dentro de los componentes BrowserRouter y Switch. De último lugar con las demás rutas de la aplicación. Y con `<Route path="*" component={NotFound} />`.

-----------MAL-----------
15.
¿Qué herramienta de React nos permite trabajar con el estado en nuestros componentes?
React.Context

useState

-----------MAL-----------
16.
¿Qué herramienta de React nos permite compartir un estado con todos los componentes de la aplicación?
React.useState

useContext

17.
¿Cuál es la forma correcta de actualizar un estado cuando los usuarios den click en un botón?

```
const Button = () => {
  const [count, setCount] = React.useState(1);
  return (
    <button onClick={() => setCount(count + 1)}>
      ¡Click!
    </button>
  );
}
```