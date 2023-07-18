import "./Controls.css";

function Controls({ id, children }) {
    if (Array.isArray(children) && children.length >= 2) {
        /* show border-right */
        for (let index = 0; index < children.length - 1; ++index) {
            const obj = children[index];
        }
    }
    return (
        <section id={id} className="controls">
            <a id="controls-download"></a>
            {children}
        </section>
    );
}

export default Controls;
