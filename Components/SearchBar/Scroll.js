import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'40vh',backgroundColor:'black'}}>
      <p style={{color:'white'}}>{props.children}</p>
    </div>	
  );
}

export default Scroll;