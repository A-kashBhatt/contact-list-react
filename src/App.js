import { useState } from 'react';
import Noty from "noty";
import { toast } from 'react-toastify';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactList, setContactList] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.length !== 10 || contact[0] < '6') {
      // new Noty({
      //   text: "Contact length should be 10"
      // }).show();
      toast('Contact length should be 10');
      return;
    }
    if (name.length === 0) {
      new Noty({
        text: "Name is not present"
      }).show();
      return;
    }

    contactList.push({
      name,
      contact
    });
    setContactList(
      contactList
    );
    setName('');
    setContact('');
    return;
  }

  const handleDelete = (index) => {

    setContactList(contactList.filter((contact, idx) => index !== idx));
  }

  return (
    <>
      <h1 className="heading">
        <i class="fa-solid fa-address-book"></i>
        Your Contact List
      </h1>
      <div className="container">
        <ul type="none" className="contact-list">
          {
            // console.log(contactList)
            contactList.map((contactItem, index) => {
              return (
                <li key={index}>
                  <div className="details-container">
                    <span>
                      <i className="fa-solid fa-user"></i>
                      {contactItem.name}
                    </span>
                    <span>{contactItem.contact}</span>
                  </div>

                  <a onClick={() => { handleDelete(index) }} className="delete-btn">
                    <i class="fa-sharp fa-solid fa-xmark" ></i>
                  </a>
                </li>
              )
            })
          }


        </ul>
      </div>

      <form >
        <div className="input-box">
          <input className="input-name" type="text" placeholder="Enter name" value={name} required name="name" onChange={(e) => setName(e.target.value)} />
          <input className="input-phone" type="number" placeholder="Enter Phone" value={contact} required name="phone" onChange={(e) => setContact(e.target.value)} />
        </div>

        <button onClick={handleSubmit} className="add-btn" type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
