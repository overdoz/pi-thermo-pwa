import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changePhoto, selectPhotoPath } from "./photoSlice";


export default function PhotoSheet() {

    const dispatch = useDispatch()
    const photoPath = useSelector(selectPhotoPath)


    return (
        <div className={"page__shape page__shape--photo"}>
            {photoPath ? <img alt={"preview"} className={"page__photo"} src={photoPath}/> : null}
            <form method="POST" action="" encType='multipart/form-data'>
                <i className="page__arrow page__arrow--right"/>
                <label htmlFor="form__upload">{photoPath ? "Change" : "Choose"} photo...</label>
                <input className={"form___upload"} uwfileinput type="file" accept={".jpeg,.jpg,.png,.gif"} id="form__upload"
                       capture={"camera"} name={"file"} onChange={e => dispatch(changePhoto(e))}/>
                <i className="page__arrow page__arrow--left"/>
            </form>
        </div>
    );
}


