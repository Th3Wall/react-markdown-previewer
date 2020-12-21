import './editor.sass'

export const Editor = ({markdownValue, onMarkdownChange}) => {
    return (
        <div className="leftwrp">
            <textarea
                id="editor"
                className="editor"
                value={markdownValue}
                onChange={onMarkdownChange}
                rows="20"
                draggable="false"
            />
        </div>
    )
}
