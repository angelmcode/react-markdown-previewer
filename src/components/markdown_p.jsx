import '../stylesheets/markdown_p.css';

marked.setOptions({
  breaks: true,
});

function MarkdownPreviewer({ input }) {

  return (
    <div className='container_previewer'>
      <div className='container_header_previewer'>Previewer</div>
      <div id="a" dangerouslySetInnerHTML={{__html: marked(input)}} className='container_markdown_previewer'>
          {/* {input} */}
      </div>
    </div>
  )
}

export default MarkdownPreviewer;