import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import "./Controls-Button.css";

/* download = true/false */
function Button({ text, imagePath, download }) {
    const textSliceState = useSelector((state) => state["text-slice"]);

    // get reference to current object
    const ref = useRef(null);

    const defaultClassName = "button-image";
    const hoverClassName = "global-button-hover";
    const [buttonClassName, setButtonClassName] = useState(defaultClassName);

    const style = {};

    function onMouseEnter() {
        setButtonClassName((prev) => `${defaultClassName} ${hoverClassName}`);
    }

    function onMouseLeave() {
        setButtonClassName((prev) => `${defaultClassName}`);
    }

    function onClick() {
        const text = textSliceState.input;
        const content = `data:text/plain;charset=utf-8,${encodeURIComponent(
            text
        )}`;
        const downloadElement = document.getElementById("controls-download");
        downloadElement.href = content;
        downloadElement.download = "file.txt";
        downloadElement.click();
    }

    return (
        <div
            className="button"
            style={style}
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={download === true ? onClick : undefined}
        >
            <img className={buttonClassName} src={imagePath} />
            <span className="button-text">{text}</span>
        </div>
    );
}

export default Button;
