import React from 'react';

const Lstyle = {
    textAlign: "center",
    fontWeight: "bold"
}

const Label = ({children}) => {
    return (
        <label style={Lstyle}>{children}</label>
    )
}

export default Label;