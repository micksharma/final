import React from 'react';
import Image from 'next/image';

function Card({person}) {
  return(
    <div>
      <div>
        <h2>{person.value}</h2>
      </div>
    </div>
  );
}

export default Card;