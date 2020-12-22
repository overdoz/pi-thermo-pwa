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
        this.state = {
            name: "Stranger",
        }
    }

    componentDidMount() {
        this.animateName();
    }

    animateName = () => {
        let count = 0;
        const names = ["Annalena", "Mary", "Sepp", "Thanh", "Stranger"];
        setInterval(() => {
            count = (count + 1) % names.length;
            let name = document.getElementById("header__name");
            name.innerText = names[count]
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
                            <PhotoSheet />
                        </Route>
                    </Switch>
                    <div className={"footer__indicator"}>
                        <nav>
                            <ul className={"footer__navigation"}>
                                <li>
                                    <Link to="/"><img alt={"TextLink"} src={fontIcon} /></Link>
                                </li>
                                <li>
                                    <PrintButton/>
                                </li>
                                <li>
                                    <Link to="/photo"><img alt={"PhotoLink"} src={photoIcon} /></Link>
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
