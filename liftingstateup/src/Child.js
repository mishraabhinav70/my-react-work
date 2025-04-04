import React, { useState } from 'react'

function Child(props) {

    const [name, setName] = useState();

    function handelSubmit(e) {
        e.preventDefault();
        props.getData(name)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type='text' value={name} onChange={(e) => { setName(e.target.value) }}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Child
