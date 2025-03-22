import React from 'react'

function Map() {
    const IPL = ["CSK","MI","RCB"];
    const result = IPL.map((ipl,index)=><h1 key={index}>{index}: {ipl}</h1>);
    return (
        <div>
            <h1>{result}</h1>
        </div>
    )
}

export default Map
