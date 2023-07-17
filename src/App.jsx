import { marked } from "marked";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "./slice";

import Edit from "./Components/Editor/Edit.jsx";
import Preview from "./Components/Preview.jsx";

import "./App.css";

function App() {
    const dispatch = useDispatch();

    return (
        <div id="app">
            <h1 id="header">Markdown Viewer</h1>
            <Edit id="edit" headerId="edit-header" textareaId="editor" />
            <Preview
                id="preview-div"
                headerId="preview-header"
                contentId="preview"
            />
            <div id="footer">by Abdullah Fatota</div>
        </div>
    );
}

export default App;
