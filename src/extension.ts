import * as vscode from 'vscode';
import ProtobufDocumentFormatter from './formatter';

export function activate(context: vscode.ExtensionContext) {


	let disposable = vscode.languages.registerDocumentRangeFormattingEditProvider(
		{ scheme: 'file', language: 'protobuf3' },
		new ProtobufDocumentFormatter(),
	);

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
