import React from 'react';


const Card = ({ name, email, id }) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5' 
             style={{ background: 'linear-gradient(to left, rgb(165, 69, 136), rgb(233, 35, 35))' }}
        >
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;