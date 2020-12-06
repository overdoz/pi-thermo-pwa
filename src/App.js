import React, {Component} from 'react'
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



    onChangeHandler = event => {
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
            console.log((this.state.text));
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
                <h1>Hello <br/>Stranger</h1>
                <section className={"text-page"}>
                    {/*<div className={"arrow-up"}/>*/}
                    <div className={"child"}>
                        {/*<img src={paper} alt={"papier"}/>*/}
                        <form method="POST" action="/">
                            <textarea name={"text"} wrap={"hard"} cols={"29"} className={"textField textarea resize-ta"}
                                      value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}
                                      placeholder={"Leave us a note..."}/>
                        </form>
                        <div className={"date"}>
                            <p>2020-04-20 16:20:23</p>
                        </div>
                    </div>
                    <div className={"down"}>
                        <p>Photo Upload</p>
                        <i className="gg-arrow-down arrow1"></i>
                    </div>
                </section>
                <section className={"pic-page"}>
                    <div className={"child"}>
                        {/*<img src={paper} alt={"papier"}/>*/}
                        <h2>Print a photo</h2>
                        <form method="POST" action="" encType='multipart/form-data'>
                            <input className={"upload"} uwfileinput type="file" accept={".jpeg,.jpg,.png,.gif"}
                                   capture={"camera"} name={"file"} onChange={this.onChangeHandler}/>
                        </form>
                    </div>
                </section>
                <input className={"inputButton"} type="submit" value="print" onClick={this.onClickHandler}/>
            </div>
        )
    }
}

export default App