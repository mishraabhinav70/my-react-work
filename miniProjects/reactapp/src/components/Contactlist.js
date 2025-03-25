import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Contactlist(props) {
    const { contact, removeContact } = props;
    console.log(contact);
    
    const contactList = contact.map((val, index) => {
        return (
            <div key={index}>
                <div className='contacts'>
                    <div>{val.data.name}</div>
                    <div>{val.data.email}</div>
                    <span onClick={()=>removeContact(val.id)}><DeleteIcon /></span>
                </div>
            </div>
        )
    }
    )


    return (
        <>
            <div className='contactHeader'>Contact List</div>
            <div>{contactList}</div>
        </>
    )
}
