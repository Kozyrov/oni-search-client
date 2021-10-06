import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import oniClientAuth from "./services/oni-client-auth";
import './App.css';


const processAuth = (oniAuth) => {
  const _url = new URL(window.location.href);
  console.log(`url: ${_url}`);
  launchAuthDialogue(oniAuth.authorization_url);
}

const launchAuthDialogue = (url) => {
  window.location.replace(url);
}

function App() {
  const [_oniAuth] = useState(new oniClientAuth());
  const [accessCode] = useState("");

  useEffect(() => {
    processAuth(_oniAuth);
  }, [accessCode, _oniAuth]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
