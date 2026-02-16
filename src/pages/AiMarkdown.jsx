import React, { useState } from 'react';
import { Bot, Sparkles, Copy, Check } from 'lucide-react';

const AiMarkdown = () => {
    const [copied, setCopied] = useState(false);

    const promptContent = `# ROLE
You are an expert developer specializing in the "0utmailcore" email library and the 0utmail REST API.

# DOCUMENTATION CONTEXT

## 1. Authentication Setup
- **CLI Tool:** Users must run \`npx 0utmailauth\` to generate credentials.
- **Files:** This generates two files: \`token.json\` (Google OAuth2) and \`api-key.json\` (Encrypted Key).
- **Security:** These files must be added to \`.gitignore\`.

## 2. Node.js Library (\`0utmailcore\`)
**Installation:** \`npm install 0utmailcore\`

### Method A: Sending Plain Text (-3 Credits)
\`\`\`javascript
const outmail = require("0utmailcore");
// Signature: outmail.send(apiKeyString, tokenObject, to, subject, textBody)
outmail.send(key, token, "user@gmail.com", "Hi", "Text content")
\`\`\`

### Method B: Sending HTML (-5 Credits)
\`\`\`javascript
// Signature: outmail.sendHtml(apiKeyString, tokenObject, to, subject, htmlString)
outmail.sendHtml(key, token, "user@gmail.com", "Hi", "<h1>HTML Content</h1>")
\`\`\`

### Method C: Reading Emails
\`\`\`javascript
// Signature: outmail.read(apiKeyString, tokenObject, limitNumber)
outmail.read(key, token, 5).then(response => {
   // response.emails is an array of { id, from, subject, snippet, body }
})
\`\`\`

## 3. Raw REST API (Python/cURL/Go/etc.)
- **Base URL:** \`https://api0utmail-test-email.vercel.app\`
- **Headers:** \`Content-Type: application/json\`
- **Payload:** \`{ "api_key": "...", "google_token": { ... }, ... }\`

# RESPONSE GUIDELINES

1. **Credential Handling (CRITICAL):**
   - **Scenario A (Local Script):** Use \`fs\` to read \`api-key.json\` and \`token.json\`.
   - **Scenario B (Vercel / Deployment):** Do NOT use \`fs\` and do NOT use \`.env\`. **HARDCODE** the credentials directly into the file as constants (e.g., \`const API_KEY = "..."\`). This ensures zero-config deployment.

2. **Library Usage:**
   - Do not invent methods. Only use \`.send\`, \`.sendHtml\`, and \`.read\`.
   - Always wrap calls in try/catch blocks.

3. **Language Preference:**
   - If the user asks for Node.js, prefer the \`0utmailcore\` library.
   - If the user asks for Python, use \`requests\` and the Raw API endpoints.`;

    const handleCopy = () => {
        navigator.clipboard.writeText(promptContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">AI System Prompt</span>
            </div>

            <div className="flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight flex items-center gap-3">
                        <Bot className="w-8 h-8 text-[#F2EDED]" />
                        <span>AI Integration</span>
                    </h1>
                    <div className="w-12 h-1 bg-[#F2EDED] mb-6"></div>
                    <p className="text-[#B7B1B1] leading-relaxed text-base max-w-xl">
                        Want to build faster? Copy the prompt below and paste it into ChatGPT, Claude, or DeepSeek.
                        It contains the entire <strong className="text-[#F2EDED]">0utmail</strong> documentation context, teaching the AI exactly how to write code for you.
                    </p>
                </div>
            </div>

            {/* The Prompt Container */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F2EDED]/20 to-[#B7B1B1]/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-[#0A0909] border border-[#B7B1B1]/20 rounded-md overflow-hidden">

                    {/* Toolbar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#1A1818] border-b border-[#B7B1B1]/10">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-200" />
                            <span className="text-xs font-mono font-bold text-[#F2EDED] uppercase tracking-wider">System_Context.md</span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#B7B1B1] hover:text-[#F2EDED] transition-colors bg-[#F2EDED]/5 hover:bg-[#F2EDED]/10 px-3 py-1.5 rounded-sm border border-[#F2EDED]/10"
                        >
                            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            {copied ? 'Copied to Clipboard' : 'Copy Prompt'}
                        </button>
                    </div>

                    {/* The Raw Text */}
                    <div className="p-6 overflow-x-auto">
                        <pre className="text-[11px] md:text-xs font-mono text-[#B7B1B1] leading-relaxed whitespace-pre-wrap">
                            {promptContent}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="p-6 border border-[#B7B1B1]/10 hover:bg-[#1A1818] transition-colors rounded-sm">
                    <div className="w-8 h-8 bg-[#F2EDED]/10 flex items-center justify-center rounded-full mb-4">
                        <span className="font-mono text-[#F2EDED] font-bold">1</span>
                    </div>
                    <h3 className="text-[#F2EDED] font-bold mb-2 text-sm">Copy the Context</h3>
                    <p className="text-[#B7B1B1] text-xs leading-relaxed">
                        Click the copy button above. This prompt contains the API endpoints, library signatures, and specifically instructs the AI on how to handle Vercel deployments.
                    </p>
                </div>
                <div className="p-6 border border-[#B7B1B1]/10 hover:bg-[#1A1818] transition-colors rounded-sm">
                    <div className="w-8 h-8 bg-[#F2EDED]/10 flex items-center justify-center rounded-full mb-4">
                        <span className="font-mono text-[#F2EDED] font-bold">2</span>
                    </div>
                    <h3 className="text-[#F2EDED] font-bold mb-2 text-sm">Paste & Ask</h3>
                    <p className="text-[#B7B1B1] text-xs leading-relaxed">
                        Paste it into your LLM, then ask: <em>"Write an Express backend for Vercel that sends a welcome email."</em> The AI will know to hardcode your credentials.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AiMarkdown;
