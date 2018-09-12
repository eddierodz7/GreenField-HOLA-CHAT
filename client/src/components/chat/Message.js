import React from 'react';

export default const Message = (props) => {
    return (
      <div className='message'>
        <div className='username'>
          <p>{props.message.username}</p>
        </div>

      
      </div>
    )
};
