import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";

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

const initialState = {
    input: initialText,
    output: marked.parse(initialText),
};

const slice = createSlice({
    name: "text-slice",
    initialState: initialState,
    reducers: {
        setInput: (state, action) => {
            const text = action.payload;
            state.input = text;
            state.output = marked.parse(text);
        },
    },
});

export const { setInput } = slice.actions;
export default slice.reducer;
