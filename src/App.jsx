import { marked } from "marked";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "./slice";

import Edit from "./components/Editor/Edit";
import Preview from "./components/Preview";

import "./App.css";

function App() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state["text-slice"]);
    const onInput = (event) => dispatch(setInput(event.target.value));

    return (
        <div id="app">
            <h1 id="header">Markdown Viewer</h1>
            <Edit
                id="edit"
                input={state.input}
                onchange={onInput}
                headerId="edit-header"
                textareaId="editor"
            />
            <Preview
                id="preview-div"
                headerId="preview-header"
                contentId="preview"
                output={state.output}
            />
            <div id="footer">by Abdullah Fatota</div>
        </div>
    );
}

export default App;
