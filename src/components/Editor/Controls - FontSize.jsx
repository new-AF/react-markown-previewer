import { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Button from "./Controls-Button";
import ClassList from "./ClassList";

import incrementIconPath from "./assets/plus-solid.svg";
import decrementIconPath from "./assets/minus-solid.svg";

import "./Controls - FontSize.css";
import { set_font_size } from "./Edit.slice";

function FontSize({ id }) {
    const dispatch = useDispatch();
    const { fontSize } = useSelector((state) => state["edit"]);

    const boxShadow1 = "0 0 0.5rem 0 lightgray";
    const boxShadow2 = "0 0 0.5rem 0 darkgray";
    const boxShadow3 = "0 0 0.5rem 0 rgba(0, 0, 128, 0.5)";

    const ref = useRef(null);
    const refInput = useRef(null);
    const [boxShadow, setBoxShadow] = useState(boxShadow1);

    function newId(string) {
        return id + (string === undefined ? "" : "-" + string);
    }
    function hasInputFocus() {
        return document.activeElement === refInput.current;
    }
    /* increase shadow on 'hover' */
    function onMouseEnter() {
        if (hasInputFocus()) {
            return;
        }
        setBoxShadow(boxShadow2);
    }
    function onMouseLeave() {
        if (hasInputFocus()) {
            return;
        }
        setBoxShadow(boxShadow1);
    }
    function onClick() {
        setBoxShadow(boxShadow3);
        refInput.current.focus();
    }
    /* input */
    function onFocus() {
        setBoxShadow(boxShadow3);
    }
    function onBlur() {
        setBoxShadow(boxShadow1);
    }
    function onChange(event) {
        const str = event.target.value;
        if (str === "") {
            dispatch(set_font_size(1));
            return;
        }
        const num = parseFloat(str);
        dispatch(set_font_size(isNaN(num) ? 1 : num));
    }
    /* inc dec buttons */
    function decOnClick() {
        if (fontSize <= 1) {
            dispatch(set_font_size(1));
        }
        dispatch(set_font_size(fontSize - 1));
    }
    function incOnClick() {
        dispatch(set_font_size(fontSize + 1));
    }
    return (
        <div
            id={id}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            ref={ref}
            style={{ boxShadow: boxShadow }}
        >
            <label id={newId("labelSize")} htmlFor={newId("number")}>
                Font Size (px)
            </label>
            <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]+"
                id={newId("number")}
                ref={refInput}
                onBlur={onBlur}
                onFocus={onFocus}
                value={fontSize}
                onChange={onChange}
            />

            <Button
                id={newId("dec")}
                imagePath={decrementIconPath}
                onClick={decOnClick}
            />
            <Button
                id={newId("inc")}
                imagePath={incrementIconPath}
                onClick={incOnClick}
            />
        </div>
    );
}
export default FontSize;
