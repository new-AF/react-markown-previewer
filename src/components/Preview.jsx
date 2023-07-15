import React from "react";

import "./Preview.css";

const Preview = (props) => {
    const {
        id,
        headerId,
        contentId,

        style,
        output,
    } = props;

    const boxStyle = {
        ...style,
    };
    const titleStyle = {};

    const contentStyle = {};
    //innerHTML substitute
    const contentStyle2 = {
        __html: output,
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
