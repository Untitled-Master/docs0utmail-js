import React, { useState, useEffect, useRef } from 'react';
import { Check, Copy } from 'lucide-react';
import Editor, { useMonaco } from '@monaco-editor/react';

// Map friendly language names to Monaco language IDs
const langMap = {
    bash: 'shell',
    sh: 'shell',
    shell: 'shell',
    javascript: 'javascript',
    js: 'javascript',
    json: 'json',
    typescript: 'typescript',
    ts: 'typescript',
    html: 'html',
    css: 'css',
    python: 'python',
    py: 'python',
};

const CodeBlock = ({ code, language }) => {
    const [copied, setCopied] = useState(false);
    const monaco = useMonaco();
    const editorRef = useRef(null);
    const containerRef = useRef(null);
    const [editorHeight, setEditorHeight] = useState(40);

    const monacoLang = langMap[language?.toLowerCase()] || language || 'plaintext';

    // Define custom dark theme matching the landing page
    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('0utmail-dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: '', foreground: 'B7B1B1', background: '0A0909' },
                    { token: 'comment', foreground: '5C5757', fontStyle: 'italic' },
                    { token: 'keyword', foreground: 'C792EA' },
                    { token: 'keyword.control', foreground: 'C792EA' },
                    { token: 'string', foreground: '98C379' },
                    { token: 'string.key.json', foreground: 'F2EDED' },
                    { token: 'string.value.json', foreground: '98C379' },
                    { token: 'number', foreground: 'F78C6C' },
                    { token: 'number.json', foreground: 'F78C6C' },
                    { token: 'type', foreground: 'FFCB6B' },
                    { token: 'variable', foreground: 'F2EDED' },
                    { token: 'variable.predefined', foreground: 'F2EDED' },
                    { token: 'constant', foreground: 'F78C6C' },
                    { token: 'delimiter', foreground: 'B7B1B1' },
                    { token: 'delimiter.bracket', foreground: 'B7B1B1' },
                    { token: 'identifier', foreground: '82AAFF' },
                    { token: 'function', foreground: '82AAFF' },
                    { token: 'tag', foreground: 'F07178' },
                    { token: 'attribute.name', foreground: 'FFCB6B' },
                    { token: 'attribute.value', foreground: '98C379' },
                    { token: 'metatag', foreground: 'C792EA' },
                    { token: 'operator', foreground: '89DDFF' },
                ],
                colors: {
                    'editor.background': '#0A0909',
                    'editor.foreground': '#B7B1B1',
                    'editor.lineHighlightBackground': '#0A090900',
                    'editor.selectionBackground': '#B7B1B130',
                    'editorLineNumber.foreground': '#3A3636',
                    'editorLineNumber.activeForeground': '#5C5757',
                    'editor.inactiveSelectionBackground': '#B7B1B115',
                    'editorCursor.foreground': '#F2EDED',
                    'editorWhitespace.foreground': '#1A181800',
                    'editorIndentGuide.background': '#1A181800',
                    'editorIndentGuide.activeBackground': '#1A181800',
                    'scrollbar.shadow': '#00000000',
                    'scrollbarSlider.background': '#B7B1B120',
                    'scrollbarSlider.hoverBackground': '#B7B1B140',
                    'scrollbarSlider.activeBackground': '#B7B1B150',
                },
            });
        }
    }, [monaco]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
        // Calculate height based on line count
        const lineCount = editor.getModel()?.getLineCount() || 1;
        const lineHeight = 20;
        const padding = 24;
        setEditorHeight(lineCount * lineHeight + padding);
    };

    return (
        <div className="relative group my-6" ref={containerRef}>
            {/* Copy button */}
            <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 bg-[#1A1818] border border-[#B7B1B1]/20 text-[#B7B1B1] hover:text-[#F2EDED] hover:border-[#F2EDED] transition-colors rounded-[2px]"
                    title="Copy to clipboard"
                >
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
            </div>

            <div className="overflow-hidden border border-[#B7B1B1]/20 bg-[#0A0909] rounded-sm">
                {/* Language label header */}
                {language && (
                    <div className="px-4 py-2 bg-[#1A1818] border-b border-[#B7B1B1]/10 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-wider">
                        {language}
                    </div>
                )}

                {/* Monaco Editor (read-only) */}
                <Editor
                    height={editorHeight}
                    language={monacoLang}
                    value={code}
                    theme="0utmail-dark"
                    onMount={handleEditorDidMount}
                    loading={
                        <pre className="p-4 text-[13px] font-mono text-[#B7B1B1] leading-relaxed">
                            <code>{code}</code>
                        </pre>
                    }
                    options={{
                        readOnly: true,
                        domReadOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        lineNumbers: 'off',
                        glyphMargin: false,
                        folding: false,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 0,
                        renderLineHighlight: 'none',
                        overviewRulerBorder: false,
                        overviewRulerLanes: 0,
                        hideCursorInOverviewRuler: true,
                        scrollbar: {
                            vertical: 'hidden',
                            horizontal: 'auto',
                            horizontalScrollbarSize: 6,
                            useShadows: false,
                        },
                        padding: { top: 12, bottom: 12 },
                        fontSize: 13,
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        fontLigatures: true,
                        wordWrap: 'on',
                        contextmenu: false,
                        links: false,
                        matchBrackets: 'never',
                        renderWhitespace: 'none',
                        guides: { indentation: false, bracketPairs: false },
                        occurrencesHighlight: 'off',
                        selectionHighlight: false,
                        cursorStyle: 'line-thin',
                        cursorBlinking: 'solid',
                    }}
                />
            </div>
        </div>
    );
};

export default CodeBlock;
