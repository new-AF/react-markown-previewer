import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import "./Controls-Button.css";

/* download = true/false */
function Button({
    id,
    text,
    imagePath,
    download,
    downloadFunction,
    hideText,
    onClick,
}) {
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
        <button
            id={id}
            className="button"
            style={style}
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={download === true ? onClickDownload : onClick}
        >
            {/* support multiple icons */}
            <div className="button-icons">
                {(Array.isArray(imagePath) ? imagePath : [imagePath]).map(
                    (str, index) => (
                        <img
                            key={index}
                            className={buttonClassName}
                            src={str}
                        />
                    )
                )}
            </div>
            {hideText === true ? undefined : (
                <span className="button-text">{text}</span>
            )}
        </button>
    );
}

export default Button;
