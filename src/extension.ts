// src/extension.ts
// =======================================
// Entry point for the Flutter Terminal Helper extension.
// Registers autocomplete providers and the custom terminal command.
// =======================================

import * as vscode from "vscode";
import { registerCompletionProviders } from "./providers/completionProvider";
import { FlutterTerminal } from "./terminal/flutterTerminal";
import { registerInsertCommand } from "./commands/insertCommand";

export function activate(context: vscode.ExtensionContext) {
  console.log("✅ Flutter Terminal Helper activated!");

  // 1. Register autocompletion for .sh and .ps1 files
  registerCompletionProviders(context);

  // 2. Register command to insert Flutter commands in active terminal
  registerInsertCommand(context);

  // 3. Register the custom terminal command
  const openTerminalCmd = vscode.commands.registerCommand(
    "flutterHelper.openTerminal",
    async () => {
      const pty = new FlutterTerminal();
      const terminal = vscode.window.createTerminal({
        name: "Flutter Helper",
        pty,
      });
      terminal.show();
    }
  );

  context.subscriptions.push(openTerminalCmd);

  // Show activation message
  vscode.window.showInformationMessage(
    "Flutter Helper activated! Use Ctrl+Space in terminal for suggestions."
  );
}

export function deactivate() {
  console.log("❌ Flutter Terminal Helper deactivated!");
}
