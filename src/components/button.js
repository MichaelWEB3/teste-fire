import React, { useEffect, useState } from 'react'


function Button(props) {
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(props?.value)
  }, [])

  return (
    <button value={value} onClick={() => props.return(value)} className={`${props.className}`} type={`${props.type}`}>
      {props.children}
    </button >
  );
}

export default Button;
