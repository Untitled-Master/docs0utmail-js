import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Database as DatabaseIcon } from 'lucide-react';

const Database = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span className="text-[#F2EDED]">Database Structure</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">Database Structure</h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                0utmail uses <strong className="text-[#F2EDED]">Firebase Realtime Database</strong> to store API keys and credit information.
                The library expects a specific structure to function correctly.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <DatabaseIcon className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Firebase Schema
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                Your database should follow this nested structure where the root keys are your unique API Keys.
            </p>
            <CodeBlock code={`{
  "YOUR_API_KEY_1": {
    "credit": 1000,
    "emails": {
      "-O7x2yk...": { 
        "email": "user@gmail.com", 
        "addedAt": "2024-03-20T10:30:00Z" 
      }
    }
  },
  "YOUR_API_KEY_2": {
    "credit": 500,
    "emails": {}
  }
}`} language="json" />

            <h2 className="text-xl font-bold mt-16 mb-6 text-[#F2EDED] tracking-tight">Fields Explanation</h2>
            <div className="border border-[#B7B1B1]/20">
                {[
                    {
                        field: 'credit',
                        desc: 'A numeric value representing the remaining balance for this API key. Each email sent typically deducts credits from this balance.'
                    },
                    {
                        field: 'emails',
                        desc: 'A list of authorized email addresses associated with this key. When a user authenticates, their email is checked against this list (or added depending on your config).'
                    }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 border-b border-[#B7B1B1]/10 last:border-b-0 hover:bg-[#1A1818] transition-colors">
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="w-2 h-2 bg-[#F2EDED]"></div>
                            <code className="bg-[#0A0909] px-2 py-1 rounded-sm text-[13px] font-mono text-[#F2EDED] border border-[#B7B1B1]/10">{item.field}</code>
                        </div>
                        <p className="text-sm text-[#B7B1B1] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Database;
