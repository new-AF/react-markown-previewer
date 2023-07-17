import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Count.css";

function Line({ countText, textLength, fontSize, width }) {
    /* if lineLength > width, simulate wrap around by padding top */
    const textWidth = textLength * fontSize;
    const linesCount = Math.ceil(textWidth / width);
    const paddingBottom = linesCount > 1 ? linesCount * fontSize : 0;

    console.info({ countText, textLength, width, textWidth, linesCount });

    const style = { fontSize: fontSize, paddingBottom: paddingBottom };

    return (
        <span className="count-li" style={style}>
            {countText}
        </span>
    );
}

/* line numbers */
function Count({ text }) {
    const state = useSelector((state) => state["count-reducer"]);
    const ref = useRef(undefined);
    const style = {};
    const fontSize = 13.3333;
    const elements = text
        .split("\n")
        .map((text, index) => (
            <Line
                countText={index + 1}
                textLength={text.length}
                fontSize={fontSize}
                width={181}
            />
        ));
    return (
        <article style={style} id="count" ref={ref}>
            {elements}
        </article>
    );
}

export default Count;
