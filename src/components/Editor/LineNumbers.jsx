import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./LineNumbers.css";

import Line from "./LineNumbers-Line.jsx";

/* line numbers */
function LineNumbers({ text }) {
    const state = useSelector((state) => state["count-reducer"]);
    const ref = useRef(undefined);
    const style = {};
    const fontSize = 13.3333;
    const elements = text
        .split("\n")
        .map((text, index) => (
            <Line
                key={index}
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

export default LineNumbers;
