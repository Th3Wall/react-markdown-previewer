import './previewer.sass'

export const Previewer = ({markdownToPreview}) => {
    const marked = require('marked');
    marked.setOptions({
        rendered: new marked.Renderer(),
        breaks: true
    });

    return (
        <div
            id="preview"
            className="previewer rightwrp"
            dangerouslySetInnerHTML={{__html: marked(markdownToPreview)}}
        />
    )
}
