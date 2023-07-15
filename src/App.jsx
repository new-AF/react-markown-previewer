import React from "react";
import { marked } from "marked";

import { useState, useEffect } from "react";

import Edit from "./components/Edit";
import Preview from "./components/Preview";

function App() {
    const [state, setState] = useState({
        output: "",
        input: initialText,
    });

    //only place that changes state
    function newState(object) {
        setState((prevState) => object);
    }

    function inputOnChange(event) {
        const text = event.target.value;

        //convert markdown to html and
        const html = marked.parse(text);
        newState({ input: text, output: html });
    }

    //do only once;
    useEffect(() => {
        //to pass 8th & last test
        window.onload = (event) =>
            newState({ output: marked.parse(state.input) });
    }, []);

    return (
        <div id="app">
            <h1 id="header">Markdown Viewer</h1>
            <Edit
                id="edit"
                input={state.input}
                onchange={inputOnChange}
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
//pass optional test, convert line breaks to <br> and
//set highlighter.
marked.setOptions({ gfm: true, breaks: true });
marked.setOptions({
    highlight: (text, lang0) => {
        const lang = Prism.languages.hasOwnProperty(lang0)
            ? lang0
            : "plaintext";
        return Prism.highlight(text, Prism.languages[lang], lang);
    },
});
const initialText = `# About Me
---
## *I am* Abdullah Fatota
- *Software Engineer*

## Some of my projects
1. **Work Break timer** [Live App](https://new-af.github.io/) \[[GitHub Repository](https://github.com/new-AF/react-redux-work-break-timer)\]
2. **Product Page** [Live Page](https://new-af.github.io/)

## Some preview images of live apps
1. ![live app preview image](https://new-af.github.io/assets/1%20react%20redux%201%20work%20break%20timer.png)

2. ![live app preview image](https://new-af.github.io/assets/3%20html5%20css3%202%20product%20page.png)

## Some of my Code snippets

### Inline code

\`const add= (a,b)=> a+b;\`

### Code Block

\`\`\`js
const add = (a, b) => {

const result = a + b;

return result;
}
\`\`\`

## Block quote

> This is a block quote
`;

export default App;
