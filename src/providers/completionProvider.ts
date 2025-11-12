// src/providers/completionProvider.ts
// =======================================
// Registers completion providers for Bash/Shell and PowerShell.
// These suggestions will appear when typing in .sh or .ps1 files.
// =======================================

import * as vscode from "vscode";
import { FLUTTER_COMMANDS } from "../data/flutter_commands";

export function registerCompletionProviders(context: vscode.ExtensionContext) {
  // ShellScript provider (.sh)
  const shellProvider = vscode.languages.registerCompletionItemProvider(
    { language: "shellscript", scheme: "file" },
    {
      provideCompletionItems() {
        return FLUTTER_COMMANDS.map((cmd) => {
          const item = new vscode.CompletionItem(
            cmd,
            vscode.CompletionItemKind.Snippet
          );
          item.insertText = cmd;
          item.detail = "Flutter Command";
          return item;
        });
      },
    },
    " "
  );

  // PowerShell provider (.ps1)
  const psProvider = vscode.languages.registerCompletionItemProvider(
    { language: "powershell", scheme: "file" },
    {
      provideCompletionItems() {
        return FLUTTER_COMMANDS.map((cmd) => {
          const item = new vscode.CompletionItem(
            cmd,
            vscode.CompletionItemKind.Snippet
          );
          item.insertText = cmd;
          item.detail = "Flutter Command";
          return item;
        });
      },
    },
    " "
  );

  context.subscriptions.push(shellProvider, psProvider);
}
