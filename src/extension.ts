// src/extension.ts
// =======================================
// Entry point for the Flutter Terminal Helper extension.
// Provides a TreeView sidebar with categorized Flutter/Dart commands
// =======================================

import * as vscode from "vscode";
import { registerCommandsTreeView } from "./views/commandsTreeView";

export function activate(context: vscode.ExtensionContext) {
  console.log("✅ Flutter Terminal Helper activated!");

  // Register TreeView sidebar with Flutter commands
  registerCommandsTreeView(context);

  // Show activation message
  vscode.window.showInformationMessage(
    "✅ Flutter Helper activated! Check the sidebar for Flutter commands."
  );
}

export function deactivate() {
  console.log("❌ Flutter Terminal Helper deactivated!");
}
