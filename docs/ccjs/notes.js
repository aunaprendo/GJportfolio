


Failed: 48. When the value of #markdown-input is > **this is a *quote***, convertMarkdown() should return <blockquote><strong>this is a <em>quote</em></strong></blockquote>.

Failed: 49. When the value of #markdown-input is > **this is a *quote***, <blockquote><strong>this is a <em>quote</em></strong></blockquote> should be displayed inside #html-output.
Failed: 50. When the value of #markdown-input is > **this is a *quote***, you should set the inner HTML of #preview to <blockquote><strong>this is a <em>quote</em></strong></blockquote>.


/* file: script.js */
const mdInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

mdInput.addEventListener("input", () => {
  htmlOutput.innerText = convertMarkdown();
  preview.innerHTML = convertMarkdown();
});

function convertMarkdown() {
  const markdown = mdInput.value;
  const headingRegex = /^(#{1,3})\s+(.*)/gm;
  let html = markdown.replace(headingRegex, (_, level, content) => {
    level = level.length;
    return `<h${level}>${content}</h${level}>`;
  });

  const boldRegex = /\*\*(.+)\*\*/gm;
  html = html.replace(boldRegex, (_, content) => {
    return `<strong>${content}</strong>`;
  });

  const boldRegex2 = /__(.+)__/gm;
  html = html.replace(boldRegex2, (_, content) => {
    return `<strong>${content}</strong>`;
  });

  const italicsRegex1 = /\*(.+)\*/gm;
  html = html.replace(italicsRegex1, (_, content) => {
    return `<em>${content}</em>`;
  });

  const italicsRegex2 = /_(.+)_/gm;
  html = html.replace(italicsRegex2, (_, content) => {
    return `<em>${content}</em>`;
  });

  const imgRegex = /!\[(.+)\]\((.+)\)/gm;
  html = html.replace(imgRegex, (_, alt, src) => {
    return `<img alt=${`"${alt}"`} src=${`"${src}"`}>`;
  });

  const linkRegex = /\[(.+)\]\((.+)\)/gm;
  html = html.replace(linkRegex, (_, text, href) => {
    return `<a href=${`"${href}"`}>${text}</a>`;
  });

  const blockquoteRegex = /^>\s+(.+)/gm;
  html = html.replace(blockquoteRegex, (_, content) => {
    return `<blockquote>${content}</blockquote>`;
  });
  return html;
}