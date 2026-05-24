import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ children, lang = 'css' }) => {
  const code = typeof children === 'string' ? children : String(children);
  
  return (
    <div className="code-block-container" style={{ position: 'relative', margin: '1.5rem 0', borderRadius: '8px', overflow: 'hidden' }}>
      <div className="code-lang-badge" style={{
        position: 'absolute',
        top: '0',
        right: '0',
        background: 'rgba(255,255,255,0.1)',
        color: '#a855f7',
        padding: '0.2rem 0.6rem',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        borderBottomLeftRadius: '8px',
        zIndex: '10'
      }}>
        {lang.toUpperCase()}
      </div>
      <SyntaxHighlighter 
        language={lang} 
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          background: '#1e1e1e' // Exact VS code dark background
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
