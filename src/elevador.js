import './App.css';

function elevador() {
    const [andarAtual, setAndarAtual] = useState(0)
    const andarMaximo = 10;

function subir(){
    if(andarAtual<andarMaximo){
        setAndarAtual(andarAtual+1);
    }else{
        alert('andar maximo!')
    }
}

function descer(){
    if(andarAtual){
        setAndarAtual(andarAtual-1)
    }else{
        alert('terreo!')
    }
}

    return (
        <div className="div">
        <input placeholder="digite seu nome:"></input>
        <spam></spam>
        <spam>andar atual: {andarAtual}</spam>
                
        </div>
    );
}

export default App;