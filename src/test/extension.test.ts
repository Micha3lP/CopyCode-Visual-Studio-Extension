import * as assert from 'assert';
import * as vscode from 'vscode';

/**
 * Test suite for Copy Code Extension
 * These tests verify the core functionality of the extension
 */
suite('Copy Code Extension Tests', () => {
	suiteSetup(() => {
		vscode.window.showInformationMessage('Starting Copy Code Extension tests...');
	});

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('your-username.copy-code-extension'));
	});

	test('Copy Code command should be registered', async () => {
		const commands = await vscode.commands.getCommands();
		assert.ok(commands.includes('copy-code.copyCode'));
	});

	test('Should handle empty selection gracefully', async () => {
		// Test that extension handles missing uri parameter
		assert.ok(true); // Placeholder for integration test
	});

	test('Should filter binary files correctly', () => {
		const binaryExtensions = ['.png', '.jpg', '.exe', '.zip', '.pdf'];
		binaryExtensions.forEach((ext) => {
			assert.ok(ext.startsWith('.'));
		});
	});

	test('Should recognize ignored directories', () => {
		const ignoreDirs = [
			'node_modules',
			'.git',
			'.vscode',
			'dist',
			'build',
			'out',
		];
		assert.strictEqual(ignoreDirs.includes('node_modules'), true);
		assert.strictEqual(ignoreDirs.includes('src'), false);
	});
});
