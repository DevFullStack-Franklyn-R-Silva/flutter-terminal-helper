// src/extension.ts
// =======================================
// Entry point for the Flutter Terminal Helper extension.
// Registers autocomplete providers and the custom terminal command.
// =======================================

import * as vscode from "vscode";
import { registerCompletionProviders } from "./providers/completionProvider";
import { FlutterTerminal } from "./terminal/flutterTerminal";
import { registerInsertCommand } from "./commands/insertCommand";
import { registerCommandsTreeView } from "./views/commandsTreeView";

export function activate(context: vscode.ExtensionContext) {
  console.log("✅ Flutter Terminal Helper activated!");

  // 1. Register TreeView sidebar with Flutter commands
  registerCommandsTreeView(context);

  // 2. Register autocompletion for .sh and .ps1 files
  registerCompletionProviders(context);

  // 3. Register command to insert Flutter commands in active terminal
  registerInsertCommand(context);

  // 4. Register the custom terminal command
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
    "✅ Flutter Helper activated! Check the sidebar for Flutter commands."
  );
}

async function configureTerminalSuggestions() {
  const config = vscode.workspace.getConfiguration();

  // Enable terminal suggestions
  const terminalSuggestEnabled = config.get(
    "terminal.integrated.suggest.enabled"
  );
  if (terminalSuggestEnabled !== true) {
    await config.update(
      "terminal.integrated.suggest.enabled",
      true,
      vscode.ConfigurationTarget.Global
    );
  }

  // Enable quick suggestions for commands
  const quickSuggestions = config.get(
    "terminal.integrated.suggest.quickSuggestions"
  );
  if (!quickSuggestions || typeof quickSuggestions !== "object") {
    await config.update(
      "terminal.integrated.suggest.quickSuggestions",
      {
        commands: "on",
        arguments: "on",
        unknown: "off",
      },
      vscode.ConfigurationTarget.Global
    );
  }

  // Configure suggestion providers
  const providers = config.get("terminal.integrated.suggest.providers");
  if (!providers || typeof providers !== "object") {
    await config.update(
      "terminal.integrated.suggest.providers",
      {
        lsp: false,
        "terminal-suggest": true,
      },
      vscode.ConfigurationTarget.Global
    );
  }

  // Add Windows executable extensions for Flutter/Dart
  const windowsExecutableExtensions = config.get(
    "terminal.integrated.suggest.windowsExecutableExtensions"
  );
  const newExtensions = {
    ".bat": true,
    ".cmd": true,
    ".exe": true,
  };

  if (
    !windowsExecutableExtensions ||
    (typeof windowsExecutableExtensions === "object" &&
      Object.keys(windowsExecutableExtensions).length === 0)
  ) {
    await config.update(
      "terminal.integrated.suggest.windowsExecutableExtensions",
      newExtensions,
      vscode.ConfigurationTarget.Global
    );
  }

  console.log("✅ Terminal suggestions configured successfully!");
}

export function deactivate() {
  console.log("❌ Flutter Terminal Helper deactivated!");
}
