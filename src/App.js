import React, {Component} from 'react'
import './App.css'
import TextSheet from "./textpage/TextSheet";
import {
    Switch,
    Route,
    Link, withRouter, useLocation
} from "react-router-dom";
import PhotoSheet from "./photopage/PhotoSheet";
import PrintButton from "./components/PrintButton";
import fontIcon from './assets/font.svg';
import photoIcon from './assets/picture.svg';
import {CSSTransition, TransitionGroup} from "react-transition-group";




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Stranger",
        }
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Zufälligen Index von 0 bis i wählen
            [array[i], array[j]] = [array[j], array[i]]; // Elemente tauschen
        }
    }


    componentDidMount() {
        this.animateName();
    }

    animateName = () => {
        let count = 0;
        const names = ["Ola", "Thanh", "Mary", "Sammy", "Stranger"];
        this.shuffle(names)
        setInterval(() => {
            count = (count + 1) % names.length;
            let name = document.getElementById("header__name");
            try {
                name.innerText = names[count]
            } catch (e) {
                console.log(e)
            }
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
                <h1>Moin <span id={"header__name"}>{this.state.name}</span></h1>

                <section>
                   {/*<AnimatedSwitch/>*/}
                    <Switch>
                        <Route exact path="/">
                            <TextSheet/>
                        </Route>
                        <Route path="/photo">
                            <PhotoSheet/>
                        </Route>
                    </Switch>



                    <div className={"footer__indicator"}>
                        <nav>
                            <ul className={"footer__navigation"}>
                                <li>
                                    <Link to="/"><img alt={"TextLink"} src={fontIcon}/></Link>
                                </li>
                                <li>
                                    <PrintButton/>
                                </li>
                                <li>
                                    <Link to="/photo"><img alt={"PhotoLink"} src={photoIcon}/></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>


            </div>
        )
    }
}

const AnimatedSwitch = () => {
    let location = useLocation();
    return (
    <TransitionGroup >
        <CSSTransition
            in
            //className={"expand"}
            key={location.key}
            classNames="alert"
            timeout={500}
            unmountOnExit
        >
            <Switch location={location}>
                <Route exact path='/' component={TextSheet} />
                <Route path='/photo' component={PhotoSheet} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
)};

export default App
