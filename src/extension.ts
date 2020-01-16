import * as vscode from 'vscode';
import formatter from './formatter';

export function activate(context: vscode.ExtensionContext) {
	console.log("init succeed")
	let disposable = vscode.languages.registerDocumentFormattingEditProvider(
		{ scheme: 'file', language: 'proto3' },
		new formatter.ProtobufDocumentFormatter(),
	);

	// TODO: add linter

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
