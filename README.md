<div align="center">

  <img src="https://i.pinimg.com/1200x/4e/90/b3/4e90b35dfb3e2c9f4cd8cacfdceb72ce.jpg" alt="0utmail Core Banner" width="100%" />

  <br/>

  # 0utmail Core

  **The stateless, serverless Gmail wrapper for modern developers.**
  <br/>
  Send and read emails via a credit-based API without managing SMTP servers.

  <br/>

  [![npm version](https://img.shields.io/npm/v/0utmailcore?style=flat-square&color=white&labelColor=0A0909)](https://www.npmjs.com/package/0utmailcore)
  [![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square&color=white&labelColor=0A0909)](LICENSE)
  [![Downloads](https://img.shields.io/npm/dt/0utmailcore?style=flat-square&color=white&labelColor=0A0909)](https://www.npmjs.com/package/0utmailcore)
  [![Status](https://img.shields.io/badge/status-active-success?style=flat-square&color=white&labelColor=0A0909)]()

</div>

---

## ⚡ Introduction

**0utmailcore** is a lightweight, stateless wrapper for the Outmail API. It abstracts away the complexities of the Gmail API, allowing developers to integrate email functionality into their applications instantly.

Because the architecture is **serverless**, you don't need to maintain a backend email server. Simply provide your `api-key` and `token` with every request, and the API handles the rest via a secure credit-based system.

## 🛠️ Tech Stack

Built with modern, scalable technologies ensuring speed and reliability:

<div align="center">

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Gmail API](https://img.shields.io/badge/Gmail_API-EA4335?style=for-the-badge&logo=gmail&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

</div>

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **📧 Send Emails** | Dispatch text or rich HTML emails instantly. |
| **📖 Read Inbox** | Fetch and parse recent emails from your account programmatically. |
| **🌍 RESTful API** | Accessible via Node.js, Python, cURL, or any HTTP client. |
| **⚡ Stateless** | No persistent server connections. Push credentials per request. |
| **🔑 Zero Config** | No SMTP configuration hell. Just pass your JSON token. |
| **📦 Lightweight** | A tiny npm package with zero unnecessary dependencies. |

---

## 🚀 Getting Started

### 1. Installation

Install the package via npm:

```bash
npm install 0utmailcore
```

### 2. Prerequisites

Before using the core library, ensure you have generated your credentials using the CLI tool. You should have these two files in your project root:

*   `api-key.json`
*   `token.json`

> **Note:** Never commit these files to version control. Add them to your `.gitignore`.

### 3. Usage (Node.js)

Here is a complete example of how to send an email in just a few lines of code:

```javascript
const outmail = require("0utmailcore");
const fs = require("fs");

// 1. Load your secure credentials
const key = JSON.parse(fs.readFileSync("./api-key.json")).key;
const token = JSON.parse(fs.readFileSync("./token.json"));

// 2. Send an email
// Signature: send(apiKey, googleToken, to, subject, body)
outmail.send(key, token, "friend@gmail.com", "Hello World", "This is a test from 0utmail.")
    .then(response => {
        console.log("✅ Email sent successfully:", response);
    })
    .catch(error => {
        console.error("❌ Error sending email:", error);
    });
```

---

## 🌐 Raw API Usage

Not using Node.js? No problem. The API is completely platform-agnostic.

**Base URL:** `https://api0utmail-test-email.vercel.app`

### Endpoints

*   `POST /send` - Send plain text emails.
*   `POST /sendHtml` - Send HTML formatted emails.
*   `POST /read` - Read recent emails.

### cURL Example

```bash
curl -X POST https://api0utmail-test-email.vercel.app/send \
  -H "Content-Type: application/json" \
  -d '{
    "api_key": "YOUR_FIREBASE_KEY",
    "google_token": { "access_token": "..." },
    "to": "client@example.com",
    "subject": "Invoice #1024",
    "text": "Please find your invoice attached."
  }'
```

---

## 💎 Credit System

We utilize a transparent credit system to manage API usage.

| Action | Cost |
| :--- | :--- |
| **Read Inbox** | `1 Credit` |
| **Send Text Email** | `3 Credits` |
| **Send HTML Email** | `5 Credits` |

---

<div align="center">
  <p>
    Built with ❤️ for developers.
    <br/>
    <a href="#">Documentation</a> • <a href="#">Issues</a> • <a href="#">Website</a>
  </p>
</div>
