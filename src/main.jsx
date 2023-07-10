import React from "react";
<<<<<<< HEAD
=======
import ReactDOM from "react-dom/client";
>>>>>>> tmp
import { marked } from "marked";

const Edit = (props) => {
    const {
        id,
        headerId,
        textareaId,

        style,
        headerStyle,
        textareaStyle,

        input: textInput,
        onchange,
    } = props;

    return (
        <div id={id} style={style}>
            <h2 id={headerId} style={headerStyle}>
                Editor
            </h2>
            <textarea
                id={textareaId}
                style={textareaStyle}
                value={textInput}
                onChange={onchange}
            />
        </div>
    );
};
const Preview = (props) => {
    const {
        id,
        headerId,
        contentId,

        style,
        output,
    } = props;

    const boxStyle = {
        ...style,
        display: "grid",
        "grid-template-rows": "auto 1fr",
        "align-content": "stretch",
        "align-items": "stretch",
    };
    const titleStyle = {
        "text-align": "center",
    };

    const contentStyle = {};
    //innerHTML substitute
    const contentStyle2 = {
        __html: output,
    };
    const jsx = (
        <div id={id} style={boxStyle}>
            <h2 id={headerId} style={titleStyle}>
                Viewer
            </h2>
            <div
                id={contentId}
                style={contentStyle}
                dangerouslySetInnerHTML={contentStyle2}
            ></div>
        </div>
    );

    return jsx;
};

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
- *Frontend Developer*
- *Computer Scientist*

## Some of my projects
1. **Work Break timer** [Live App](https://new-af.github.io/) ;; [GitHub Repository](https://github.com/new-AF/react-redux-work-break-timer)
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

const container = document.querySelector("#react-container-1");
<<<<<<< HEAD
ReactDOM.render(<App />, container);
=======
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
>>>>>>> tmp
