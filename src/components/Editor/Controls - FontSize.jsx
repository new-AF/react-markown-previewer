import { useRef, useState } from "react";
import ClassList from "./ClassList";

import "./Controls - FontSize.css";

function FontSize({ id }) {
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
        setBoxShadow(boxShadow2);
    }
    function onMouseLeave() {
        if (hasInputFocus() === true) {
            return;
        }
        setBoxShadow(boxShadow1);
    }
    function onClick() {
        setBoxShadow(boxShadow3);
    }
    /* input */
    function onFocus() {
        setBoxShadow(boxShadow3);
    }
    function onBlur() {
        setBoxShadow(boxShadow1);
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
            />

            <button id={newId("dec")}>--</button>
            <button id={newId("inc")}>++</button>
        </div>
    );
}
export default FontSize;
