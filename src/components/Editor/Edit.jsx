import { React, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_scroll_top } from "./Count.slice";
import { setInput } from "../../slice";

import boldIconPath from "./assets/bold-solid.svg";
import downloadIconPath from "./assets/circle-down-regular.svg";

import Controls from "./Controls.jsx";
import Button from "./Controls-Button.jsx";
import Count from "./Count.jsx";

import "./Edit.css";

const Edit = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state["text-slice"]);

    function onFocus(event) {}
    function onScroll(event) {
        dispatch(set_scroll_top(event.target.scrollTop));
    }
    function onInput(event) {
        dispatch(setInput(event.target.value));
    }
    const {
        id,
        headerId,
        textareaId,

        style,
        headerStyle,
        textareaStyle,
    } = props;

    return (
        <div id={id} style={style}>
            <h2 id={headerId} style={headerStyle}>
                Editor
            </h2>
            <Controls>
                {/* <Button imagePath={boldIconPath} text="Bold" /> */}
                <Button
                    imagePath={downloadIconPath}
                    text="Download Text File"
                    download={true}
                />
            </Controls>
            {/* <Count text={state.input}></Count> */}
            <textarea
                id={textareaId}
                style={textareaStyle}
                value={state.input}
                onChange={onInput}
                onScroll={onScroll}
            />
        </div>
    );
};
export default Edit;
