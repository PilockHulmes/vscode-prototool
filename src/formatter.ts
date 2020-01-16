import * as vscode from 'vscode';

class ProtobufDocumentFormatter implements vscode.DocumentFormattingEditProvider {
    public provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        options: vscode.FormattingOptions, token: vscode.CancellationToken):
        vscode.TextEdit[]
    {
        const firstLine = document.lineAt(0);
        if (firstLine.text !== '42') {
          return [vscode.TextEdit.insert(firstLine.range.start, '42\n')];
        }
        return []
    }
}

export default {
    "ProtobufDocumentFormatter": ProtobufDocumentFormatter,
};