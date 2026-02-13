import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Mail, Globe } from 'lucide-react';

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
                You can fetch recent emails using the <code className="text-[#F2EDED]">0utmailcore</code> library or by hitting the API endpoints directly.
            </p>

            {/* --- SECTION 1: Library Usage --- */}
            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Mail className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Using the Library
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                Use <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">outmail.read</code> to retrieve messages. You need to load your credentials from your JSON files first.
            </p>

            <CodeBlock code={`const outmail = require("0utmailcore");
const fs = require("fs");

// Load credentials
const key = JSON.parse(fs.readFileSync("./api-key.json")).key;
const token = JSON.parse(fs.readFileSync("./token.json"));

// Read the last 2 emails
outmail.read(key, token, 2).then(console.log);`} language="javascript" />

            <div className="mt-6">
                <p className="text-[#B7B1B1] mb-2 text-xs font-mono uppercase tracking-wider">Example Output</p>
                <CodeBlock code={`{
  success: true,
  emails: [
    {
      id: '19c57e49fc29636b',
      from: 'untitledmaster01@gmail.com',
      subject: 'Hilo',
      snippet: 'Hello from 0utmail! This is a test email...',
      body: '\\n    <h1 style="color: #4CAF50;">Hello from 0utmail!</h1>\\n...'
    },
    {
      id: '19c57e4999cdfee0',
      from: 'sender@example.com',
      subject: 'Update',
      snippet: 'Meeting at 5pm',
      body: 'Meeting at 5pm'
    }
  ],
  remaining_credit: 958
}`} language="json" />
            </div>

            {/* --- SECTION 2: Response Structure --- */}
            <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight">Response Structure</h2>
            <p className="text-[#B7B1B1] mb-6 text-sm">
                The API returns a JSON object containing the status, credits, and an array of emails.
            </p>

            <div className="border border-[#B7B1B1]/20 overflow-hidden mb-16">
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
                            { prop: 'from', type: 'String', desc: "Sender's email address." },
                            { prop: 'subject', type: 'String', desc: 'The email subject line.' },
                            { prop: 'snippet', type: 'String', desc: 'A short plain-text preview.' },
                            { prop: 'body', type: 'String', desc: 'The full content (HTML or Text) of the email.' },
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

            {/* --- SECTION 3: Raw HTTP Usage --- */}
            <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Globe className="w-3 h-3 text-[#F2EDED]" />
                </div>
                Raw HTTP Request
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                If you prefer not to use the library, you can make raw HTTP requests using your preferred language.
            </p>

            <div className="bg-[#1A1818] border border-[#B7B1B1]/20 p-4 rounded-sm mb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-[#B7B1B1]">
                    <span className="bg-[#2E7D32] text-[#F2EDED] px-2 py-0.5 rounded-sm">POST</span>
                    <span>https://api0utmail-test-email.vercel.app/read</span>
                </div>
            </div>

            {/* JavaScript Tab/Section */}
            <div className="mb-8">
                <p className="text-[#B7B1B1] mb-2 text-xs font-mono uppercase tracking-wider">Node.js (Fetch)</p>
                <CodeBlock code={`const fs = require("fs");
const API = "https://api0utmail-test-email.vercel.app";

// Load credentials
const api_key = JSON.parse(fs.readFileSync("./api-key.json")).key;
const google_token = JSON.parse(fs.readFileSync("./token.json"));

// Helper function
const post = (path, data) => fetch(\`\${API}\${path}\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key, google_token, ...data })
}).then(r => r.json());

// Usage
(async () => {
    const emails = await post("/read", { limit: 2 });
    console.log(emails);
})();`} language="javascript" />
            </div>

            {/* Python Tab/Section */}
            <div className="mb-8">
                <p className="text-[#B7B1B1] mb-2 text-xs font-mono uppercase tracking-wider">Python</p>
                <CodeBlock code={`import requests
import json

API_URL = "https://api0utmail-test-email.vercel.app/read"

# Load credentials
with open("api-key.json") as f:
    api_key = json.load(f)["key"]

with open("token.json") as f:
    google_token = json.load(f)

payload = {
    "api_key": api_key,
    "google_token": google_token,
    "limit": 2
}

response = requests.post(API_URL, json=payload)
print(response.json())`} language="python" />
            </div>

            {/* cURL Tab/Section */}
            <div className="mb-8">
                <p className="text-[#B7B1B1] mb-2 text-xs font-mono uppercase tracking-wider">cURL</p>
                <CodeBlock code={`curl -X POST https://api0utmail-test-email.vercel.app/read \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "YOUR_API_KEY",
    "limit": 2,
    "google_token": { "access_token": "...", "scope": "...", ... }
  }'`} language="bash" />
            </div>

        </div>
    );
};

export default ReadingEmails;
