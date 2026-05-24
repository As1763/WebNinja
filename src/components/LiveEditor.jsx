import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/themes/prism-twilight.css'; // Dark theme similar to VS code dark

const LiveEditor = ({ initialCode = '', title = 'Live Code Editor' }) => {
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');

  // Debounce the live preview update so it doesn't re-render on every single keystroke instantly
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Wrap code in a basic HTML structure if it doesn't contain a full document
      let fullHtml = code;
      if (!code.includes('<body>') && !code.includes('<html>')) {
        // Assume code is a mix of HTML and <style> tags
        fullHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 10px; margin: 0; }
              </style>
            </head>
            <body>
              ${code}
            </body>
          </html>
        `;
      }
      setSrcDoc(fullHtml);
    }, 250);

    return () => clearTimeout(timeout);
  }, [code]);

  // Highlight function for Editor
  const highlight = (code) => {
    // Basic detection: if it contains <style> we use HTML highlighting, 
    // but honestly Prism's HTML highlights CSS inside <style> tags anyway.
    return Prism.highlight(code, Prism.languages.html, 'html');
  };

  return (
    <div className="live-editor-wrapper" style={{
      margin: '2rem 0',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#1e1e1e', // VS Code Dark+ background
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{
        background: '#2d2d2d',
        padding: '0.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
        </div>
        <span style={{ color: '#888', fontSize: '0.85rem', fontWeight: 500, fontFamily: 'sans-serif' }}>
          {title} - (Editable)
        </span>
        <div style={{ width: 40 }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>
        {/* Editor Pane */}
        <div style={{
          flex: 1,
          borderRight: window.innerWidth < 768 ? 'none' : '1px solid rgba(255,255,255,0.1)',
          borderBottom: window.innerWidth < 768 ? '1px solid rgba(255,255,255,0.1)' : 'none',
          position: 'relative',
          height: '400px',
          overflowY: 'auto'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'rgba(255,255,255,0.1)',
            padding: '2px 8px',
            fontSize: '11px',
            color: '#ccc',
            borderBottomLeftRadius: '4px',
            zIndex: 10
          }}>
            HTML + CSS
          </div>
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={highlight}
            padding={15}
            style={{
              fontFamily: '"Fira Code", "Consolas", monospace',
              fontSize: 14,
              backgroundColor: '#1e1e1e',
              minHeight: '100%',
              color: '#d4d4d4'
            }}
            textareaClassName="editor-textarea"
          />
        </div>

        {/* Preview Pane */}
        <div style={{ flex: 1, height: '400px', backgroundColor: '#fff', position: 'relative' }}>
           <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'rgba(0,0,0,0.1)',
            padding: '2px 8px',
            fontSize: '11px',
            color: '#333',
            borderBottomLeftRadius: '4px',
            zIndex: 10
          }}>
            Live Output
          </div>
          <iframe
            srcDoc={srcDoc}
            title="live-preview"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: '#ffffff'
            }}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveEditor;
