import React, { useEffect, useState } from 'react'

function Form() {
    const data = { name: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log("registered");
    }, [flag])

    function handelData(e) {
        setInputData({...inputData, [e.target.name]: e.target.value })
        console.log(inputData);

    }

    function handelSubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("all fields ar mandatory")
        } else {
            setFlag(true)
        }
    }

    return (<>
        <pre>{(flag) ? <h2>hello {inputData.name}, you are registered successfully</h2> : ""}</pre>
        <form className='container' onSubmit={handelSubmit}>
            <div className='header'>
                <h1>registration form</h1>
            </div>
            <div>
                <input type='text' placeholder='enter tour Name' name='name' value={inputData.name} onChange={handelData}></input>
            </div>
            <div>
                <input type='text' placeholder='enter tour Email' name='email' value={inputData.email} onChange={handelData}></input>
            </div>
            <div>
                <input type='text' placeholder='enter tour Password' name='password' value={inputData.password} onChange={handelData}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </>
    )
}

export default Form
