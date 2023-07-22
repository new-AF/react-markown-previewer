import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_scroll_top } from "./Count.slice";
import { setInput } from "../../slice";

import boldIconPath from "./assets/bold-solid.svg";
import downloadIconPath from "./assets/circle-down-regular.svg";
import italicIconPath from "./assets/italic-solid.svg";

import Controls from "./Controls.jsx";
import Button from "./Controls-Button.jsx";
import LineNumbers from "./LineNumbers.jsx";

import "./Edit.css";
import { useEffect } from "react";

const Edit = (props) => {
    /* redux slice */
    const dispatch = useDispatch();
    const state = useSelector((state) => state["text-slice"]);

    /* useState */
    const [[fontSize, setFontSize], [width, setWidth]] = [
        useState(13.333),
        useState(181),
    ];
    const [charWidth, setCharWidth] = useState(1);
    const [charHeight, setCharHeight] = useState(1);

    /* refs */
    const refLineNumbers = useRef(null);
    const refTextArea = useRef(null);
    const refCharSize = useRef(null);

    /* fint size, text area width and padding */
    /* char width and height */

    useEffect(() => {
        const widthStr = window.getComputedStyle(refTextArea.current).width;

        const fontSizeStr = window.getComputedStyle(
            refTextArea.current
        ).fontSize;

        const paddingStr = window.getComputedStyle(refTextArea.current).padding;

        const width = parseFloat(widthStr);
        const fontSize = parseFloat(fontSizeStr);
        const padding = parseFloat(paddingStr);

        setWidth(width - 2 * padding);
        setFontSize(fontSize);

        const charWidth = parseFloat(
            window.getComputedStyle(refCharSize.current).width
        );
        const charHeight = parseFloat(
            window.getComputedStyle(refCharSize.current).height
        );
        // console.info({ charWidth, charHeight });
        setCharWidth(charWidth);
        setCharHeight(charHeight);
    }, []);

    /* event callbacks */

    function onFocus(event) {}
    function onScroll(event) {
        refLineNumbers.current.scrollTop = event.target.scrollTop;
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
    /* markdown text manipulation functions */
    function getText() {
        return state.input;
    }
    function getTextSlice(start, end) {
        return state.input.slice(start, end);
    }
    function getSelectionIndicies() {
        const [start, end] = [
            refTextArea.current.selectionStart,
            refTextArea.current.selectionEnd,
        ];
        return [start, end];
    }
    function getSelection() {
        const [start, end] = getSelectionIndicies();
        const text = getTextSlice(start, end);
        return text;
    }
    function replaceSelection(text) {
        const [start, end] = getSelectionIndicies();
        const oldText = getText();
        const partA = oldText.slice(0, start);
        const partB = oldText.slice(end);
        const newer = `${partA}${text}${partB}`;
        dispatch(setInput(newer));
    }
    function doBolden(event) {
        const text = getSelection();
        const newer = `**${text}**`;
        replaceSelection(newer);
    }
    function doItalic(event) {
        const text = getSelection();
        const newer = `_${text}_`;
        replaceSelection(newer);
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
                    <Button
                        imagePath={downloadIconPath}
                        text={"Download Markdown (.md) File"}
                        download={true}
                        downloadFunction={downloadTXT}
                    />
                </Controls>
                <Controls>
                    <Button
                        imagePath={boldIconPath}
                        text="Bold"
                        hideText={true}
                        onClick={doBolden}
                    />
                    <Button
                        imagePath={italicIconPath}
                        text="Italic"
                        hideText={true}
                        onClick={doItalic}
                    />
                </Controls>
            </article>
            <LineNumbers
                text={state.input}
                width={width}
                fontSize={fontSize}
                ref={refLineNumbers}
                charWidth={charWidth}
                charHeight={charHeight}
            />
            {/* invisible element */}
            <span id="count-char" ref={refCharSize}>
                a
            </span>
            <textarea
                id={textareaId}
                style={textareaStyle}
                value={state.input}
                onChange={onInput}
                onScroll={onScroll}
                ref={refTextArea}
            />
        </section>
    );
};
export default Edit;
