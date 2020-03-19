import React,{ useState } from "react";

function ComponenTest(){

    const [inputText, setInputText] = useState('');

    return(
        <div align="center">
            <h4>Componente funcional REACT</h4>
            <label>Texto: </label>
            <input onChange={e => setInputText(e.target.value)} value={inputText} placeholder="Ingresá un texto "></input>
            <button onClick={()=>inputText !== ""?alert(inputText):""}>Apretá aqui</button>
        </div>
    )
}

export default ComponenTest;