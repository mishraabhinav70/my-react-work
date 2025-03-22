import React, { useState } from 'react'

function Usestatearray() {
    const [items,setItems]=useState([]);
    function addItems() {
        setItems([...items,{
            id: items.length,
            value: Math.random()
        }])
    }
  return (
    <div>
      <ol>
        {items.map(item=>(<li key={item.id}>{item.value}</li>))}
      </ol>
      <button onClick={addItems}>generate a random number</button>
    </div>
  )
}

export default Usestatearray
