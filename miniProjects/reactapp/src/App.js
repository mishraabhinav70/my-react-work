import { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import './App.css';
import AddContact from './components/AddContact';
import Contactlist from './components/Contactlist';
import Header from './components/Header';



function App() {
  const localStoragekey = 'contact'
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStoragekey)) || []
  }
  )

  useEffect(() => {
    localStorage.setItem
      (localStoragekey, JSON.stringify(contact))
  }
    , [contact])


  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }])
  }
  const removeContact = (id) => {
    const updatedList = contact.filter((val) => val.id !== id)
    setContact(updatedList)
  }
  return (
    <div>
      <Header />
      <AddContact addContact={addContact} />
      <Contactlist contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;

