import React from 'react';
import CodeBlock from '../components/Docs/CodeBlock';
import { Send } from 'lucide-react';

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
        Sending emails with 0utmail is simple. The library supports both <strong className="text-[#F2EDED]">plain text</strong> and <strong className="text-[#F2EDED]">rich HTML</strong> content.
      </p>

      {/* Text Email */}
      <h2 className="text-xl font-bold mt-12 mb-4 text-[#F2EDED] tracking-tight flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center bg-[#F2EDED]/10 border border-[#B7B1B1]/20 rounded-sm">
          <Send className="w-3 h-3 text-[#F2EDED]" />
        </div>
        Send a Text Email
      </h2>
      <p className="text-[#B7B1B1] mb-4 text-sm">
        Use <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">client.send</code> with a
        <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono ml-1">text</code> property for simple messages.
      </p>
      <CodeBlock code={`const client = require('0utmail');

async function sendText() {
  try {
    const result = await client.send({
      to: 'recipient@example.com',
      subject: 'Hello from 0utmail',
      text: 'This is a test email sent using 0utmail library.'
    });
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

sendText();`} language="javascript" />

      {/* HTML Email */}
      <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight">Send an HTML Email</h2>
      <p className="text-[#B7B1B1] mb-4 text-sm">
        To send rich emails, use the <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">html</code> property.
        This overrides <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">text</code> if both are provided.
      </p>
      <CodeBlock code={`const client = require('0utmail');

async function sendHtml() {
  try {
    const htmlBody = \`
      <h1>Welcome!</h1>
      <p>This is a <strong>rich HTML</strong> email.</p>
      <a href="https://example.com">Click me</a>
    \`;

    const result = await client.send({
      to: 'recipient@example.com',
      subject: 'HTML Email Test',
      html: htmlBody
    });
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

sendHtml();`} language="javascript" />

      {/* Multiple Recipients */}
      <h2 className="text-xl font-bold mt-16 mb-4 text-[#F2EDED] tracking-tight">Multiple Recipients</h2>
      <p className="text-[#B7B1B1] mb-4 text-sm">
        The <code className="bg-[#0A0909] px-1 py-0.5 rounded-sm text-[#F2EDED] text-[11px] font-mono">to</code> field accepts an array of strings.
      </p>
      <CodeBlock code={`await client.send({
  to: ['user1@example.com', 'user2@example.com'],
  subject: 'Multi-recipient Test',
  text: 'Hello everyone!'
});`} language="javascript" />
    </div>
  );
};

export default SendingEmails;
