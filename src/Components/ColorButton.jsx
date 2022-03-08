import React from 'react';

function ColorButton({color,text,onClick,fill=false}) {
    const style={
       
    }
    return (
        <button style={{
            width:'100px',
            height:'50px',
            border:`3px solid ${color}`,
            borderRadius:'15px',
            backgroundColor:fill?color:'none'
        }}
        onClick={()=>onClick(text)}>
            <p style={{
                textAlign:'center',
                color:fill?'white':color,
                font:'icon',
                fontWeight:'bold',
                cursor:'pointer'
            }}>{text}</p>
        </button>
    );
}

export default ColorButton;