import "./LineNumbers-Line.css";

function Line({ countText, textLength, fontSize, width, text }) {
    /* if lineLength > width, simulate wrap around by padding top */
    const textWidth = textLength * fontSize;
    const linesCount = Math.ceil(textWidth / width);
    const paddingBottom = linesCount > 1 ? linesCount * fontSize : 0;

    /*     console.info({
        countText,
        textLength,
        fontSize,
        width,
        textWidth,
        linesCount,
        text,
    }); */

    const style = { fontSize: fontSize, paddingBottom: paddingBottom };

    return (
        <span className="line" style={style}>
            {countText}
        </span>
    );
}
export default Line;
