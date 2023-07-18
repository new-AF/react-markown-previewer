import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import downloadIconPath from "./Editor/assets/circle-down-regular.svg";
import printIconPath from "./Editor/assets/print-solid.svg";
import Controls from "./Editor/Controls";
import Button from "./Editor/Controls-Button";

import "./Preview.css";

const Preview = (props) => {
    const state = useSelector((state) => state["text-slice"]);
    const previewRef = useRef(undefined);
    const {
        id,
        headerId,
        contentId,

        style,
    } = props;

    const boxStyle = {
        ...style,
    };

    const contentStyle = {};
    //innerHTML substitute
    const contentStyle2 = {
        __html: state.output,
    };

    /* return [string data to download, file name] */
    function downloadHTML() {
        const text = previewRef.current.innerHTML;
        const content = `data:text/plain;charset=utf-8,${encodeURIComponent(
            text
        )}`;
        return [content, "file.html"];
    }
    function downloadPDF() {
        /* @media print; will take care of rest */
        window.print();
        return [undefined, undefined];
    }
    useEffect(() => {
        /* bugfix prism.js code block highlighting */

        /* get all <pre> s */
        const allPres = previewRef.current.querySelectorAll("pre");
        // console.log(allPres);
        for (const pre of allPres) {
            const code = pre.querySelector("code");
            const name = Array.from(code.classList).find((s) =>
                s.startsWith("language-")
            );
            /* add class to pre */
            // console.info({ code, name });
            pre.classList.add(name);
        }

        /* bugfix inline code highlighting */
        const allCode = previewRef.current.querySelectorAll("code");
        for (const code of allCode) {
            code.classList.add("language-");
        }
    });

    return (
        <div id={id} style={boxStyle}>
            <h2 id={headerId}>Viewer</h2>
            <Controls id={"preview-controls"}>
                <Button
                    text={"Download HTML"}
                    imagePath={downloadIconPath}
                    download={true}
                    downloadFunction={downloadHTML}
                />
                <Button
                    text={"Print to PDF File"}
                    imagePath={printIconPath}
                    download={true}
                    downloadFunction={downloadPDF}
                />
            </Controls>
            <section
                id={contentId}
                style={contentStyle}
                dangerouslySetInnerHTML={contentStyle2}
                ref={previewRef}
            ></section>
        </div>
    );
};

export default Preview;
