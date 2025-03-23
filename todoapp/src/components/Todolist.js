import React, { useState } from 'react'

function Todolist() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

    function addActivity() {
        setListData((listData) => {
            const updatedList = [...listData, activity]
            setActivity('')
            return updatedList
        })
    }

    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setListData(updatedListData);
    }

    function removeAll(params) {
        setListData([])
    }

    return (
        <>
            <div className='container'>
                <div className='header'>
                    TODOLISTS
                </div>
                <input type='text' placeholder='add activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>submit</button>

                {listData.length >= 1 && <p className='list-heading'>here is your list : </p>}

                {listData != [] && listData.map((data, i) => {
                    return (
                        <>
                            <p key={i}>
                                <div>{data}</div>
                                <button onClick={() => removeActivity(i)}>remove{"-"}</button>
                            </p>
                        </>
                    )
                })}
                {listData.length >= 1 &&
                    <button onClick={removeAll}>remove all</button>}
            </div>
        </>
    )
}

export default Todolist
