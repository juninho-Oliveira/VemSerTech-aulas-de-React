import React, { useState } from "react";
import { useEffect } from "react";
import './contador.css';

function Contador() {
    const [count, setCount] = useState(0);
    const [classColor, setClassColor] = useState("red");

    const Mais = () => {
        setCount((prevState) => prevState + 1)
    };

    const Menos = () => {
        setCount((prevState) => prevState - 1)
    };

    useEffect(() => {

        if (count === 0) {
            console.log("entrou no if no useEffect");
            setClassColor("black");
        }  else if (count < 0) {
            setClassColor("red")
        }  else if (count > 0) {
            setClassColor("green")
        }
    }, [count]);




    return (
        <div className="contador">
            <p>
                você clicou <span className={classColor}>{count} </span>vezes
            </p>
            <div>
                <button onClick={Menos}>-</button>
                <button onClick={Mais}>+</button>
            </div>
        </div>
    );
}

export default Contador 