import React, { useEffect } from 'react';
import Textarea from "react-expanding-textarea";
import { deleteText, changeText }  from './textSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function TextSheet() {

    const dispatch = useDispatch();
    const domID = "clock";

    useEffect(() => {
        let tick = setInterval(() => {
            document.getElementById(domID).innerText = getFormattedDate();
        }, 1000)

        return function cleanUp() {
            clearInterval(tick);
        }
    }, [])



    return (
        <div className={"page__shape page__shape--text"}>
            <Textarea
                className="form__textarea"
                id="form__textarea"
                maxLength="3000"
                name="pet[notes]"
                onChange={e => dispatch(changeText(e.target.value))}
                placeholder="Leave us a note..."
            />
            <div className={"page__date"}>
                <p id={domID}>{getFormattedDate()}</p>
            </div>
        </div>
    );
}

const getFormattedDate = () => {
    let date = new Date;
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth()+1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let hour = ('0' + date.getHours()).slice(-2);
    let min = ('0' + date.getMinutes()).slice(-2);
    let sec = ('0' + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

