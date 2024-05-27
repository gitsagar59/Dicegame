import React from 'react';

function Button({name, onClick, className}) {
    return ( 
        <div>
           <button className={className} onClick={onClick}>{name}</button>
        </div>
    );
}
export default Button;