import React, { useState } from 'react';
import './App.css';

function App() {
  const w = "             W \n            WWW\n            WWW\n           WWWWW\n     W     WWWWW     W\n     WWW   WWWWW   WWW\n      WWW  WWWWW  WWW\n       WWW  WWW  WWW\n        WWW WWW WWW\n          WWWWWWW\n       WWWW  |  WWWW\n             |\n             |\n"

  const [text, setText] = useState("");

 
  return (
    <div className="App">
        <form method="POST" action="/">
            <textarea name ={"text"} wrap={"hard"} cols={"30"} className={"textField"} value={text} onChange={(e) => setText(e.target.value)} placeholder={"Teile uns etwas mit... \n\n" + w + "\n\nSei kreativ :) \n\n ┏(-_-)┛┗(-_-﻿ )┓┗(-_-)┛"} />
            <input className={"inputButton"} type="submit" value="submit" />
        </form>
    </div>
  );
}

export default App;
