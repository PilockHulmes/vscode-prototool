import * as vscode from 'vscode';
import * as cp from 'child_process';

class ProtobufDocumentFormatter implements vscode.DocumentFormattingEditProvider {
    public provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        options: vscode.FormattingOptions, token: vscode.CancellationToken):
        vscode.TextEdit[]
    {
        let command = `prototool format -w ${document.fileName}`;
        cp.exec(command);

        return [];
    }
}

export default {
    "ProtobufDocumentFormatter": ProtobufDocumentFormatter,
};