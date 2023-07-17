import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

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
    const state = useSelector((state) => state["count-reducer"]);
    const ref = useRef();
    const lines = text.split("\n");
    //console.info({ lines });
    const length = lines.length;
    const array = lines.map((_, index) => (
        <Line key={index} text={index + 1} />
    ));

    let style = {};

    // set count  same font size of #editor
    useEffect(() => {
        const size = parseInt(
            window.getComputedStyle(document.getElementById("editor")).fontSize
        );
        // console.info({ size });
        ref.current.style.fontSize = size + "px";
    });

    // update scroll top
    useEffect(() => {
        ref.current.scrollTop = state.scrollTop;
    }, [state.scrollTop]);

    return (
        <article style={style} id="count" ref={ref}>
            {array}
        </article>
    );
}

export default Count;
