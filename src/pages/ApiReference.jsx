import React from 'react';
import { Settings } from 'lucide-react';

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
                Technical documentation for all available methods in the 0utmail client.
            </p>

            <div className="space-y-16">
                {/* client.send */}
                <section className="border border-[#B7B1B1]/20">
                    <div className="p-6 border-b border-[#B7B1B1]/10 bg-[#1A1818] flex items-center justify-between">
                        <code className="text-sm font-mono text-[#F2EDED] font-bold">client.send(options)</code>
                        <span className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm">METHOD</span>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-[#B7B1B1] mb-6 leading-relaxed">
                            Sends an email. Before sending, it automatically verifies your API Key and Credit balance.
                        </p>

                        <h3 className="text-[10px] font-bold font-mono text-[#B7B1B1] uppercase tracking-widest mb-4">Options</h3>
                        <div className="border border-[#B7B1B1]/20 overflow-hidden mb-6">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#1A1818] text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Property</th>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Type</th>
                                        <th className="px-4 py-3 border-b border-[#B7B1B1]/10 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { prop: 'to', type: 'String | Array', desc: 'Recipient email or array of emails.' },
                                        { prop: 'subject', type: 'String', desc: 'Email subject line.' },
                                        { prop: 'text', type: 'String', desc: 'Plain text body.' },
                                        { prop: 'html', type: 'String', desc: 'Optional. HTML body (overrides text).' },
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

                        <h3 className="text-[10px] font-bold font-mono text-[#B7B1B1] uppercase tracking-widest mb-3">Returns</h3>
                        <p className="text-sm text-[#B7B1B1] leading-relaxed">
                            A <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">Promise</code> that resolves with the Gmail API response object on success, or throws if credits are insufficient.
                        </p>
                    </div>
                </section>

                {/* client.list */}
                <section className="border border-[#B7B1B1]/20">
                    <div className="p-6 border-b border-[#B7B1B1]/10 bg-[#1A1818] flex items-center justify-between">
                        <code className="text-sm font-mono text-[#F2EDED] font-bold">client.list(options)</code>
                        <span className="text-[10px] font-mono text-[#B7B1B1] border border-[#B7B1B1]/20 px-2 py-1 rounded-sm">METHOD</span>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-[#B7B1B1] mb-6 leading-relaxed">
                            Lists recent messages from the authenticated user's inbox.
                        </p>

                        <h3 className="text-[10px] font-bold font-mono text-[#B7B1B1] uppercase tracking-widest mb-4">Options</h3>
                        <div className="border border-[#B7B1B1]/20 overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#1A1818] text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Property</th>
                                        <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Type</th>
                                        <th className="px-4 py-3 border-b border-[#B7B1B1]/10 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#1A1818] transition-colors">
                                        <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">limit</td>
                                        <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">Number</td>
                                        <td className="px-4 py-3 text-xs text-[#B7B1B1]">Optional. Number of messages to retrieve (default: 10).</td>
                                    </tr>
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
