import React from "react";
import { useSelector } from "react-redux";

import "./Preview.css";

const Preview = (props) => {
    const state = useSelector((state) => state["text-slice"]);
    const {
        id,
        headerId,
        contentId,

        style,
    } = props;

    const boxStyle = {
        ...style,
    };
    const titleStyle = {};

    const contentStyle = {};
    //innerHTML substitute
    const contentStyle2 = {
        __html: state.output,
    };
    const jsx = (
        <div id={id} style={boxStyle}>
            <h2 id={headerId} style={titleStyle}>
                Viewer
            </h2>
            <div
                id={contentId}
                style={contentStyle}
                dangerouslySetInnerHTML={contentStyle2}
            ></div>
        </div>
    );

    return jsx;
};

export default Preview;
