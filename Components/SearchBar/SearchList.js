import React from 'react';
import Card from './Card';

function SearchList({ fileredData }) {
  const filtered = fileredData?.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <div style={{backgroundColor:'black'}}>
      {filtered}
    </div>
  );
}

export default SearchList;