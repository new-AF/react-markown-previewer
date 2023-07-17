import { useRef } from "react";

import "./Controls-Button.css";

function Button({ text, imagePath }) {
    // get reference to current object
    const ref = useRef(null);
    const backgroundSize = "1rem";

    const style = {
        backgroundImage: `url(${imagePath}`,
        backgroundSize: backgroundSize,
        /* move the text below the icon, only if there is text */
        paddingTop: text === undefined ? 0 : `calc(${backgroundSize} + 0.5rem)`,
    };
    return (
        <button className="button" style={style} ref={ref}>
            {text}
        </button>
    );
}

export default Button;
