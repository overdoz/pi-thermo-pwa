import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {selectPhotoFile} from "../photopage/photoSlice";
import {seletTextValue} from "../textpage/textSlice";

export default function PrintButton() {
    const location = useLocation().pathname;
    const text = useSelector(seletTextValue);
    const photo = useSelector(selectPhotoFile);


    function onClickHandler() {

        if (location === "/") {
            console.log("sent text");
            axios({
                method: 'post',
                url: '/',
                data: {
                    Text: text
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
        }

        if (location === "/photo") {
            const data = new FormData();

            data.append('file', photo);
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
        } else {
            console.log("Couldn't send shit...")
        }
    }

    return (
        <input className={"footer__button"} type="submit" value="print" onClick={onClickHandler}/>
    );
}

// export class PrinterButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//
//         };
//         this.payload = null;
//
//     }
//
//     checkLocation = () => {
//         const location = useLocation().pathname;
//         if (location === "/") {
//             this.payload = useSelector(seletTextValue);
//         }
//
//         if (location === "/photo") {
//             this.payload = useSelector(selectPhotoFile);
//         }
//     }
//
//     onClickHandler = () => {
//         this.checkLocation();
//
//         if (this.location === "/") {
//             console.log("sent text");
//             axios({
//                 method: 'post',
//                 url: '/',
//                 data: {
//                     Text: this.payload
//                 },
//                 headers: {
//                     'Content-Type': "application/json"
//                 },
//                 params: {
//                     type: 'text'
//                 },
//             }).then(res => { // then print response status
//                 console.log(res.statusText)
//             });
//         }
//
//         if (this.location === "/photo") {
//             const data = new FormData();
//
//             data.append('file', this.payload);
//             axios.post("/", data, {
//                 headers: {
//                     'Content-Type': "multipart/form-data"
//                 },
//                 params: {
//                     type: 'files'
//                 }
//             }).then(res => { // then print response status
//                 console.log(res.statusText)
//             });
//         } else {
//             console.log("Couldn't send shit...")
//         }
//     }
//
//
//     render() {
//         return (
//             <input className={"footer__button"} type="submit" value="print" onClick={this.onClickHandler}/>
//         );
//     }
//
// }



