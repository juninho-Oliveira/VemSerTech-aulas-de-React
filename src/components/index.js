/*import React, { useState } from "react";
import { useEffect } from "react";
import './style.css';

function Contador() {
    const [count, setCount] = useState(0);
    const [classColor, setClassColor] = useState("red");

    const onClick = () => {
        setCount((prevState) => prevState + 1)
    };

    useEffect(() => {
        console.log("Entrou no useEffect");

        if (count >= 10) {
            console.log("entrou no if no useEffect");
            setClassColor("green");
        }
    }, [count]);

    useEffect(()=> {
        if (count === 0) {
            setClassColor("big-text");
        }
    }, [count])

    useEffect(() => {
        if (classColor === "red") console.log("vermelho");
        if (classColor === "green") console.log("verde");
    }, [classColor]);


    return (
        <div>
            <p>
                você clicou <span className={classColor}>{count} </span>vezes
            </p>
            <button onClick={onClick}>Clique</button>
        </div>
    );
}

export default Contador */