import React from 'react';

// VS Code Dark+ Theme Colors
const colors = {
  property: '#9cdcfe',   // light blue (CSS properties)
  value: '#ce9178',      // orange (string values)
  number: '#b5cea8',     // light green (numbers)
  unit: '#b5cea8',       // light green (units like px, rem)
  selector: '#d7ba7d',   // yellow (selectors)
  keyword: '#c586c0',    // pink (keywords like @media, !important)
  comment: '#6a9955',    // green (comments)
  punctuation: '#d4d4d4', // light grey (braces, semicolons)
  function: '#dcdcaa',   // yellow (functions like calc, var)
  tag: '#569cd6',        // blue (HTML tags)
  className: '#4ec9b0',  // teal (class names)
  id: '#4fc1ff',         // bright blue (IDs)
  pseudo: '#c586c0',     // pink (pseudo-classes/elements)
  string: '#ce9178',     // orange
};

function highlightCSS(code) {
  if (!code) return '';
  
  // Escape HTML first
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Comments
  html = html.replace(/(\/\*[\s\S]*?\*\/)/g, `<span style="color:${colors.comment}">$1</span>`);
  html = html.replace(/(\/\/.*)/g, `<span style="color:${colors.comment}">$1</span>`);

  // @keywords (@media, @keyframes, @import, etc.)
  html = html.replace(/@([\w-]+)/g, `<span style="color:${colors.keyword}">@$1</span>`);

  // !important
  html = html.replace(/(!important)/g, `<span style="color:${colors.keyword}">$1</span>`);

  // Strings in quotes
  html = html.replace(/(["'])((?:(?!\1).)*?)\1/g, `<span style="color:${colors.string}">$1$2$1</span>`);

  // CSS property: value pairs inside declarations
  html = html.replace(/([a-z-]+)(\s*:\s*)/g, (match, prop, colon) => {
    // Only color known CSS-like patterns (lowercase with hyphens)
    if (prop.match(/^[a-z][a-z-]*$/)) {
      return `<span style="color:${colors.property}">${prop}</span>${colon}`;
    }
    return match;
  });

  // Numbers with units
  html = html.replace(/(\b\d+\.?\d*)(px|em|rem|%|vw|vh|vmin|vmax|fr|deg|s|ms|ch|ex)\b/g, 
    `<span style="color:${colors.number}">$1</span><span style="color:${colors.unit}">$2</span>`);
  
  // Standalone numbers
  html = html.replace(/(?<![a-zA-Z"'>])\b(\d+\.?\d*)\b(?![a-zA-Z<])/g, 
    `<span style="color:${colors.number}">$1</span>`);

  // Functions like calc(), var(), rgb(), etc.
  html = html.replace(/\b(calc|var|rgb|rgba|hsl|hsla|linear-gradient|radial-gradient|conic-gradient|url|repeat|minmax|min|max|clamp|rotate|scale|translate|skew|perspective|matrix|blur|brightness|contrast|grayscale|sepia|saturate|invert|hue-rotate|drop-shadow|counter|attr|env|fit-content)(\()/g,
    `<span style="color:${colors.function}">$1</span>$2`);

  // Hex colors
  html = html.replace(/(#[0-9a-fA-F]{3,8})\b/g, `<span style="color:${colors.number}">$1</span>`);

  return html;
}

function highlightHTML(code) {
  if (!code) return '';
  
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // HTML tags
  html = html.replace(/(&lt;\/?)([\w-]+)/g, `$1<span style="color:${colors.tag}">$2</span>`);
  // Attributes
  html = html.replace(/\s([\w-]+)(=)/g, ` <span style="color:${colors.property}">$1</span>$2`);
  // Attribute values in quotes
  html = html.replace(/(["'])((?:(?!\1).)*?)\1/g, `<span style="color:${colors.string}">$1$2$1</span>`);

  return html;
}

const CodeBlock = ({ children, lang = 'css' }) => {
  const code = typeof children === 'string' ? children : String(children);
  const highlighted = lang === 'html' ? highlightHTML(code) : highlightCSS(code);
  
  return (
    <pre className="code-block">
      <div className="code-lang-badge">{lang.toUpperCase()}</div>
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
};

export default CodeBlock;
export { highlightCSS, highlightHTML };
