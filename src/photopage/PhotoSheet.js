import React from 'react';
import cancel from '../assets/cancel.svg'
import store from "../store";
import { useSelector, useDispatch } from 'react-redux'
import { changePhoto, selectPhotoPath, deletePhoto } from "./photoSlice";


const Delete = (e) => {
    e.preventDefault();
    store.dispatch(deletePhoto)
    // console.log(e)
};

export default function PhotoSheet() {

    const dispatch = useDispatch();
    const photoPath = useSelector(selectPhotoPath);



    return (
        <div className={"page__shape page__shape--photo"}>



            {photoPath ?
                <img alt={"preview"} className={"page__photo"} src={photoPath}/>
                : null}

            {/*{photoPath ?*/}
            {/*    <button className={"close-button"} type="reset" onClick={e => Delete(e)}>*/}
            {/*        <img className={"close-button-icon"} src={cancel} alt={"cancel"}/>*/}
            {/*    </button>*/}
            {/*    : null}*/}
            <form method="POST" action="" encType='multipart/form-data'>
                <div className={"photo_input"}>
                <i className="page__arrow page__arrow--right"/>
                <label htmlFor="form__upload">{photoPath ? "Change" : "Choose"} photo...</label>
                <input className={"form___upload"} type="file" accept={".jpeg,.jpg,.png,.gif"} id="form__upload"
                       capture={"camera"} name={"file"} onChange={e => dispatch(changePhoto(e))}/>
                <i className="page__arrow page__arrow--left"/>
                </div>
            </form>
        </div>
    );
}


