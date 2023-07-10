import React from "react";

const Edit = (props) => {
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
