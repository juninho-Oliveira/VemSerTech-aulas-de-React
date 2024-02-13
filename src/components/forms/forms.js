import React, { useState } from "react";
import Contador from "../contador/Contador";
import './forms.css';


function Formulario() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sexo, setSexo] = useState('');
    const [peso, setPeso] = useState('');
    const [mensagem, setMensagem] = useState('');

    return (
        <div className="container-forms">
            <h1>Formulario</h1>

            <Contador/>

            <input
                type="text"
                placeholder="Digite seu nome:"
                value={name}
                onChange={(event) => setName(event.target.value)} />

            <input
                type="text"
                placeholder="Digite sua idade:"
                value={age}
                onChange={(event) => setAge(event.target.value)} />

            <input
                type="text"
                placeholder="Sexo:"
                value={sexo}
                onChange={(event) => setSexo(event.target.value)} />

            <input
                type="text"
                placeholder="Digite seu peso:"
                value={peso}
                onChange={(event) => setPeso(event.target.value)} />

            <textarea
                typeof="text"
                placeholder="Digite sua mensagem:"
                rows="4" cols="40"
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)} />

                <tbody>
                    <tr>
                        <td>Nome: {name}</td>
                    </tr>

                    <tr>
                        <td>Idade: {age}</td>
                    </tr>

                    <tr>
                        <td>Sexo: {sexo}</td>
                    </tr>

                    <tr>
                        <td>Peso: {peso}</td>
                    </tr>

                    <tr>
                        <td>Mensagem: {mensagem}</td>
                    </tr>

                </tbody>
        </div>
    )
}

export default Formulario;