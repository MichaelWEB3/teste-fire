import React, { useEffect, useState } from 'react'
import Button from './button';


function PaginationTest(props) {
    const [returnn, setReturn] = useState(null)
    
    useEffect(()=>{
        if(returnn){
            props?.setReturn(returnn)
        }
    },[returnn])
    return (
        <div className='flex justify-center items-center w-full mt-10' >
            <Button className="m-5 border-2 p-2 hover:bg-gayr-600" value={{value1:0, value2:4}}   return={setReturn}>1</Button>
            <Button className="m-5 border-2 p-2 hover:bg-gayr-600"  value={{value1:5, value2:9}} return={setReturn}>2</Button>
            <Button className="m-5 border-2 p-2 hover:bg-gayr-600"  value={{value1:10, value2:14}} return={setReturn}>3</Button>
        </div>
    );
}

export default PaginationTest;
