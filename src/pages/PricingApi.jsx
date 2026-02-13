import React from 'react';
import { Coins, Calculator, Zap } from 'lucide-react';

const PricingApi = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">Pricing & Credits</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">API Pricing</h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                0utmail operates on a straightforward credit system. Every API request consumes a specific number of credits from your balance based on the operation's complexity.
            </p>

            {/* --- SECTION 1: Cost Overview Table --- */}
            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Coins className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Cost Breakdown
            </h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">
                Below is the credit consumption rate for each available method in the library.
            </p>

            <div className="border border-[#B7B1B1]/20 overflow-hidden mb-16">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[#1A1818] text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest">
                        <tr>
                            <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Method</th>
                            <th className="px-4 py-3 border-b border-r border-[#B7B1B1]/10 font-semibold">Cost (Credits)</th>
                            <th className="px-4 py-3 border-b border-[#B7B1B1]/10 font-semibold">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-[#B7B1B1]/10 hover:bg-[#1A1818] transition-colors">
                            <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">outmail.read</td>
                            <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">1 Credit</td>
                            <td className="px-4 py-3 text-xs text-[#B7B1B1]">Per API call (regardless of limit).</td>
                        </tr>
                        <tr className="border-b border-[#B7B1B1]/10 hover:bg-[#1A1818] transition-colors">
                            <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">outmail.send</td>
                            <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">3 Credits</td>
                            <td className="px-4 py-3 text-xs text-[#B7B1B1]">Per email sent (Plain Text).</td>
                        </tr>
                        <tr className="hover:bg-[#1A1818] transition-colors">
                            <td className="px-4 py-3 font-mono text-[13px] text-[#F2EDED] border-r border-[#B7B1B1]/10">outmail.sendHtml</td>
                            <td className="px-4 py-3 text-xs text-[#B7B1B1] font-mono border-r border-[#B7B1B1]/10">5 Credits</td>
                            <td className="px-4 py-3 text-xs text-[#B7B1B1]">Per email sent (HTML Content).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* --- SECTION 2: Calculation Examples --- */}
            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Calculator className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Example Usage
            </h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">
                Understanding how your balance is affected during a typical workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Example Card 1 */}
                <div className="border border-[#B7B1B1]/20 p-6 bg-[#1A1818]/30">
                    <h3 className="text-[#F2EDED] font-bold text-sm mb-2">Daily Newsletter</h3>
                    <p className="text-[#B7B1B1] text-xs mb-4">Sending 1 HTML update to 5 users.</p>
                    <div className="flex justify-between items-center text-xs font-mono border-t border-[#B7B1B1]/10 pt-3">
                        <span className="text-[#B7B1B1]">5 x 5 Credits</span>
                        <span className="text-[#F2EDED] font-bold">25 Credits</span>
                    </div>
                </div>

                {/* Example Card 2 */}
                <div className="border border-[#B7B1B1]/20 p-6 bg-[#1A1818]/30">
                    <h3 className="text-[#F2EDED] font-bold text-sm mb-2">Inbox Monitor</h3>
                    <p className="text-[#B7B1B1] text-xs mb-4">Checking inbox 4 times an hour.</p>
                    <div className="flex justify-between items-center text-xs font-mono border-t border-[#B7B1B1]/10 pt-3">
                        <span className="text-[#B7B1B1]">4 x 1 Credit</span>
                        <span className="text-[#F2EDED] font-bold">4 Credits</span>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: Credit Info --- */}
            <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Zap className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Checking Balance
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                Every API response includes your remaining credit balance in the <code>remaining_credit</code> field.
            </p>

            <div className="bg-[#1A1818] border border-[#B7B1B1]/20 p-4 rounded-sm">
                 <pre className="text-[11px] md:text-xs font-mono leading-relaxed text-[#B7B1B1]">
<span className="text-[#F2EDED]">{"{"}</span>
  <span className="text-[#2E7D32]">"success"</span>: <span className="text-[#F2EDED]">true</span>,
  <span className="text-[#2E7D32]">"emails"</span>: [...],
  <span className="text-[#2E7D32]">"remaining_credit"</span>: <span className="text-[#F2EDED]">958</span> <span className="text-[#555]">// Your current balance</span>
<span className="text-[#F2EDED]">{"}"}</span>
                </pre>
            </div>

        </div>
    );
};

export default PricingApi;
