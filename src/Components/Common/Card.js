import React from 'react';

const Card = ({children}) => {
    const hstyle = {
        boxhsadow: "2px 2px 5px 2px "
    }

    return (
        <div style={hstyle}>{children}</div>
    )
}

export default Card;