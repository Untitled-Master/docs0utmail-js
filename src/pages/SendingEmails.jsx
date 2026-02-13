import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Send, Code, Globe, Terminal } from 'lucide-react';

const SendingEmails = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
        <span>Docs</span>
        <span>/</span>
        <span className="text-[#F2EDED]">Sending Emails</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight">Sending Emails</h1>
      <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
      <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
        You can send emails using the <strong className="text-[#F2EDED]">0utmailcore</strong> Node.js library or by hitting the <strong className="text-[#F2EDED]">REST API</strong> directly.
        Both methods support plain text and HTML.
      </p>

      {/* Node.js Library Section */}
      <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
          <Terminal className="w-3 h-3 text-[#F2EDED]" />
        </div>
        Method 1: Node.js Library
      </h2>
      <p className="text-[#B7B1B1] mb-4 text-sm">
        First, load your credentials. Then use <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">outmail.send</code> for text or <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">outmail.sendHtml</code> for HTML.
      </p>

      <CodeBlock code={`const outmail = require("0utmailcore");
const fs = require("fs");

// 1. Load Credentials (Required for every request)
const key = JSON.parse(fs.readFileSync("./api-key.json")).key;
const token = JSON.parse(fs.readFileSync("./token.json"));

// 2. Send Plain Text (-3 Credits)
// Signature: (apiKey, token, to, subject, text)
outmail.send(key, token, "friend@gmail.com", "Hello", "Just checking in.")
  .then(res => console.log(res));

// 3. Send HTML (-5 Credits)
// Signature: (apiKey, token, to, subject, html)
outmail.sendHtml(key, token, "boss@company.com", "Report", "<h1>Weekly Update</h1><p>All good.</p>")
  .then(res => console.log(res));`} language="javascript" />

      {/* Raw API Section */}
      <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
          <Globe className="w-3 h-3 text-[#F2EDED]" />
        </div>
        Method 2: Raw API (cURL / Python)
      </h2>
      <p className="text-[#B7B1B1] mb-4 text-sm">
        If you are using Python, Go, or PHP, send a POST request to the API endpoint. You must include your <code className="text-[#F2EDED]">api_key</code> and <code className="text-[#F2EDED]">google_token</code> in the JSON body.
      </p>

      {/* cURL Example */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-[#F2EDED] bg-[#F2EDED]/10 px-2 py-1 rounded-sm">cURL</span>
        </div>
        <CodeBlock code={`curl -X POST https://api0utmail-test-email.vercel.app/send \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "YOUR_FIREBASE_KEY",
    "google_token": { "access_token": "..." },
    "to": "recipient@gmail.com",
    "subject": "Hello via API",
    "text": "Sent from cURL"
  }'`} language="bash" />
      </div>

      {/* Python Example */}
      <div>
        <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-[#F2EDED] bg-[#F2EDED]/10 px-2 py-1 rounded-sm">Python</span>
        </div>
        <CodeBlock code={`import requests
import json

# Load credentials
with open("api-key.json") as f: key = json.load(f)["key"]
with open("token.json") as f: token = json.load(f)

url = "https://api0utmail-test-email.vercel.app/sendHtml"
payload = {
    "api_key": key,
    "google_token": token,
    "to": "friend@gmail.com",
    "subject": "Python Test",
    "html": "<h1>Hello form Python</h1>"
}

r = requests.post(url, json=payload)
print(r.json())`} language="python" />
      </div>

      {/* Response Structure */}
      <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
          <Code className="w-3 h-3 text-[#F2EDED]" />
        </div>
        Response Object
      </h2>
      <p className="text-[#B7B1B1] mb-4 text-sm">
        Both the library and the API return the same JSON structure.
      </p>
      <CodeBlock code={`{
  "success": true,
  "id": "195029...",          // Gmail Message ID
  "remaining_credit": 92      // Your new balance
}`} language="json" />
    </div>
  );
};

export default SendingEmails;
