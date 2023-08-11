import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactList, setContactList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(contact);
    contactList.push({
      name,
      contact
    })
    setContactList({
      contactList
    });

  }


  return (
    <>
      <h1 className="heading">
        <i class="fa-solid fa-address-book"></i>
        Your Contact List
      </h1>
      <div className="container">
        <ul type="none" className="contact-list">

          <li>
            <div className="details-container">
              <span>
                <i className="fa-solid fa-user"></i>
                chomu
              </span>
              <span>7053541786</span>
            </div>

            <a href="/delete_contact/?id=<%=i._id%>" className="delete-btn">
              <i class="fa-sharp fa-solid fa-xmark" ></i>
            </a>
          </li>

        </ul>
      </div>

      <form >
        <div className="input-box">
          <input className="input-name" type="text" placeholder="Enter name" required name="name" onChange={(e) => setName(e.target.value)} />
          <input className="input-phone" type="number" placeholder="Enter Phone" required name="phone" onChange={(e) => setContact(e.target.value)} />
        </div>

        <button onClick={handleSubmit} className="add-btn" type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
