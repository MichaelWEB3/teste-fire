import React, { useState } from 'react'
import Form from './components/form';
import List from './components/list';
import Popap from './components/popapInfo';


function App() {

  const [popap, setpopap] = useState(false)
  const [info, setinfo] = useState(false)

  return (
    <div className="bg-gray-800 w-screen h-screen text-gray-50 flex items-center justify-center">
      <div className='flex w-2/3 h-auto p-10 bg-slate-500 rounded-sm shadow-sm	 shadow-gray-400 flex-col	'>
        {!popap &&
          <>
            <Form></Form>
            <List setPopap={setpopap} setInfo={setinfo}></List>
          </>
        }

        {popap &&
          <Popap inf={info} popapReturn={setpopap}></Popap>
        }
      </div>
    </div>
  );
}

export default App;
