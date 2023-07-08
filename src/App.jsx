import { useState } from 'react';
import './App.css';
import MarkdownEditor from './components/markdown_e';
import MarkdownPreviewer from './components/markdown_p';

function App() {
  let a = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  ![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png)
  `

  const initialInput = a;

  const [input, setInput] = useState(a);
  const manageChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className='container_app'>
      <h1 id="main_h1">Markdown Previewer</h1>
      <div className='container_me_mp'>
      <MarkdownEditor manageChange={manageChange} initialInput={initialInput} />
      <MarkdownPreviewer input={input}/>
      </div>
    </div>
  )
}

export default App;