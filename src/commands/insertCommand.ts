// src/commands/insertCommand.ts
// =======================================
// Command to insert Flutter commands into the active terminal
// Triggered with Ctrl+Space when the terminal is focused
// =======================================

import * as vscode from "vscode";
import { FLUTTER_COMMANDS } from "../data/flutter_commands";

export function registerInsertCommand(context: vscode.ExtensionContext) {
  // Command to show quick pick and insert into terminal
  const showCommandsCmd = vscode.commands.registerCommand(
    "flutterHelper.showCommands",
    async () => {
      const selection = await vscode.window.showQuickPick(FLUTTER_COMMANDS, {
        placeHolder: "Select a Flutter command to insert",
        matchOnDescription: true,
        matchOnDetail: true,
      });

      if (selection) {
        const terminal = vscode.window.activeTerminal;
        if (terminal) {
          terminal.sendText(selection, false); // false = don't execute automatically
          terminal.show();
        } else {
          vscode.window.showWarningMessage(
            "No active terminal found. Opening new terminal..."
          );
          const newTerminal = vscode.window.createTerminal("Flutter Helper");
          newTerminal.sendText(selection, false);
          newTerminal.show();
        }
      }
    }
  );

  // Alternative command to insert command directly
  const insertCommandCmd = vscode.commands.registerCommand(
    "flutterHelper.insertCommand",
    async () => {
      const selection = await vscode.window.showQuickPick(FLUTTER_COMMANDS, {
        placeHolder: "Choose a Flutter command",
      });

      if (selection) {
        const terminal =
          vscode.window.activeTerminal || vscode.window.createTerminal();
        terminal.sendText(selection, false);
        terminal.show();
      }
    }
  );

  context.subscriptions.push(showCommandsCmd, insertCommandCmd);
}
