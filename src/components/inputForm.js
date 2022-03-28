import React from 'react'


function InputForm(props) {
  return (
    <input name={props.name} className='w-1/2 m-1 p-1 rounded-md text-black' type={props.type || 'text'} placeholder={props.placeholder}>
    </input>
  );
}

export default InputForm;
