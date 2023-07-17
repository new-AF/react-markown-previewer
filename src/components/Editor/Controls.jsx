import "./Controls.css";

function Controls({ children }) {
    return (
        <section id="controls">
            <a id="controls-download"></a>
            {children}
        </section>
    );
}

export default Controls;
