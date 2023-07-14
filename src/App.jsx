import React from "react";
import { marked } from "marked";

import Edit from "./components/Edit";
import Preview from "./components/Preview";

class App extends React.Component {
    constructor(props) {
        super(props);

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
        this.state = {
            output: "",
            input: this.initialText(),
        };
        this.inputOnChange = this.inputOnChange.bind(this);
        this.newState = this.newState.bind(this);
        this.initialText = this.initialText.bind(this);
        //pass 8th & last test
        window.onload = (e) =>
            this.setState({ output: marked.parse(this.state.input) });
    }
    //only place that changes state
    newState(object) {
        this.setState((prevState) => object);
    }
    inputOnChange(event) {
        const text = event.target.value;

        //convert markdown to html and
        const html = marked.parse(text);
        this.newState({ input: text, output: html });
    }
    initialText() {
        const text = `# About Me
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
        return text;
    }
    render() {
        return (
            <div id="app">
                <h1 id="header">Markdown Viewer</h1>
                <Edit
                    id="edit"
                    input={this.state.input}
                    onchange={this.inputOnChange}
                    headerId="edit-header"
                    textareaId="editor"
                />
                <Preview
                    id="preview-div"
                    headerId="preview-header"
                    contentId="preview"
                    output={this.state.output}
                />
                <div id="footer">by Abdullah Fatota</div>
            </div>
        );
    }
}
export default App;
