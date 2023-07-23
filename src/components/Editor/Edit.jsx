import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../../slice";
import { set_font_size } from "./Edit.slice";

import boldIconPath from "./assets/bold-solid.svg";
import downloadIconPath from "./assets/circle-down-regular.svg";
import italicIconPath from "./assets/italic-solid.svg";
import headingIconPath from "./assets/heading-solid.svg";
import oneIconPath from "./assets/1-solid.svg";
import twoIconPath from "./assets/2-solid.svg";
import threeIconPath from "./assets/3-solid.svg";
import fourIconPath from "./assets/4-solid.svg";
import fiveIconPath from "./assets/5-solid.svg";
import sixIconPath from "./assets/6-solid.svg";
import unorderedListIconPath from "./assets/list-ul-solid.svg";
import orderedListIconPath from "./assets/list-ol-solid.svg";
import undoIconPath from "./assets/rotate-left-solid.svg";
import redoIconPath from "./assets/rotate-right-solid.svg";

import Controls from "./Controls.jsx";
import LineNumbers from "./LineNumbers.jsx";

import "./Controls ++ Font.css";
import "./Controls ++ Download Button.css";
import "./Controls ++ Headings.css";
import "./Controls ++ List.css";
import "./Controls ++ Text.css";

import Button from "./Controls-Button.jsx";
import FontFamily from "./Controls - FontFamily.jsx";
import FontSize from "./Controls - FontSize.jsx";

import "./Edit.css";
import { useEffect } from "react";

const Edit = (props) => {
    /* redux slice */
    const dispatch = useDispatch();
    const state = useSelector((state) => state["text-slice"]);
    const { fontSize } = useSelector((state) => state["edit"]);

    /* useState */
    const [[width, setWidth]] = [useState(181)];
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

        const marginLeft = parseFloat(
            window.getComputedStyle(refTextArea.current).marginLeft
        );
        const marginRight = parseFloat(
            window.getComputedStyle(refTextArea.current).marginRight
        );

        setWidth(width - 2 * padding - marginLeft - marginRight);
        dispatch(set_font_size(fontSize));

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
        textareaStyleOld,
    } = props;

    const styleTextArea = { fontSize };
    const styleChar = { fontSize: fontSize };

    return (
        <section id={id} style={style}>
            {/* header & controls */}
            <article id="edit-top">
                <h2 id={headerId} style={headerStyle}>
                    Editor
                </h2>

                <Controls>
                    <Button
                        id="edit-top-download"
                        imagePath={downloadIconPath}
                        text={"Download Markdown File (.md)"}
                        download={true}
                        downloadFunction={downloadTXT}
                    />
                </Controls>

                {/* font && size */}
                <Controls id="edit-top-font">
                    <FontFamily id="edit-top-font-family" />
                    <FontSize id="edit-top-font-size" />
                </Controls>

                {/* headings */}
                <Controls id="edit-top-headings">
                    {[
                        [oneIconPath],
                        [twoIconPath],
                        [threeIconPath],
                        [fourIconPath],
                        [fiveIconPath],
                        [sixIconPath],
                    ].map((array, index) => {
                        const [iconPath] = array;
                        return (
                            <Button
                                imagePath={[headingIconPath, iconPath]}
                                text="Italic                 "
                                hideText={true}
                                onClick={doItalic}
                            />
                        );
                    })}
                </Controls>

                {/* lists */}
                <Controls id="edit-top-list">
                    <Button
                        imagePath={unorderedListIconPath}
                        text="Unordered List"
                        hideText={true}
                    />
                    <Button
                        imagePath={orderedListIconPath}
                        text="Ordered List"
                        hideText={true}
                    />
                </Controls>

                {/* text bold italic */}
                <Controls id="edit-top-text">
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

                {/* undo redo */}
                <Controls>
                    <Button
                        imagePath={undoIconPath}
                        text="Undo"
                        hideText={true}
                    />
                    <Button
                        imagePath={redoIconPath}
                        text="Redo"
                        hideText={true}
                    />
                </Controls>
            </article>
            {/* line numbers */}
            <LineNumbers
                text={state.input}
                width={width}
                fontSize={fontSize}
                ref={refLineNumbers}
                charWidth={charWidth}
                charHeight={charHeight}
            />
            {/* invisible measure element */}
            <span id="count-char" style={styleChar} ref={refCharSize}>
                a
            </span>
            {/* text area */}
            <textarea
                id={textareaId}
                style={styleTextArea}
                value={state.input}
                onChange={onInput}
                onScroll={onScroll}
                ref={refTextArea}
            />
        </section>
    );
};
export default Edit;
