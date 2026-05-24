import React, { useState, useEffect } from 'react';
import EditorModule from 'react-simple-code-editor';
const Editor = EditorModule.default || EditorModule;
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/themes/prism-twilight.css'; // Dark theme similar to VS code dark

const LiveEditor = ({ initialCode = '', title = 'Live Code Editor' }) => {
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debounce the live preview update so it doesn't re-render on every single keystroke instantly
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Wrap code in a basic HTML structure if it doesn't contain a full document
      let fullHtml = code;
      if (!code.includes('<body>') && !code.includes('<html>')) {
        // Assume code is a mix of HTML and <style> tags
        // We will just inject it into a body
        fullHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; }
              </style>
            </head>
            <body>
              ${code}
            </body>
          </html>
        `;
      }
      setSrcDoc(fullHtml);
    }, 500);

    return () => clearTimeout(timeout);
  }, [code]);

  // Highlight function for Editor
  const highlight = (code) => {
    try {
      if (Prism && Prism.languages && (Prism.languages.html || Prism.languages.markup)) {
        const lang = Prism.languages.html || Prism.languages.markup;
        return Prism.highlight(code, lang, 'html');
      }
      return code;
    } catch (e) {
      console.error("Highlight error:", e);
      return code;
    }
  };

  return (
    <div className="live-editor-wrapper" style={{ 
      margin: '2rem 0', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      border: '1px solid var(--border-color)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div className="live-editor-header" style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: '0.75rem 1rem',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        borderBottom: '1px solid #333'
      }}>
        <span style={{ color: '#569cd6' }}>&lt;</span>
        <span style={{ color: '#4ec9b0' }}>LiveEditor</span>
        <span style={{ color: '#9cdcfe' }}> title</span>
        <span style={{ color: '#d4d4d4' }}>=</span>
        <span style={{ color: '#ce9178' }}>"{title}"</span>
        <span style={{ color: '#569cd6' }}> /&gt;</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        {/* Editor Area */}
        <div style={{ flex: 1, backgroundColor: '#1e1e1e', position: 'relative', borderRight: isMobile ? 'none' : '1px solid #333', borderBottom: isMobile ? '1px solid #333' : 'none' }}>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={highlight}
            padding={16}
            style={{
              fontFamily: '"Fira Code", "Consolas", monospace',
              fontSize: 14,
              minHeight: '200px',
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4'
            }}
          />
        </div>

        {/* Preview Area */}
        <div style={{ flex: 1, backgroundColor: '#fff', minHeight: '200px', position: 'relative' }}>
          <iframe
            srcDoc={srcDoc}
            title="Live Preview"
            style={{ width: '100%', height: '100%', border: 'none', minHeight: '200px' }}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveEditor;
