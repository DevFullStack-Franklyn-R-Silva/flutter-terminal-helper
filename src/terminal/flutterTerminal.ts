// src/terminal/flutterTerminal.ts
// =======================================
// Defines a custom pseudo-terminal that can show suggestions
// and simulate command execution directly inside VS Code.
// =======================================

import * as vscode from "vscode";
import { FLUTTER_COMMANDS } from "../data/flutter_commands";

export class FlutterTerminal implements vscode.Pseudoterminal {
  private writeEmitter = new vscode.EventEmitter<string>();
  onDidWrite: vscode.Event<string> = this.writeEmitter.event;

  private closeEmitter = new vscode.EventEmitter<void>();
  onDidClose?: vscode.Event<void> = this.closeEmitter.event;

  private buffer = "";

  open(): void {
    this.writeEmitter.fire(
      "Flutter Helper Terminal — type '?' for suggestions\r\n$ "
    );
  }

  close(): void {
    // Nothing to cleanup yet
  }

  handleInput(data: string): void {
    for (const ch of data) {
      if (ch === "\r") {
        // Enter key pressed
        const cmd = this.buffer.trim();
        this.writeEmitter.fire("\r\n");
        if (cmd.length > 0) {
          // Just echo the command for now (simulation mode)
          this.writeEmitter.fire(`Executing (simulated): ${cmd}\r\n`);
        }
        this.buffer = "";
        this.writeEmitter.fire("$ ");
      } else if (ch === "\x7f") {
        // Backspace key pressed
        if (this.buffer.length > 0) {
          this.buffer = this.buffer.slice(0, -1);
          this.writeEmitter.fire("\x1b[1D \x1b[1D"); // Remove one character visually
        }
      } else {
        this.buffer += ch;
        this.writeEmitter.fire(ch);

        // Trigger suggestions when user types '?'
        if (ch === "?") {
          setTimeout(() => {
            vscode.window
              .showQuickPick(FLUTTER_COMMANDS, {
                placeHolder: "Select a Flutter command",
              })
              .then((selection) => {
                if (selection) {
                  this.buffer += selection;
                  this.writeEmitter.fire(selection);
                }
              });
          }, 10);
        }
      }
    }
  }
}
