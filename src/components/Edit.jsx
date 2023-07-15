import { React, useRef } from "react";
import boldIconPath from "../assets/bold-solid.svg";

import "./Controls.css";
import "./Button.css";

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

function Controls({ children }) {
    return <section id="controls">{children}</section>;
}

const Edit = (props) => {
    function onFocus(event) {}
    const {
        id,
        headerId,
        textareaId,

        style,
        headerStyle,
        textareaStyle,

        input: textInput,
        onchange,
    } = props;

    return (
        <div id={id} style={style}>
            <h2 id={headerId} style={headerStyle}>
                Editor
            </h2>
            <Controls>
                <Button imagePath={boldIconPath} text="Bold" />
            </Controls>
            <textarea
                id={textareaId}
                style={textareaStyle}
                value={textInput}
                onChange={onchange}
            />
        </div>
    );
};
export default Edit;
