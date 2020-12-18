import React, { useState } from 'react';
import Textarea from "react-expanding-textarea";
import { deleteText, changeText }  from './textSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function TextSheet() {
    // Declare a new state variable, which we'll call "count"
    // const [text, setText] = useState("");
    const dispatch = useDispatch()

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
                <p>2020-04-20 16:20:23</p>
            </div>
        </div>
    );
}

