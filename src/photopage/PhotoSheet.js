import React, { useState } from 'react';


export default function Photosheet() {
    // Declare a new state variable, which we'll call "count"
    const [objectURL, setURL] = useState("");

    return (
        <div className={"page__shape page__shape--photo"}>
            {objectURL ? <img alt={"preview"} className={"page__photo"} src={objectURL}/> : null}
            <form method="POST" action="" encType='multipart/form-data'>
                <i className="page__arrow page__arrow--right"/>
                <label htmlFor="form__upload">{objectURL ? "Change" : "Choose"} photo...</label>
                <input className={"form___upload"} uwfileinput type="file" accept={".jpeg,.jpg,.png,.gif"} id="form__upload"
                       capture={"camera"} name={"file"} onChange={e => setURL(getURL(e))}/>
                <i className="page__arrow page__arrow--left"/>
            </form>
        </div>
    );
}

function getURL(event) {
    return URL.createObjectURL(event.target.files[0])
}