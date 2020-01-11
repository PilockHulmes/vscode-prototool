import * as vscode from 'vscode';

class ProtobufDocumentFormatter implements vscode.DocumentRangeFormattingEditProvider {
    public provideDocumentRangeFormattingEdits(
        document: vscode.TextDocument, range: vscode.Range,
        options: vscode.FormattingOptions, token: vscode.CancellationToken):
        vscode.TextEdit[]
    {
        let start = new vscode.Position(1,1);
        let end = new vscode.Position(1,2);
        let r = new vscode.Range(start, end);
        let t = new vscode.TextEdit(r, "empty");

        return [t];
    }
}

export default {
    "ProtobufDocumentFormatter": ProtobufDocumentFormatter,
};