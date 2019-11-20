import React, { useState } from 'react';
import './App.css';

function App() {

    const [text, setText] = useState("");
  return (
    <div className="App">
        <form method="POST" action="/">
{/*
            <input align={"top"} className={"textField"} name="text" type="text" value={text} placeholder="Hier könnte ihre Werbung stehen:" onChange={(e) => setText(e.target.value)} />
*/}
            <textarea wrap={"hard"} cols={"30"} className={"textField"} value={text} onChange={(e) => setText(e.target.value)} />
            <input className={"inputButton"} type="submit" value="submit" />
        </form>
    </div>
  );
}

export default App;
