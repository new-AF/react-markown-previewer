import { React, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_scroll_top } from "./Count.slice";

import boldIconPath from "./assets/bold-solid.svg";

import Controls from "./Controls.jsx";
import Button from "./Controls-Button";
import Count from "./Count.jsx";

import "./Edit.css";

const Edit = (props) => {
    const dispatch = useDispatch();
    function onFocus(event) {}
    function onScroll(event) {
        dispatch(set_scroll_top(event.target.scrollTop));
    }
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
                onScroll={onScroll}
            />
        </div>
    );
};
export default Edit;
