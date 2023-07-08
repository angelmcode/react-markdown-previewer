// import { useState } from 'react';
import '../stylesheets/markdown_e.css';

function MarkdownEditor({ manageChange, initialInput }) {

  return (
    <div className='container_markdown_editor'>
      <div className='container_header_editor'>Editor</div>
      <textarea className='markdown_editor' onChange={manageChange} name="" id="">{initialInput}</textarea>
    </div>
  )
}

export default MarkdownEditor;