import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Key, AlertTriangle, Terminal } from 'lucide-react';

const Authentication = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">Authentication</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">Authentication</h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                Before you can start sending or reading emails, you need to set up your credentials.
                0utmail provides a dedicated CLI tool to generate your <strong className="text-[#F2EDED]">API Key</strong> and <strong className="text-[#F2EDED]">Google OAuth2</strong> tokens.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Key className="w-3 h-3 text-[#F2EDED]" />
                </div>
                The Auth CLI
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                To generate your credentials, run the official authentication tool using npx:
            </p>
            <CodeBlock code="npx 0utmailauth" language="bash" />

            <p className="text-[#B7B1B1] mt-6 mb-2 text-sm">
                This will start a local server to handle the OAuth handshake. You should see output similar to this:
            </p>
            <div className="bg-[#0A0909] border border-[#B7B1B1]/20 p-4 rounded-sm font-mono text-xs mb-8">
                <p className="text-[#B7B1B1]">PS C:\Users\dev&gt; npx 0utmailauth</p>
                <p className="text-green-400 mt-1">&gt; 0utmailauth is running on http://localhost:4000</p>
                <p className="text-[#F2EDED]">&gt; Open your browser to start.</p>
            </div>

            <h2 className="text-xl font-bold mt-16 mb-6 text-[#F2EDED] tracking-tight">Authentication Flow</h2>

            <div className="border border-[#B7B1B1]/20">
                {[
                    {
                        step: '01',
                        title: 'Start the Server',
                        desc: 'Run the npx command shown above. The tool will spin up a temporary local server on port 4000 to listen for the authentication callback from Google.'
                    },
                    {
                        step: '02',
                        title: 'Browser Authorization',
                        desc: 'Open http://localhost:4000 in your browser. Follow the on-screen instructions to sign in with your Google account and authorize 0utmail to access your Gmail.'
                    },
                    {
                        step: '03',
                        title: 'Credential Generation',
                        desc: null,
                        custom: (
                            <div className="text-sm text-[#B7B1B1]">
                                <p className="mb-3">Upon successful signup/login, the tool will generate two essential files. Ensure these are placed in your project root:</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 p-2 border border-[#B7B1B1]/10 bg-[#0A0909] rounded-sm">
                                        <code className="text-[11px] font-mono text-[#F2EDED]">token.json</code>
                                        <span className="text-xs text-[#B7B1B1]">— Stores OAuth2 tokens safely</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 border border-[#B7B1B1]/10 bg-[#0A0909] rounded-sm">
                                        <code className="text-[11px] font-mono text-[#F2EDED]">api-key.json</code>
                                        <span className="text-xs text-[#B7B1B1]">— Stores your encrypted API Key</span>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                ].map((item, i) => (
                    <div key={i} className="p-6 border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm shrink-0 mt-0.5">{item.step}</div>
                            <div>
                                <h4 className="text-sm font-bold text-[#F2EDED] mb-2">{item.title}</h4>
                                {item.desc && <p className="text-sm text-[#B7B1B1] leading-relaxed">{item.desc}</p>}
                                {item.custom && item.custom}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Warning */}
            <div className="mt-12 p-6 border border-[#B7B1B1]/20 bg-[#1A1818] flex gap-4">
                <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-orange-500/10 border border-orange-500/20 shrink-0">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-[#F2EDED] mb-2">Important</h3>
                    <p className="text-xs text-[#B7B1B1] leading-relaxed">
                        Never commit your <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">token.json</code> or
                        <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono ml-1">api-key.json</code> files to version control.
                        Add them to your <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">.gitignore</code>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
