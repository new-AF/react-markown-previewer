import { useRef, useEffect } from "react";

import "./Count.css";

function Line({ key, text }) {
    return (
        <span className="count-li" key={key}>
            {text}
        </span>
    );
}

/* line numbers */
function Count({ text }) {
    const ref = useRef();
    const lines = text.split("\n");
    //console.info({ lines });
    const length = lines.length;
    const array = lines.map((_, index) => (
        <Line key={index} text={index + 1} />
    ));

    // same font size as #editor
    let style = {};
    useEffect(() => {
        const size = parseInt(
            window.getComputedStyle(document.getElementById("editor")).fontSize
        );
        console.info({ size });
        ref.current.style.fontSize = size + "px";
    });

    return (
        <article style={style} id="count" ref={ref}>
            {array}
        </article>
    );
}

export default Count;
