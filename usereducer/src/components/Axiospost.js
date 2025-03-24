import React, { useState } from 'react'
import Axios from 'axios'
function Axiospost() {
    const data = { fname: "", lname: "" };
    const [inputData, setInputData] = useState(data);

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/users", inputData).then((response) => {
            console.log(response);

        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        Axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
            .then((response) => {
                console.log(response);

            })
    }
    const handleDelete = (e) => {
        e.preventDefault();
        Axios.delete("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                console.log(response);

            })
    }

    return (
        <>
            <label>First Name</label>
            <input type='text' value={inputData.fname} name='fname' onChange={handleData}></input><br />
            <label>Last Name</label>
            <input type='text' value={inputData.lname} name='lname' onChange={handleData}></input><br />
            <button onClick={handleSubmit}>submit</button>
            <button onClick={handleUpdate}>update</button>
            <button onClick={handleDelete}>delete</button>
        </>
    )
}

export default Axiospost
