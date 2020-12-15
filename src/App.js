import React, {Component} from 'react'
import './App.css'
import axios from 'axios';
import Textarea from 'react-expanding-textarea'
import CanvasDraw from "react-canvas-draw";
import TextSheet from "./textpage/TextSheet";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Photosheet from "./photopage/PhotoSheet";
import CanvasSheet from "./canvaspage/CanvasSheet";


class App extends Component {
    constructor(props) {
        super(props);
        this.loadableCanvas = React.createRef();
        this.state = {
            selectedFile: null,
            objectURL: "",
            text: "",
            name: "Stranger",
            names: ["Annalena", "Mary", "Sepp", "Thanh", "Stranger"],
            scrollY: window.scrollY,
            canvas: null
        }
    }

    componentDidMount() {
        // document.getElementById("form__textarea").focus();
        // window.addEventListener('scroll', (event) => {
        //     this.setState({scrollY: window.scrollY});
        //     console.log(this.state.scrollY);
        //     console.log(1.0 / ((Math.pow(window.scrollY, 2) * 40)));
        //  });
        this.animateName();
    }

    animateName = () => {
        let count = 0;
        setInterval(() => {
            count = (count + 1) % this.state.names.length;
            this.setState({name: this.state.names[count]})
        }, 2000)
    };


    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            objectURL: URL.createObjectURL(event.target.files[0])
        });
    };

    onClickHandler = () => {
        let image = this.loadableCanvas.canvasContainer.children[0].toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


        // const canvas = document.getElementById('my-canvas');
        // canvas.toBlob(function(blob) {
        //     const formData = new FormData();
        //     formData.append('my-file', blob, 'filename.png');
        //
        //     // Post via axios or other transport method
        //     axios.post('/api/upload', formData);
        // });

        console.log(this.state.selectedFile);
        console.log(image);

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

    scrollOpacity = () => {

    };

    render() {


        return (
            <Router>
            <div id={"app"}>
                <h1>Hello <br/>{this.state.name}</h1>
                <section>

                    <Switch>
                        <Route path="/draw">
                            <CanvasSheet/>
                        </Route>
                        <Route path="/photo">
                            <Photosheet/>
                        </Route>
                        <Route path="/">
                            <TextSheet/>
                        </Route>
                    </Switch>
                    <div className={"footer__indicator"} style={{opacity: 1.0 / Math.pow(this.state.scrollY, 2) * 200}}>
                        {/*<p>Photo Upload</p>*/}
                        {/*<i className="page__arrow page__arrow--down"/>*/}
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Text</Link>
                                </li>
                                <li>
                                    <Link to="/draw">Drawing</Link>
                                </li>
                                <li>
                                    <Link to="/photo">Photo</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
           
                <input className={"footer__button"} type="submit" value="print" onClick={this.onClickHandler}/>
            </div>
            </Router>
        )
    }
}

export default App
