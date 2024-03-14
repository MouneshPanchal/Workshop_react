import React from 'react';
import Card from './Cards.js';
// import data from '../database/data.js'

function Cardcontainer({data}) {
  return (
    <div className='filter-container'>
      <div className='cards'>
{
  
  data.map((item)=>(
    <Card key={item.id}{...item}></Card>
  ))

  
}
 </div>
</div>
  )
}

export default Cardcontainer