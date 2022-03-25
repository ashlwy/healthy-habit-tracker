import React from "react";
import "./App.css";
import AccountPage from "./AccountPage";

function App() {
  return (
    <AccountPage/>
    /* <div>
      <header className="App-header">
        <img
          style={{
            borderRadius: "50%",
            display: "block",
            background: `url('https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png') black`,
            backgroundPosition: "center",
            backgroundSize: "auto 80px",
          }}
          className="profileP"
          src={profilepic}
          alt=""
        />
        <p>Account Information</p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Potato"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about a great starch, the potato.
        </a>
      </header>

      <ul className="account">
        <li>
          <InfoSection title="General" info={generalInfo} />
        </li>
        <li>
          <InfoSection title="Measurements" info={measurementInfo} />
        </li>
        <li>
          <InfoSection title="Address" info={addressInfo} />
        </li>
      </ul>
    </div> */
  );
}

export default App;
