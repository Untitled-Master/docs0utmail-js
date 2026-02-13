import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Mail, BookOpen, Key, Zap, Globe, Terminal } from 'lucide-react';

const Introduction = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">Introduction</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">Introduction</h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                <strong className="text-[#F2EDED]">0utmailcore</strong> is a stateless wrapper for the Outmail API.
                It allows you to send and read Gmail messages via a credit-based system.
                Because the API is serverless, you must provide your <code className="text-[#F2EDED] bg-[#F2EDED]/10 px-1 py-0.5 rounded text-xs">api-key</code> and <code className="text-[#F2EDED] bg-[#F2EDED]/10 px-1 py-0.5 rounded text-xs">token</code> with every request.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#B7B1B1]/20 mb-16">
                {[
                    { icon: Mail, title: 'Send Emails', desc: 'Send text (-3 credits) or HTML (-5 credits) instantly.' },
                    { icon: BookOpen, title: 'Read Inbox', desc: 'Fetch recent emails (-1 credit) from your account.' },
                    { icon: Globe, title: 'REST API', desc: 'Accessible via cURL, Python, or any HTTP client.' },
                    { icon: Zap, title: 'Stateless', desc: 'No server setup. Push credentials per request.' },
                    { icon: Key, title: 'Zero Config', desc: 'Just pass your JSON token and API key.' },
                    { icon: Terminal, title: 'Lightweight', desc: 'Tiny npm package with zero bloat.' },
                ].map((feature, i) => (
                    <div key={i} className="p-6 border-b border-r border-[#B7B1B1]/20 hover:bg-[#1A1818] transition-colors group">
                        <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-4 bg-[#F2EDED]/5 border border-[#B7B1B1]/20 text-[#F2EDED] group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-[#F2EDED] mb-1">{feature.title}</h3>
                        <p className="text-xs text-[#B7B1B1] leading-relaxed group-hover:text-[#F2EDED]/80 transition-colors">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Installation */}
            <h2 className="text-xl font-bold mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Terminal className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Installation
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">Install the simplified wrapper via npm:</p>
            <CodeBlock code="npm install 0utmailcore" language="bash" />

            {/* Node.js Usage */}
            <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Zap className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Usage (Node.js)
            </h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">
                Ensure you have <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">api-key.json</code> and <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">token.json</code> in your project root.
            </p>

            <CodeBlock code={`const outmail = require("0utmailcore");
const fs = require("fs");

// Load Credentials
const key = JSON.parse(fs.readFileSync("./api-key.json")).key;
const token = JSON.parse(fs.readFileSync("./token.json"));

// Send Email (4 lines of code)
outmail.send(key, token, "friend@gmail.com", "Hello", "World")
    .then(console.log);`} language="javascript" />

            {/* Raw API Usage */}
            <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Globe className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Raw API (cURL / Python)
            </h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">
                If you aren't using Node.js, hit the API directly at <code className="text-[#F2EDED]">https://api0utmail-test-email.vercel.app</code>.
            </p>

            <div className="space-y-4 border border-[#B7B1B1]/20">
                {[
                    { step: 'POST', text: <>Endpoint: <code className="text-[#F2EDED] text-xs">/send</code>, <code className="text-[#F2EDED] text-xs">/sendHtml</code>, or <code className="text-[#F2EDED] text-xs">/read</code></> },
                    { step: 'BODY', text: 'You must include "api_key" and "google_token" in the JSON body.' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-4 border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                        <div className="text-[10px] font-mono text-[#F2EDED] bg-[#F2EDED]/10 border border-[#B7B1B1]/20 px-2 py-1 rounded-sm shrink-0 min-w-[50px] text-center">{item.step}</div>
                        <p className="text-sm text-[#B7B1B1]">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <CodeBlock code={`curl -X POST https://api0utmail-test-email.vercel.app/send \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "YOUR_FIREBASE_KEY",
    "google_token": { "access_token": "..." },
    "to": "friend@gmail.com",
    "subject": "Hello via cURL",
    "text": "It works!"
  }'`} language="bash" />
            </div>
        </div>
    );
};

export default Introduction;
