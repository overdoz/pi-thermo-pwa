import React, { useState } from 'react';
import './App.css';
import paper from './white-construction-paper-texture.jpg';
import FileUpload from "./FileUpload";


function App() {
  const w = "             W \n            WWW\n            WWW\n           WWWWW\n     W     WWWWW     W\n     WWW   WWWWW   WWW\n      WWW  WWWWW  WWW\n       WWW  WWW  WWW\n        WWW WWW WWW\n          WWWWWWW\n       WWWW  |  WWWW\n             |\n             |\n"

  const [text, setText] = useState("");


 
  return (
    <div className="App container">
        <section className={"child text-page"}>
            <img src={paper} alt={"papier"}/>
            <form method="POST" action="/">
                <textarea name ={"text"} wrap={"hard"} cols={"30"} className={"textField"} value={text} onChange={(e) => setText(e.target.value)} placeholder={"Leave us a note... \n\n" + w + "\n ┏(-_-)┛┗(-_-﻿ )┓┗(-_-)┛\n\n  be creative :) \n    or die tryin \n\n "} />
                <input className={"inputButton"} type="submit" value="print" />
            </form>
        </section>
        <FileUpload />
    </div>
  );
}

export default App;
