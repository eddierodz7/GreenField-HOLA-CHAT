import React from 'react';

export default const Message = (props) => {
    return (
      <div className='message'>
        <div className='username'>
          <p>{props.message.username}</p>
        </div>

        <div className='data'>
          {props.message.message.type === 'message' ? (
            <div className='text'>
              {props.message.message.text}
            </div>
          ):(
            <div className='image'>
              <img src={props.message.message.url} alt=''/>
            </div>
          )}
        </div>
      </div>
    )
};
