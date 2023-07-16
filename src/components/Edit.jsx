import { React, useRef } from "react";

import boldIconPath from "../assets/bold-solid.svg";

import "./Controls.css";
import "./Button.css";
import "./Edit.css";
import "./Count.css";

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
/* line numbers */
function Count({ text }) {
    const ref = useRef(null);

    const lines = text.split("\n");
    //console.info({ lines });
    const length = lines.length;
    const array = lines.map((_, index) => (
        <span className="count-li" key={index}>
            {index + 1}
        </span>
    ));

    // same font size as #editor
    const style = {};
    if (ref.current !== null) {
        style.fontSize = parseInt(
            window.getComputedStyle(ref.current).fontSize
        );
    }
    return (
        <article style={style} id="count" ref={ref}>
            {array}
        </article>
    );
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
            <Count text={textInput}></Count>
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
