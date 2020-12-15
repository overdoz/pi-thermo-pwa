import React, { useState } from 'react';
import CanvasDraw from "react-canvas-draw";


export default function CanvasSheet() {
    //this.loadableCanvas = React.createRef();
    const [objectURL, setURL] = useState("");

    return (
        <CanvasDraw
            id={"canvas"}
            lazyRadius={0}
            hideGrid
            // ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
            saveData={localStorage.getItem("savedDrawing")}
        />
    );
}
