
import './App.css';

function App() {
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

              </span>
              <span></span>
            </div>

            <a href="/delete_contact/?id=<%=i._id%>" className="delete-btn">
              <i class="fa-sharp fa-solid fa-xmark" ></i>
            </a>
          </li>

        </ul>
      </div>

      <form action="/add_contact" method="post">
        <div className="input-box">
          <input className="input-name" type="text" placeholder="Enter name" required name="name" />
          <input className="input-phone" type="number" placeholder="Enter Phone" required name="phone" />
        </div>

        <button className="add-btn" type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
