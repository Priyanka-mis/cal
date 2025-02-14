import React, { useState } from 'react'

const Calculator = () => {

    const [data, setdata] = useState("");


    const getValue =(event) =>{
        console.log(event.target.value);
        setdata(data.concat( event.target.value))  
    }

    const calculation = () =>{
        setdata(eval(data).toString())
    }


    const back = () =>{
        setdata(data.slice(0, -1))
    }

    const clear = () =>{
        setdata("")
    }

  return (
    <>
    <h1>Calculator</h1>
    <div className='container'>
        <div>
            <input placeholder='0' value={data}/>
        </div>

        <br></br>

        <button onClick={getValue} value="(">(</button>
        <button onClick={getValue} value=")">)</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={clear} value="AC">AC</button>

        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>

        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-">-</button>

        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>


        <button onClick={getValue} value="0">0</button>
        <button onClick={back} value="Back">Back</button>
        <button onClick={calculation} value="=">=</button>
        <button onClick={getValue} value="/">/</button>







    </div>
    </>

  )
}

export default Calculator