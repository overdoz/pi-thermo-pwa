import React, {Component} from 'react'
import './App.css'
import TextSheet from "./textpage/TextSheet";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import PhotoSheet from "./photopage/PhotoSheet";
import PrintButton from "./components/PrintButton";
import fontIcon from  './assets/font.svg';
import photoIcon from  './assets/picture.svg';


class App extends Component {
    constructor(props) {
        super(props);
        // this.loadableCanvas = React.createRef();
        this.state = {
            selectedFile: null,
            objectURL: "",
            text: "",
            name: "Stranger",
            names: ["Annalena", "Mary", "Sepp", "Thanh", "Stranger"],
            // scrollY: window.scrollY,
            canvas: null
        }
    }

    componentDidMount() {
        this.animateName();
    }

    animateName = () => {
        let count = 0;
        setInterval(() => {
            count = (count + 1) % this.state.names.length;
            let name = document.getElementById("header__name");
            name.innerText = this.state.names[count]
            // this.setState({name: this.state.names[count]})
        }, 2000)
    };



    // onClickHandler = () => {
    //     let image = this.loadableCanvas.canvasContainer.children[0].toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    //
    //
    //     console.log(this.state.selectedFile);
    //     console.log(image);
    //
    //     if (this.state.text !== "" && this.state.selectedFile === null) {
    //         console.log("sent text");
    //         axios({
    //             method: 'post',
    //             url: '/',
    //             data: {
    //                 Text: this.state.text
    //             },
    //             headers: {
    //                 'Content-Type': "application/json"
    //             },
    //             params: {
    //                 type: 'text'
    //             },
    //
    //         }).then(res => { // then print response status
    //             console.log(res.statusText)
    //         });
    //         console.log((this.state.text));
    //         this.setState({text: ""});
    //     } else if (this.state.text === "" && this.state.selectedFile !== null) {
    //         console.log("sent pic");
    //         const data = new FormData();
    //
    //         data.append('file', this.state.selectedFile);
    //         axios.post("/", data, {
    //             headers: {
    //                 'Content-Type': "multipart/form-data"
    //             },
    //             params: {
    //                 type: 'files'
    //             }
    //         }).then(res => { // then print response status
    //             console.log(res.statusText)
    //         });
    //         this.setState({selectedFile: null});
    //     } else {
    //         this.setState({text: ""});
    //         this.setState({selectedFile: null});
    //         console.log("Couldn't send shit...")
    //     }
    // };


    render() {
        return (
            <div id={"app"}>
                <h1>Hello <br/><span id={"header__name"}>{this.state.name}</span></h1>

                <section>
                    <Switch>
                        <Route exact path="/">
                            <TextSheet/>
                        </Route>
                        <Route path="/photo">
                            <PhotoSheet/>
                        </Route>
                    </Switch>
                    <div className={"footer__indicator"} style={{opacity: 1.0 / Math.pow(this.state.scrollY, 2) * 200}}>
                        <nav>
                            <ul className={"footer__navigation"}>
                                <li>
                                    <Link to="/"><img src={fontIcon} /></Link>
                                </li>
                                <li>
                                    <PrintButton/>
                                </li>
                                <li>
                                    <Link to="/photo"><img src={photoIcon} /></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>


            </div>
        )
    }
}

export default App
