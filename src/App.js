import React, {Component} from 'react'
import './App.css'
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            text: "",
            name: "Stranger",
            names: ["Annalena", "Mary", "Sepp", "Thanh", "Stranger"]
        }
    }

    componentDidMount() {
        document.getElementById("form__textarea").focus();
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
        return (
            <div className="app">
                <h1>Hello <br/>{this.state.name}</h1>
                <section>
                    <div className={"page__shape"}>
                        <form method="POST" action="/">
                            <textarea name={"text"} wrap={"hard"} cols={"29"} className={"form__textarea"} id={"form__textarea"}
                                      value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}
                                      placeholder={"Leave us a note..."}/>
                        </form>
                        <div className={"page__date"}>
                            <p>2020-04-20 16:20:23</p>
                        </div>
                    </div>
                    <div className={"footer__indicator"}>
                        <p>Photo Upload</p>
                        <i className="page__arrow page__arrow--down"/>
                    </div>
                </section>
                <section>
                    <div className={"page__shape"}>
                        <h2>Print a photo</h2>
                        <form method="POST" action="" encType='multipart/form-data'>
                            <i className="page__arrow page__arrow--right"/>
                            <label htmlFor="form__upload">Choose photo...</label>
                            <input className={"form___upload"} uwfileinput type="file" accept={".jpeg,.jpg,.png,.gif"} id="form__upload"
                                   capture={"camera"} name={"file"} onChange={this.onChangeHandler}/>
                            <i className="page__arrow page__arrow--left"/>
                        </form>
                    </div>
                </section>
                <input className={"footer__button"} type="submit" value="print" onClick={this.onClickHandler}/>
            </div>
        )
    }
}

export default App