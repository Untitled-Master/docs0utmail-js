import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Mail } from 'lucide-react';

const ReadingEmails = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">Reading Emails</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">Reading Emails</h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                0utmail allows you to fetch and list the most recent emails from your Gmail inbox.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Mail className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Listing Recent Messages
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                Use <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">client.list</code> to get an array of messages.
            </p>
            <CodeBlock code={`const client = require('0utmail');

async function readInbox() {
  try {
    // Fetch last 5 emails (default is 10)
    const emails = await client.list({ limit: 5 });

    emails.forEach((msg, i) => {
      console.log(\`\\n--- Email #\${i + 1} ---\`);
      console.log(\`From:    \${msg.from}\`);
      console.log(\`Subject: \${msg.subject}\`);
      console.log(\`Snippet: \${msg.snippet}\`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

readInbox();`} language="javascript" />

            <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight">Response Structure</h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">
                Each message object contains the following properties:
            </p>

            {/* Sharp themed table */}
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
                        {[
                            { prop: 'id', type: 'String', desc: 'The unique Gmail message ID.' },
                            { prop: 'from', type: 'String', desc: "Sender's email address and name." },
                            { prop: 'subject', type: 'String', desc: 'The email subject line.' },
                            { prop: 'snippet', type: 'String', desc: 'A short plain-text preview of the email body.' },
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
    );
};

export default ReadingEmails;
