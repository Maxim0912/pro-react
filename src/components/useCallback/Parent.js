import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const [counterThree, setCounterThree] = useState(0);

    const updateOne = () => {
        console.log("One");
    };

    const updateTwo = useCallback(() => {
        console.log("Two");
    }, [counterTwo]);

    function complexCompute(num) {
        console.log("complexCompute");
        let i = 0;
        while (i < 1000000000) i++;
        return num * 2;
    }

    const computed = useMemo(() => {
        return complexCompute(counterThree);
    }, [counterThree]);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>One</button>
            <br />
            <button onClick={() => setCounterTwo(counterTwo + 1)}>Two</button>
            <button onClick={() => setCounterThree(counterThree + 1)}>
                Three
            </button>
            <Child
                updateOne={updateOne}
                updateTwo={updateTwo}
                computed={computed}
            />
        </div>
    );
}
