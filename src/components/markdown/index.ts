import { div } from 'vilex';
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import './markdown-theme.css'

export async function Markdown(filePath:string) {
    const result = await fetch(filePath)
    const content = await result.text()
    const md = new MarkdownIt({
        highlight: (content, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(lang, content, true).value
            }
            return content
        }
    })
    const v = div(['markdown-theme'])
    v.el.innerHTML = md.render(content)
    return v
}