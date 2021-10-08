import React, { useEffect, useState } from 'react';
import oniAuth from "./services/oni-client-auth";
import './App.css';


const launchAuthDialogue = (url) => {
    window.location.replace(url);
}

function App() {
    const [_oniAuth] = useState(oniAuth);

    useEffect(() => {
        const processAuth = (oniAuth) => {
            const _url = new URL(window.location.href);
            console.log(`url: ${_url}`);
            launchAuthDialogue(oniAuth.authorization_url);
        }

        processAuth(_oniAuth);
    }, [_oniAuth]);

    return (
    <div className="App">
        <header className="App-header">
            placeholder
        </header>
    </div>
  );
}

export default App;
