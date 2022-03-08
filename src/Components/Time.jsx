import React from 'react';

function Time() {
  const today=new Date()
    return (
        <svg >
        <text
          style={{
            fill: "#fff",
          }}
          x='40%'
          y='50%'
          className="small"
        >
          {today.getHours()} : {today.getMinutes()}
        </text>
      </svg>
    );
}

export default Time;