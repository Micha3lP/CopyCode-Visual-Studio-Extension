import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

const IGNORE_DIRS = [
	'node_modules', '.git', '.vscode', 'dist', 'build',
	'out', '.next', 'coverage', '.idea', '__pycache__',
	'.DS_Store', 'Thumbs.db', 'venv', '.env'
];

const BINARY_EXTENSIONS = [
	'.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.bmp',
	'.mp4', '.avi', '.mov', '.mp3', '.wav',
	'.zip', '.rar', '.7z', '.tar', '.gz',
	'.exe', '.dll', '.so', '.dylib',
	'.pdf', '.doc', '.docx', '.xls', '.xlsx',
	'.lock'
];

export function activate(context: vscode.ExtensionContext): void {
	const disposable = vscode.commands.registerCommand(
		'copy-code.copyCode',
		async (uri: vscode.Uri, selectedUris: vscode.Uri[]): Promise<void> => {
			try {
				const uris = selectedUris && selectedUris.length > 0 ? selectedUris : [uri];

				if (!uris || uris.length === 0) {
					vscode.window.showWarningMessage('Please select at least one file or folder');
					return;
				}

				let allCode = '';
				const processedCount = { files: 0, skipped: 0 };

				for (const currentUri of uris) {
					const filePath = currentUri.fsPath;

					try {
						const stats = fs.statSync(filePath);

						if (stats.isDirectory()) {
							allCode += await processDirectory(filePath, processedCount);
						} else if (stats.isFile()) {
							allCode += await processFile(filePath, processedCount);
						}
					} catch (err) {
						const errorMessage = err instanceof Error ? err.message : String(err);
						vscode.window.showWarningMessage(`Failed to process ${filePath}: ${errorMessage}`);
					}
				}

				if (allCode.trim().length === 0) {
					vscode.window.showWarningMessage('No code content to copy from selected items');
					return;
				}

				await vscode.env.clipboard.writeText(allCode);

				const message = processedCount.skipped > 0
					? `✅ Code copied to clipboard (${processedCount.files} file(s), ${processedCount.skipped} skipped)`
					: `✅ Code copied to clipboard (${processedCount.files} file(s))`;

				vscode.window.showInformationMessage(message);
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : String(error);
				vscode.window.showErrorMessage(`Error copying code: ${errorMessage}`);
			}
		}
	);

	context.subscriptions.push(disposable);
}

async function processFile(filePath: string, processedCount: { files: number; skipped: number }): Promise<string> {
	try {
		const ext = path.extname(filePath).toLowerCase();

		if (BINARY_EXTENSIONS.includes(ext)) {
			processedCount.skipped++;
			return '';
		}

		const content = fs.readFileSync(filePath, 'utf-8');
		const fileName = path.basename(filePath);

		processedCount.files++;

		return `// =====================================\n` +
			`// File: ${fileName}\n` +
			`// Path: ${filePath}\n` +
			`// =====================================\n\n` +
			`${content}\n\n\n`;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		processedCount.skipped++;
		return `// ⚠️  Error reading ${path.basename(filePath)}: ${errorMessage}\n\n`;
	}
}

async function processDirectory(dirPath: string, processedCount: { files: number; skipped: number }): Promise<string> {
	let result = '';

	try {
		const entries = fs.readdirSync(dirPath, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(dirPath, entry.name);

			if (entry.isDirectory()) {
				if (!IGNORE_DIRS.includes(entry.name)) {
					result += await processDirectory(fullPath, processedCount);
				} else {
					processedCount.skipped++;
				}
			} else if (entry.isFile()) {
				result += await processFile(fullPath, processedCount);
			}
		}
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		result += `// ⚠️  Error reading directory ${dirPath}: ${errorMessage}\n\n`;
	}

	return result;
}

export function deactivate(): void {
	
}
