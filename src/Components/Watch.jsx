import React from 'react';

function Watch({ color, children }) {
    const style = {
        fill:color
    }
    return (
        <svg
            width={256}
            height={256}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 511.997 511.997"
            style={{
                enableBackground: "new 0 0 511.997 511.997",
            }}
            xmlSpace="preserve"
        >
            <path
                style={style}
                d="m326.9 53.3 8.6 15H123.7l8.6-15c6.5-11.3 9.8-23.7 9.8-36.3 0-20.4 19-37 42.5-37h90c23.5 0 42.5 16.6 42.5 37 0 12.6 3.4 25 9.8 36.3zM132.2 418.7l-8.6-15h211.9l-8.6 15c-6.5 11.3-9.8 23.7-9.8 36.3 0 20.4-19 37-42.5 37h-90c-23.5 0-42.5-16.6-42.5-37 0-12.6-3.4-25-9.9-36.3"
                transform="translate(1)"
            />
            <path
                style={style}

                d="M401.9 271.3h-22.3v-70.6h22.3c7.2 0 13.1 5.8 13.1 13.1v44.5c0 7.2-5.9 13-13.1 13"
                transform="translate(1)"
            />
            <path
                style={{
                    fill: 'black',
                }}
                d="M341.8 403.7H117.4c-20.9 0-37.9-17-37.9-37.9V106.2c0-20.9 17-37.9 37.9-37.9h224.3c20.9 0 37.9 17 37.9 37.9v259.6c.1 21-16.9 37.9-37.8 37.9"
                transform="translate(1)"
            />
            <path
                style={{
                    fill: "#f6d380",
                }}
                d="M341.8 412.2H117.4c-25.6 0-46.4-20.8-46.4-46.4V106.2c0-25.6 20.8-46.4 46.4-46.4h224.3c25.6 0 46.4 20.8 46.4 46.4v259.6c.1 25.6-20.8 46.4-46.3 46.4zM117.4 76.8C101.2 76.8 88 90 88 106.2v259.6c0 16.2 13.2 29.4 29.4 29.4h224.3c16.2 0 29.4-13.2 29.4-29.4V106.2c0-16.2-13.2-29.4-29.4-29.4H117.4z"
                transform="translate(1)"
            />
            {children}
        </svg>
        
    );
}

export default Watch;