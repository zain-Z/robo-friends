import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll',
                      border: '1px solid black',
                      height: '530px',
                      background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                      color: 'white',
                      padding: '16px' }}
                      >
            {props.children}
        </div>
    );
}


export default Scroll;