import React, { useState } from 'react'

function Usestatelist() {
    const [name,setName]=useState({firstname:"abhinav",lastname:"mishra"});
function update() {
    setName({...name,firstname:"yuvraj"})
}
  return (
    <div>
      <h1>my firstname is {name.firstname} and lastname is {name.lastname}.</h1>
      <button onClick={update}>update</button>
    </div>
  )
}

export default Usestatelist
