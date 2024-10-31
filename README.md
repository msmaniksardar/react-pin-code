# react-pin-code

use of pin code
import React from 'react';
import PinCode from "react-pin-code-dev";

define a state with array 
when show the value of state use join() function to get value as a int 

Props you can pass such as value , length ,onChange , inputStyle 
you can apply  your own style or design use inputStyle 


const App = () => {

    const [code, setCode] = React.useState(Array());
    console.log(code.join(""));

    return (
        <div>
         <PinCode value={code} length={6} onChange={(value) => setCode(value) } inputStyle={{background:"red"}}  />
        </div>
    );
};

export default App;