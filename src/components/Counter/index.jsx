import React, { useState } from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    return (
        <div>
            {count}
<<<<<<< HEAD
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
=======
            <button onClick={() => setCount(x => x + 1)}>+1 Counter</button>
>>>>>>> 9d9dfef463cfe58230cde68eda7cd0725a9d65cd
        </div>
    );
}

export default Counter;