import React from 'react';
import { Settings, Terminal } from 'lucide-react';

const ApiReference = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">API Reference</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">API Reference</h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                Technical documentation for the <code className="text-[#F2EDED]">0utmailcore</code> library functions.
            </p>

            <div className="space-y-16">

                {/* outmail.read */}
                <section className="border border-[#B7B1B1]/20">
                    <div className="p-6 border-b border-[#B7B1B1]/10 bg-[#1A1818] flex items-center justify-between">
                        <code className="text-sm font-mono text-[#F2EDED] font-bold">outmail.read(key, token, limit)</code>
                        <span className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm">FUNCTION</span>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-[#B7B1B1] mb-6 leading-relaxed">
                            Retrieves the most recent emails from the authenticated Inbox.
                        </p>

                        <h3 className="text-[10px] font-bold font-mono text-[#B7B1B1] uppercase tracking-widest mb-4">Arguments</h3>
                        <div className="border border-[#B7B1B1]/20 overflow-hidden mb-6">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#1A1818] text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Argument</th>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Type</th>
                                        <th className="px-4 py-3 border-b border-[#B7B1B1]/10 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { prop: 'key', type: 'String', desc: 'Your 0utmail API Key.' },
                                        { prop: 'token', type: 'Object', desc: 'The Google JSON token object.' },
                                        { prop: 'limit', type: 'Number', desc: 'Number of emails to retrieve.' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                                            <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">{row.prop}</td>
                                            <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">{row.type}</td>
                                            <td className="px-4 py-3 text-xs text-[#B7B1B1]">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* outmail.send */}
                <section className="border border-[#B7B1B1]/20">
                    <div className="p-6 border-b border-[#B7B1B1]/10 bg-[#1A1818] flex items-center justify-between">
                        <code className="text-sm font-mono text-[#F2EDED] font-bold">outmail.send(key, token, to, sub, text)</code>
                        <span className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm">FUNCTION</span>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-[#B7B1B1] mb-6 leading-relaxed">
                            Sends a standard <strong>plain text</strong> email.
                        </p>

                        <h3 className="text-[10px] font-bold font-mono text-[#B7B1B1] uppercase tracking-widest mb-4">Arguments</h3>
                        <div className="border border-[#B7B1B1]/20 overflow-hidden mb-6">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#1A1818] text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Argument</th>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Type</th>
                                        <th className="px-4 py-3 border-b border-[#B7B1B1]/10 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { prop: 'key', type: 'String', desc: 'Your 0utmail API Key.' },
                                        { prop: 'token', type: 'Object', desc: 'The Google JSON token object.' },
                                        { prop: 'to', type: 'String', desc: 'Recipient email address.' },
                                        { prop: 'sub', type: 'String', desc: 'Email subject line.' },
                                        { prop: 'text', type: 'String', desc: 'The plain text body content.' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                                            <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">{row.prop}</td>
                                            <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">{row.type}</td>
                                            <td className="px-4 py-3 text-xs text-[#B7B1B1]">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* outmail.sendHtml */}
                <section className="border border-[#B7B1B1]/20">
                    <div className="p-6 border-b border-[#B7B1B1]/10 bg-[#1A1818] flex items-center justify-between">
                        <code className="text-sm font-mono text-[#F2EDED] font-bold">outmail.sendHtml(key, token, to, sub, html)</code>
                        <span className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm">FUNCTION</span>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-[#B7B1B1] mb-6 leading-relaxed">
                            Sends an <strong>HTML</strong> formatted email.
                        </p>

                        <h3 className="text-[10px] font-bold font-mono text-[#B7B1B1] uppercase tracking-widest mb-4">Arguments</h3>
                        <div className="border border-[#B7B1B1]/20 overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#1A1818] text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Argument</th>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Type</th>
                                        <th className="px-4 py-3 border-b border-[#B7B1B1]/10 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { prop: 'key', type: 'String', desc: 'Your 0utmail API Key.' },
                                        { prop: 'token', type: 'Object', desc: 'The Google JSON token object.' },
                                        { prop: 'to', type: 'String', desc: 'Recipient email address.' },
                                        { prop: 'sub', type: 'String', desc: 'Email subject line.' },
                                        { prop: 'html', type: 'String', desc: 'The HTML body string.' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                                            <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">{row.prop}</td>
                                            <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">{row.type}</td>
                                            <td className="px-4 py-3 text-xs text-[#B7B1B1]">{row.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ApiReference;
