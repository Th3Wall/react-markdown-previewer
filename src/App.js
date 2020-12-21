import './App.sass';
import { useState } from 'react'
import { Editor } from './components/editor/Editor'
import { Previewer } from './components/previewer/Previewer';

const App = () => {
  const initialMarkdown = `
  # Welcome to my React Markdown Previewer!


  ### Headers

  # Header 1
  ## Header 2

  ### Links

  [FreeCodeCamp](https://learn.freecodecamp.org)
  [Facebook](https://www.facebook.com "Most popular social")
  
  ### List

  - list item one
  - list item two
  - list item three

  ### Blockquote

  > To be, or not to be. That is a stupid question.

  ### Text Decorations

  **bolded text**

  ### Images

  ![alt text](https://media.nature.com/lw800/magazine-assets/d41586-020-03053-2/d41586-020-03053-2_18533904.jpg 'React img')

  ### Code

  \`npm install create-markdown-previewer\`

  \`\`\`
  const newFunctionalComponent = (a, b) => {
    return a + b
  }
  \`\`\`
  `;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className="main__wrp">
      <Editor markdownValue={markdown} onMarkdownChange={handleInputChange}/>
      <Previewer markdownToPreview={markdown} />
    </div>
  );
}

export default App;
