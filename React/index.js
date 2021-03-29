var container = window.document.getElementById("app");
// var titulo = document.createElement("h1");
// titulo.innerHTML = "Titulo inserido por JS";
// container.appendChild(titulo);
function Contador(props) {

    // let numero = 0;
    const [numero,setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
    }
    function subtrair(){
        setNumero(numero - 1)
    }
    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );

}
function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!!</h1>
            <Contador titulo="React" />
            <Contador titulo="Angular" />
            <Contador titulo="Vue Js" />
        </React.Fragment>


    );
}
ReactDOM.render(React.createElement(App, null, null), container);

// PascalCase --> componentes em react seguem esse padrao
// camelCase --> Funções JS
//so pode retornar um elemento por componente
//saida aninhar em React.Fragment
//podemos criar propriedades para nossos componentes e acessamos por props