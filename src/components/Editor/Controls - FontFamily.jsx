import { useRef, useState } from "react";

import "./Controls - FontFamily.css";
function FontFamily({ id, fontSize }) {
    const boxShadow1 = "0 0 0.5rem 0 lightgray";
    const boxShadow2 = "0 0 0.5rem 0 darkgray";
    const boxShadow3 = "0 0 0.5rem 0 rgba(0, 0, 128, 0.5)";

    const ref = useRef(null);
    const refSelect = useRef(null);
    const [boxShadow, setBoxShadow] = useState(boxShadow1);

    function newId(string) {
        return id + (string === undefined ? "" : "-" + string);
    }
    function hasInputFocus() {
        return document.activeElement === refSelect.current;
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
        refSelect.current.focus();
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
            id={newId()}
            ref={ref}
            style={{ boxShadow }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <label id={newId("labelFamily")} htmlFor={newId("select")}>
                Font Family
            </label>
            <select
                ref={refSelect}
                id={newId("select")}
                onFocus={onFocus}
                onBlur={onBlur}
            ></select>
        </div>
    );
}
export default FontFamily;
