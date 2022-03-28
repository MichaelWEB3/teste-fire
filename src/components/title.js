import React from 'react'


function Title(props) {
    return (
        <h1 className={`${props.className}`}>
            {props.children}
        </h1>
    );
}

export default Title;
