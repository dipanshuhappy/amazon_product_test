import React from 'react';

function Heart() {
    return (
        <svg x={160} y={190} >
        <g>
          <path
            fill="tomato"
            d="M92.71 7.27c-9.71-9.69-25.46-9.69-35.18 0L50 14.79l-7.54-7.52C32.75-2.42 17-2.42 7.29 7.27s-9.71 25.41 0 35.1L50 85l42.71-42.63c9.72-9.69 9.72-25.41 0-35.1z"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1; 1.5; 1.25; 1.5; 1.5; 1;"
            dur="1s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    );
}

export default Heart;