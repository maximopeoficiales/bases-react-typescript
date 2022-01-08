import { useEffect, useState } from "react"

const MAXIMUM_COUNT = 10;
export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);
    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMUM_COUNT));
    }
    useEffect(() => {
        if (counter < MAXIMUM_COUNT) return;
        console.log("%c Se llego al valor maximo", "color: red; font-size: 20px;");
    }, [counter])
    return (
        <div>
            <h1>CounterEffect {counter}</h1>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}
