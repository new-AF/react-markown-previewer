import React, { useRef } from "react";
import { useSelector } from "react-redux";

import downloadIconPath from "./Editor/assets/circle-down-regular.svg";
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
        const newWindow = window.open("about:blank", "", "_blank");
        newWindow.document.write(previewRef.current.innerHTML);
        newWindow.document.close();
        newWindow.print();
        return [undefined, undefined];
    }
    const jsx = (
        <div id={id} style={boxStyle}>
            <h2 id={headerId}>Viewer</h2>
            <Controls>
                <Button
                    text={"Download HTML"}
                    imagePath={downloadIconPath}
                    download={true}
                    downloadFunction={downloadHTML}
                />
                <Button
                    text={"Print PDF"}
                    imagePath={downloadIconPath}
                    download={true}
                    downloadFunction={downloadPDF}
                />
            </Controls>
            <div
                id={contentId}
                style={contentStyle}
                dangerouslySetInnerHTML={contentStyle2}
                ref={previewRef}
            ></div>
        </div>
    );

    return jsx;
};

export default Preview;
