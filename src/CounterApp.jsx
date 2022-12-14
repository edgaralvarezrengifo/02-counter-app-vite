import {useState} from 'react'

import propTypes from 'prop-types'

export const Counter =({value}) =>{
    const [ counter, setCounter ] = useState(value);


    const handleAdd=(event)=>{
        setCounter((c)=>c+1);
    }

    const handleSubstract = (event)=>{
        setCounter((c) =>c-1);
    }

    const handleReset = (event)=>{
        setCounter((c)=>value);
    }

    return (
        <>
            <h1>{counter}</h1>

            <button onClick={handleAdd }> +1 </button>
            <button onClick={handleSubstract }> -1 </button>
            <button onClick={handleReset }> reset </button>
         
        </>
    );
}

Counter.propTypes ={
    value : propTypes.number
}

Counter.defaultProps = {
    value:0
}