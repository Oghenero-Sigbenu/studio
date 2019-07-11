import React from 'react';

const Fstyle = {
    textAlign: 'center'
}

const Form = ({children}) => {
    return (
        <form style={Fstyle}>{children}</form>
    )
}

export default Form;