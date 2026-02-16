import React from 'react';
import CodeBlock from '../../components/Docs/CodeBlock';
import { Server, Zap, Globe, Rocket } from 'lucide-react';

const Express = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#B7B1B1] uppercase tracking-widest mb-8">
                <span>Docs</span>
                <span>/</span>
                <span>Frameworks</span>
                <span>/</span>
                <span className="text-[#F2EDED]">Express.js</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F2EDED] tracking-tight flex items-center gap-3">
                <Server className="w-8 h-8 text-[#F2EDED]" />
                Express Quick Start
            </h1>
            <div className="w-12 h-1 bg-[#F2EDED] mb-8"></div>
            <p className="text-[#B7B1B1] mb-12 leading-relaxed text-base max-w-2xl">
                The absolute fastest way to get an email server running. We will hardcode credentials for a "zero-config" deployment.
            </p>

            {/* The Server Code */}
            <h2 className="text-xl font-bold mt-12 mb-6 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Zap className="w-3 h-3 text-[#F2EDED]" />
                </div>
                1. The Server (api/index.js)
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                Create a folder named <code>api</code> and file <code>index.js</code>. Paste your credentials directly.
            </p>

            <CodeBlock code={`const express = require('express');
const cors = require('cors');
const outmail = require('0utmailcore');

const app = express();
app.use(cors());
app.use(express.json());

// --- PASTE CREDENTIALS HERE ---
const API_KEY = "YOUR_API_KEY_STRING_HERE";

const TOKEN = {
    // Paste the entire object from token.json here
    "access_token": "...",
    "refresh_token": "...",
    "scope": "...",
    "token_type": "Bearer",
    "expiry_date": "..."
};

// --- ROUTE ---
app.post('/api/notify', async (req, res) => {
    const { email } = req.body;
    const name = email.split('@')[0]; // simple name extraction

    try {
        await outmail.sendHtml(
            API_KEY,
            TOKEN,
            email, // Sending TO the user
            "Library Update",
            \`<h1>Hello Mr \${name}</h1><p>New books have been added.</p>\`
        );
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = app;`} language="javascript" />

            {/* Client Side Example */}
            <h2 className="text-xl font-bold mt-16 mb-6 text-[#F2EDED] tracking-tight flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
                    <Globe className="w-3 h-3 text-[#F2EDED]" />
                </div>
                2. The Frontend (React)
            </h2>
            <p className="text-[#B7B1B1] mb-4 text-sm">
                A simple button to trigger the notification.
            </p>

            <CodeBlock code={`export default function NotifyButton() {

    const sendEmail = async () => {
        const res = await fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: "john@example.com" })
        });

        if (res.ok) alert("User Notified!");
    };

    return (
        <button onClick={sendEmail}>
            Send Notification
        </button>
    );
}`} language="javascript" />

            {/* Deployment Note */}
            <div className="mt-12 p-6 border border-[#B7B1B1]/20 bg-[#1A1818] rounded-sm flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-bold text-[#F2EDED] mb-1 flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-[#F2EDED]" />
                        Ready to Deploy?
                    </h3>
                    <p className="text-xs text-[#B7B1B1]">
                        Since credentials are in the code, just push to GitHub and import into Vercel. It works instantly without configuration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Express;
