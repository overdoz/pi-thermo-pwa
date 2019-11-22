import React, { Component } from 'react'
import './App.css'
import axios from 'axios';
import paper from './white-construction-paper-texture.jpg';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
        //console.log(this.state.selectedFile);
    };

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8000/upload", data, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(res.statusText)
        })
    };

    render() {
        return (
            <section className={"child pic-page"}>
                <img src={paper} alt={"papier"}/>
                <h2>Print your uploaded photo</h2>
                <form method="POST" action="http://localhost:8000/upload" encType='multipart/form-data'>
                    <input className={"upload"} type={"file"} accept={"image/*"} capture={"camera"} name={"file"} onChange={this.onChangeHandler} />
                    <input className={"inputButton"} type="submit" value="print" onClick={this.onClickHandler}/>
                </form>
            </section>
        )
    }
}

export default FileUpload