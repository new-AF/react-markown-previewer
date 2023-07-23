import "./Controls - FontFamily.css";
function FontFamily({ id, fontSize }) {
    function newId(string) {
        return id + (string === undefined ? "" : "-" + string);
    }
    return (
        <div id={newId()}>
            <label id={newId("labelFamily")} htmlFor={newId("select")}>
                Font Family
            </label>
            <select id={newId("select")}></select>
        </div>
    );
}
export default FontFamily;
