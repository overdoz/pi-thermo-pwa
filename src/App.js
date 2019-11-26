import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import paper from './white-construction-paper-texture.jpg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            text: ""
        }

    }


    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0]

        });
    };

    onClickHandler = () => {
        if (this.state.text !== "" && this.state.selectedFile === null) {
            console.log("sent text");
            axios({
                method: 'post',
                url: '/',
                data: {
                    Text: this.state.text
                },
                headers: {
                    'Content-Type': "application/json"
                },
                params: {
                    type: 'text'
                },

            }).then(res => { // then print response status
                console.log(res.statusText)
            });
            console.log((this.state.text))
            this.setState({text: ""});
        } else if (this.state.text === "" && this.state.selectedFile !== null) {
            console.log("sent pic");
            const data = new FormData();

            data.append('file', this.state.selectedFile);
            axios.post("/", data, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                params: {
                    type: 'files'
                }
            }).then(res => { // then print response status
                console.log(res.statusText)
            });
            this.setState({selectedFile: null});
        } else {
            this.setState({text: ""});
            this.setState({selectedFile: null});
            console.log("Couldn't send shit...")
        }
    };

    render() {
        const w = "             W \n            WWW\n            WWW\n           WWWWW\n     W     WWWWW     W\n     WWW   WWWWW   WWW\n      WWW  WWWWW  WWW\n       WWW  WWW  WWW\n        WWW WWW WWW\n          WWWWWWW\n       WWWW  |  WWWW\n             |\n             |\n"

        return (
            <div className="App container">
                <section className={"child text-page"}>
                    <img src={paper} alt={"papier"}/>
                    <form method="POST" action="/">
                        <textarea name={"text"} wrap={"hard"} cols={"29"} className={"textField"} value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} placeholder={"Leave us a note... \n\n" + w + "\n ┏(-_-)┛┗(-_-﻿ )┓┗(-_-)┛\n\n  be creative :) \n    or die tryin \n\n "} />
                    </form>
                </section>
                <section className={"child pic-page"}>
                    <img src={paper} alt={"papier"}/>
                    <h2>Print your uploaded photo</h2>
                    <form method="POST" action="" encType='multipart/form-data'>
                        <input className={"upload"} uwfileinput type="file" accept={".jpeg,.jpg,.png,.gif"} capture={"camera"} name={"file"} onChange={this.onChangeHandler} />
                    </form>
                </section>
                <input className={"inputButton"} type="submit" value="print" onClick={this.onClickHandler} />
            </div>
        )
    }
}

export default App