# Copy Code Extension

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![VS Code](https://img.shields.io/badge/VS%20Code-1.60.0+-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)

A powerful and efficient VS Code extension that allows you to copy code from files and folders to clipboard with a single right-click. Perfect for sharing code snippets, collaborating on projects, and organizing code documentation.

## ✨ Features

- **📄 Copy Individual Files** - Right-click on any file and instantly copy its content
- **📁 Copy Complete Folders** - Recursively copy all code files from entire directories
- **✋ Multiple Selection** - Select multiple files/folders and copy all content at once
- **🚫 Smart Filtering** - Automatically skips binary files and generated directories
- **📝 Organized Format** - Beautiful output with file headers showing names and paths
- **⚡ Error Resilient** - Continues processing even if some files encounter issues
- **📊 Helpful Feedback** - Shows file counts and statistics

## 🚀 Quick Start

### Installation

1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
3. Search for "Copy Code"
4. Click **Install**

### Usage

1. Right-click on a file or folder in the Explorer
2. Select **"Copy Code to Clipboard"**
3. Paste anywhere with `Ctrl+V` (or `Cmd+V` on Mac)

## 📋 File Handling

### ✅ Supported Formats
Source code (`.js`, `.ts`, `.py`, `.java`, `.cpp`, `.cs`, etc.), configuration (`.json`, `.yaml`, `.toml`), markup (`.md`, `.html`, `.xml`), and any text-based file.

### ❌ Automatically Excluded
**Binary files:** Images, videos, archives, executables  
**Directories:** `node_modules`, `.git`, `.vscode`, `dist`, `build`, `coverage`, etc.

## 📤 Output Example

```
// =====================================
// File: utils.ts
// Path: /src/utils.ts
// =====================================

export function sum(a: number, b: number): number {
    return a + b;
}
```

## 🛠️ Development

### Prerequisites
- Node.js >= 18.0.0
- VS Code >= 1.60.0

### Setup

```bash
git clone https://github.com/your-username/copy-code-extension.git
cd copy-code-extension
npm install
npm run watch
```

Press `F5` to launch the extension.

### Available Scripts

```bash
npm run compile        # Compile TypeScript
npm run watch         # Watch for changes
npm run lint          # Check code quality
npm run package       # Create VSIX package
npm run publish       # Publish to marketplace
```

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.