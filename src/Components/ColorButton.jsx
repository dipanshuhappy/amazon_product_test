import React from 'react';

function ColorButton({color,text,onClick}) {
    const style={
       
    }
    return (
        <button style={{
            width:'100px',
            height:'50px',
            border:`3px solid ${color}`,
            borderRadius:'15px'
        }}
        onClick={()=>onClick(color)}>
            <p style={{
                textAlign:'center',
                color:color,
                font:'icon',
                fontWeight:'bold',
                cursor:'pointer'
            }}>{text}</p>
        </button>
    );
}

export default ColorButton;