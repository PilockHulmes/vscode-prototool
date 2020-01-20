import * as vscode from 'vscode';
import formatter from './formatter';
import linter from './linter';

export function activate(context: vscode.ExtensionContext) {
	let format = vscode.languages.registerDocumentFormattingEditProvider(
		{ scheme: 'file', language: 'proto3' },
		new formatter.ProtobufDocumentFormatter(),
	);

	let diagnostic = vscode.languages.createDiagnosticCollection("proto3");

	let saveLint = vscode.workspace.onDidSaveTextDocument(
		(document: vscode.TextDocument) => {
			console.log("enter save listener");
			linter.ProtobufDocumentLintter(document, diagnostic);
		}
	);

	context.subscriptions.push(format);
	context.subscriptions.push(diagnostic);
	context.subscriptions.push(saveLint);
}

// this method is called when your extension is deactivated
export function deactivate() {}
