import { useRef, useEffect, useState, forwardRef } from "react";
import { useSelector } from "react-redux";

import "./LineNumbers.css";

import Line from "./LineNumbers-Line.jsx";

/* line numbers */
function OriginalLineNumbers({ text, fontSize, width, passedRef }) {
    const state = useSelector((state) => state["count-reducer"]);

    const style = {};
    const elements = text
        .split("\n")
        .map((text, index) => (
            <Line
                key={index}
                countText={index + 1}
                textLength={text.length}
                fontSize={fontSize}
                width={width}
            />
        ));
    return (
        <article style={style} id="count" ref={passedRef}>
            {elements}
        </article>
    );
}

function makeComponent(props, ref) {
    return <OriginalLineNumbers {...props} passedRef={ref} />;
}
const LineNumbers = forwardRef(makeComponent);

export default LineNumbers;
