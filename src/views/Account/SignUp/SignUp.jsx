import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <h1>Contador React</h1>
            <p>Valor actual del contador: {count}</p>
            <button onClick={incrementCount}>Incrementar</button>
        </div>
    );
}

export default App;
