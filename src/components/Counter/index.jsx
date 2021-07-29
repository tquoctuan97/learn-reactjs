import React, { useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
}

export default Counter;