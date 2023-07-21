import { React, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_scroll_top } from "./Count.slice";
import { setInput } from "../../slice";

import boldIconPath from "./assets/bold-solid.svg";
import downloadIconPath from "./assets/circle-down-regular.svg";

import Controls from "./Controls.jsx";
import Button from "./Controls-Button.jsx";
import LineNumbers from "./LineNumbers.jsx";

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
    /* return [string data to download, file name] */
    function downloadTXT() {
        const text = state.input;
        const content = `data:text/plain;charset=utf-8,${encodeURIComponent(
            text
        )}`;
        return [content, "file.md"];
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
        <section id={id} style={style}>
            <article id="edit-top">
                <h2 id={headerId} style={headerStyle}>
                    Editor
                </h2>
                <Controls>
                    {/* <Button imagePath={boldIconPath} text="Bold" /> */}
                    <Button
                        imagePath={downloadIconPath}
                        text={"Download Markdown (.md) File"}
                        download={true}
                        downloadFunction={downloadTXT}
                    />
                </Controls>
            </article>
            <LineNumbers text={state.input}></LineNumbers>
            <textarea
                id={textareaId}
                style={textareaStyle}
                value={state.input}
                onChange={onInput}
                onScroll={onScroll}
            />
        </section>
    );
};
export default Edit;
