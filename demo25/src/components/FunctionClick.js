import React from 'react'

function FunctionClick() {
    function printMessage(){
        console.log("clicked");
        
        }
  return (


    <div>
      <button onClick={printMessage}>click</button>
    </div>
  )
}

export default FunctionClick
