# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-01

### Added
- Initial release of Copy Code extension
- Copy single files to clipboard with context menu integration
- Recursive directory copying with smart filtering
- Multi-file selection support
- Automatic skipping of binary files (.png, .jpg, .mp4, .exe, etc.)
- Automatic skipping of common directories (node_modules, .git, .vscode, etc.)
- Formatted output with file headers showing filename and full path
- Status notifications with file counts
- Comprehensive error handling with user-friendly messages
- TypeScript support with strict type checking
- ESLint configuration for code quality
- Comprehensive JSDoc documentation
- MIT License

### Features
- **Single File Copy**: Right-click on any file to copy its content
- **Folder Recursion**: Copy all code files from entire directories
- **Multiple Selection**: Select multiple files/folders and copy all at once
- **Smart Filtering**: Automatically excludes binary and generated files
- **Organized Output**: Each file includes clear headers with path information
- **Error Recovery**: Continues processing even if some files fail

## [Unreleased]

### Planned
- Support for custom ignore patterns via settings
- Copy with syntax highlighting markers
- Support for copying to different formats (Markdown, XML, etc.)
- Performance improvements for large directories
- Configuration options for output formatting