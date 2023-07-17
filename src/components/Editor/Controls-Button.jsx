import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import "./Controls-Button.css";

/* download = true/false */
function Button({ text, imagePath, download, downloadFunction }) {
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
    function onClickDownload() {
        const [content, fileName] = downloadFunction();
        if (content === undefined || fileName === undefined) {
            return;
        }
        const downloadElement = document.getElementById("controls-download");
        downloadElement.href = content;
        downloadElement.download = fileName;
        downloadElement.click();
    }
    return (
        <div
            className="button"
            style={style}
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={download === true ? onClickDownload : undefined}
        >
            <img className={buttonClassName} src={imagePath} />
            <span className="button-text">{text}</span>
        </div>
    );
}

export default Button;
