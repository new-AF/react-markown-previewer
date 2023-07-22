import "./LineNumbers-Line.css";

function Line({
    countText,
    textLength,
    fontSize,
    charWidth,
    charHeight,
    textareaWidth,
    width,
    text,
}) {
    /* when lineLength > width, simulate wrap around by padding top */
    const lineWidth = textLength * charWidth;
    const linesCount = Math.ceil(lineWidth / width);
    const paddingBottom = linesCount > 1 ? linesCount * charHeight : 0;
    // console.info({ charWidth, charHeight });
    console.info({
        countText,
        charWidth,
        charHeight,
        textLength,
        fontSize,
        width,
        lineWidth,
        linesCount,
        text,
    });

    const style = { fontSize: fontSize, paddingBottom: paddingBottom };

    return (
        <span className="line" style={style}>
            {countText}
        </span>
    );
}
export default Line;
