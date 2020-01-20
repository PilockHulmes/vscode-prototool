import * as vscode from 'vscode';
import * as cp from 'child_process';


function ProtobufDocumentLintter(document: vscode.TextDocument, diagnosticCollection: vscode.DiagnosticCollection) {
    let command = `prototool lint --json ${document.fileName}`;
    cp.exec(command, (error, stdout, stderr) => {
        let outs = stdout.split("\n");
        let diagostics = [];
        for (let index = 0; index < outs.length; index++) {
            const out = outs[index];
            if (out.length === 0) {
                continue;
            }

            const err = JSON.parse(out);
            let range = new vscode.Range(
                new vscode.Position(err.line - 1, err.column - 1),
                new vscode.Position(err.line - 1, err.column),
            );

            diagostics.push(new vscode.Diagnostic(range, err.message, vscode.DiagnosticSeverity.Error));
        }
        diagnosticCollection.set(document.uri, diagostics);
    });
}

export default {
    "ProtobufDocumentLintter": ProtobufDocumentLintter,
};