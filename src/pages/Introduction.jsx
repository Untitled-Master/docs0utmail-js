import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Mail, BookOpen, Key, Zap, Shield, Terminal, ArrowRight } from 'lucide-react';

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
                <strong className="text-[#F2EDED]">0utmail</strong> is a lightweight Node.js library for sending and reading emails via Gmail,
                featuring a built-in credit system powered by Firebase Realtime Database. It manages OAuth2 tokens
                locally and enforces usage limits through API keys.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#B7B1B1]/20 mb-16">
                {[
                    { icon: Mail, title: 'Send Emails', desc: 'Support for plain text and rich HTML emails.' },
                    { icon: BookOpen, title: 'Read Emails', desc: 'Fetch and list recent emails from your inbox.' },
                    { icon: Key, title: 'API Key Verification', desc: 'Secure your usage with Firebase-backed API keys.' },
                    { icon: Zap, title: 'Credit System', desc: 'Automatic credit deduction ensures controlled usage.' },
                    { icon: Shield, title: 'Secure Auth', desc: 'Handles Google OAuth2 tokens locally.' },
                    { icon: Terminal, title: 'Lightweight', desc: 'Simple, fast, and easy to integrate.' },
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
            <p className="text-[#B7B1B1] mb-4 text-sm">Install the library via npm:</p>
            <CodeBlock code="npm install 0utmail" language="bash" />

            {/* Quick Start */}
            <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Zap className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Quick Start
            </h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">Before using the library, authenticate with your Google account and validate your API Key.</p>

            <div className="space-y-4 border border-[#B7B1B1]/20">
                {[
                    { step: '01', text: 'Run the built-in auth script' },
                    { step: '02', text: 'Enter your API Key and login with Google.' },
                    { step: '03', text: <>Credentials saved locally (<code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">token.json</code> and <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">api-key.json</code>).</> },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                        <div className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm shrink-0">{item.step}</div>
                        <p className="text-sm text-[#B7B1B1]">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <CodeBlock code="node node_modules/0utmail/auth.js" language="bash" />
            </div>
        </div>
    );
};

export default Introduction;
