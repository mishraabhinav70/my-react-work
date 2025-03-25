import React, { useState } from 'react'

function AddContact({addContact}) {
    const [contactData, setContactData] = useState({
        name: "",
        email: ""
    });
function handelChange(e) {
        if (e.target.name === 'name') {
            setContactData({ ...contactData, name: e.target.value })
        }
        else {
            setContactData({ ...contactData, email: e.target.value })
        }
    
}
function handelAdd() {
        if (contactData.name === "" || contactData.email === "") {
            alert('All fields are required')
            return
        }
        addContact(contactData)
        setContactData({ name: "", email: "" })
       
    }

    return (
        <div>
            <div className='formHeader'>Add Contact</div>
            <form className='add-contact'>
                <label>Name</label><br />
                <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handelChange} /><br />
                <label>email</label><br />
                <input type='email' placeholder='Enter email' name='email' value={contactData.email} onChange={handelChange} />

            </form>
            <button className='btn' onClick={handelAdd}>add contact</button>
            
        </div>
    )
}

export default AddContact
