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

    setStates = (e) => {
        this.setState({selectedFile: e});
        this.setState({objectURL: URL.createObjectURL(e.target.files[0])});
        console.log(this.state.objectURL)
    }




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
                            <PhotoSheet path={this.state.objectURL} onchange={this.setStates}/>
                        </Route>
                    </Switch>
                    <div className={"footer__indicator"}>
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
