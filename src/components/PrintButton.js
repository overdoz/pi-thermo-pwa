import React from 'react';
import { useSelector } from 'react-redux';
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
            console.log(text)

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
                console.log("send Text")
                console.log(res.statusText)
            });
        }else if (location === "/photo") {
            const data = new FormData();
            console.log(photo)
            data.append('file', photo);
            axios.post("/", data, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                params: {
                    type: 'files'
                }
            }).then(res => { // then print response status
                console.log("send Photo")

                console.log(res.statusText)
            });
        } else {
            console.log("Couldn't send photo...")
        }
    }

    return (
        <input id={"print-button"} className={"footer__button"} type="submit" value="print" onClick={onClickHandler}/>
    );
}
