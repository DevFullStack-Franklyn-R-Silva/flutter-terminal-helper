// src/views/commandsTreeView.ts
// =======================================
// TreeView provider for Flutter commands sidebar
// Shows commands organized by category
// =======================================

import * as vscode from "vscode";
import { FLUTTER_COMMANDS_CATEGORIZED } from "../data/flutter_commands_categorized";

type TreeDataChangeEvent = CommandItem | undefined | null | void;

export class FlutterCommandsProvider
  implements vscode.TreeDataProvider<CommandItem>
{
  private readonly _onDidChangeTreeData: vscode.EventEmitter<TreeDataChangeEvent> =
    new vscode.EventEmitter<TreeDataChangeEvent>();
  readonly onDidChangeTreeData: vscode.Event<TreeDataChangeEvent> =
    this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: CommandItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: CommandItem): Thenable<CommandItem[]> {
    if (element) {
      // Show commands in category
      const commands =
        FLUTTER_COMMANDS_CATEGORIZED[
          element.label as keyof typeof FLUTTER_COMMANDS_CATEGORIZED
        ];
      return Promise.resolve(
        commands.map(
          (cmd: { label: string; command: string; description: string }) => {
            const item = new CommandItem(
              cmd.label,
              vscode.TreeItemCollapsibleState.None,
              "command"
            );
            item.command = {
              command: "flutterHelper.executeFromTree",
              title: "Execute Command",
              arguments: [cmd.command],
            };
            item.tooltip = cmd.description;
            item.description = cmd.description;
            return item;
          }
        )
      );
    }

    // Root level - show categories
    return Promise.resolve(
      Object.keys(FLUTTER_COMMANDS_CATEGORIZED).map((category) => {
        return new CommandItem(
          category,
          vscode.TreeItemCollapsibleState.Collapsed,
          "category"
        );
      })
    );
  }
}

class CommandItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly type: "category" | "command"
  ) {
    super(label, collapsibleState);

    // Set icons based on type
    if (type === "category") {
      this.iconPath = new vscode.ThemeIcon(this.getCategoryIcon(label));
    } else {
      this.iconPath = new vscode.ThemeIcon("terminal");
    }

    this.contextValue = type;
  }

  private getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      "🧹 Clean & Dependencies": "trash",
      "🏗️ Build": "package",
      "▶️ Run": "play",
      "📱 Devices": "device-mobile",
      "🧪 Test & Analyze": "beaker",
      "🧰 Configuration": "tools",
      "🎯 Dart": "code",
      "📦 Project": "folder",
      "🔥 Firebase": "flame",
      "🔍 Info": "info",
    };
    return iconMap[category] || "circle-outline";
  }
}

export function registerCommandsTreeView(context: vscode.ExtensionContext) {
  const treeDataProvider = new FlutterCommandsProvider();
  const treeView = vscode.window.createTreeView("flutterCommands", {
    treeDataProvider: treeDataProvider,
    showCollapseAll: true,
  });

  // Register command to execute from tree
  const executeFromTree = vscode.commands.registerCommand(
    "flutterHelper.executeFromTree",
    (command: string) => {
      const terminal =
        vscode.window.activeTerminal || vscode.window.createTerminal("Flutter");
      terminal.sendText(command, false); // false = don't execute, just paste
      terminal.show();
      vscode.window.showInformationMessage(`📋 Command pasted: ${command}`);
    }
  );

  // Register refresh command
  const refreshTree = vscode.commands.registerCommand(
    "flutterHelper.refreshCommands",
    () => {
      treeDataProvider.refresh();
      vscode.window.showInformationMessage("✅ Commands refreshed!");
    }
  );

  context.subscriptions.push(treeView, executeFromTree, refreshTree);
}
