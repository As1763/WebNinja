import React, { useState, useEffect } from 'react';
import EditorModule from 'react-simple-code-editor';
const Editor = EditorModule.default || EditorModule;
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/themes/prism-twilight.css'; // Dark theme similar to VS code dark
import 'prismjs/components/prism-python';

const LiveEditor = ({ initialCode = '', title = 'Live Code Editor', language = 'html' }) => {
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');
  const [viewMode, setViewMode] = useState('code'); // 'code' or 'preview'

  // Debounce the live preview update so it doesn't re-render on every single keystroke instantly
  useEffect(() => {
    const timeout = setTimeout(() => {
      let fullHtml = code;
      
      if (language === 'python') {
        // Python execution via Brython
        fullHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <script src="https://cdn.jsdelivr.net/npm/brython@3.11.3/brython.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/brython@3.11.3/brython_stdlib.js"></script>
              <style>
                body { background: #1e1e2e; color: #a6accd; font-family: 'Courier New', Courier, monospace; padding: 20px; margin: 0; white-space: pre-wrap; font-size: 15px; }
                .error { color: #f07178; }
              </style>
            </head>
            <body onload="brython()">
              <script type="text/python">
import sys
from browser import document, html

def write(data):
    document <= data

def write_err(data):
    span = html.SPAN(data, Class="error")
    document <= span

sys.stdout.write = write
sys.stderr.write = write_err
              </script>
              <script type="text/python">
${code}
              </script>
            </body>
          </html>
        `;
      } else {
        // HTML/CSS Execution
        if (!code.includes('<body>') && !code.includes('<html>')) {
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
      }
      
      setSrcDoc(fullHtml);
    }, 500);

    return () => clearTimeout(timeout);
  }, [code]);

  // Highlight function for Editor
  const highlight = (code) => {
    try {
      if (language === 'python') {
        return Prism.highlight(code, Prism.languages.python, 'python');
      }
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
      borderRadius: '12px', 
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      flexDirection: 'column',
      /* Make it resizable! */
      resize: 'vertical',
      overflow: 'hidden',
      minHeight: '350px',
      maxHeight: '1200px'
    }}>
      <div className="live-editor-header" style={{
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        padding: '0 1rem',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '0.95rem',
        fontWeight: '500',
        borderBottom: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '45px',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ec9b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          <span style={{ color: '#e5e5e5' }}>{title}</span>
        </div>
        
        {/* Toggle Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', height: '100%', alignItems: 'flex-end' }}>
          <button 
            onClick={() => setViewMode('code')}
            style={{
              background: viewMode === 'code' ? '#2d2d2d' : 'transparent',
              color: viewMode === 'code' ? '#fff' : '#a0a0a0',
              border: 'none',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              padding: '0.4rem 1rem',
              cursor: 'pointer',
              fontWeight: viewMode === 'code' ? '600' : '400',
              borderBottom: viewMode === 'code' ? '2px solid #4ec9b0' : '2px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            &lt; Code /&gt;
          </button>
          <button 
            onClick={() => setViewMode('preview')}
            style={{
              background: viewMode === 'preview' ? '#f3f4f6' : 'transparent',
              color: viewMode === 'preview' ? '#111827' : '#a0a0a0',
              border: 'none',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              padding: '0.4rem 1rem',
              cursor: 'pointer',
              fontWeight: viewMode === 'preview' ? '700' : '400',
              borderBottom: viewMode === 'preview' ? '2px solid #e73c7e' : '2px solid transparent',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            ▶ Run
          </button>
        </div>
      </div>
      
      <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'auto' }}>
        {/* Editor Area */}
        {viewMode === 'code' && (
          <div style={{ flex: 1, backgroundColor: '#1e1e1e', minHeight: '100%', width: '100%' }}>
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={highlight}
              padding={16}
              style={{
                fontFamily: '"Fira Code", "Consolas", monospace',
                fontSize: 14,
                minHeight: '100%',
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4'
              }}
            />
          </div>
        )}

        {/* Preview Area */}
        {viewMode === 'preview' && (
          <div style={{ flex: 1, backgroundColor: '#fff', minHeight: '100%', width: '100%', position: 'relative' }}>
            <iframe
              srcDoc={srcDoc}
              title="Live Preview"
              style={{ width: '100%', height: '100%', border: 'none', minHeight: '100%', position: 'absolute', top: 0, left: 0 }}
              sandbox="allow-scripts"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveEditor;
