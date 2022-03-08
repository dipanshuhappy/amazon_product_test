import React from 'react';

function TopBar({children}) {
    return (
        <div className='TopBar'>
            <div className='TopBarChild'>
            {children}
            </div>
        </div>
    );
}

export default TopBar;