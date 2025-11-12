// src/providers/terminalCompletionProvider.ts
// =======================================
// Provides terminal completion suggestions by creating shell completion files
// Works with bash, zsh, and PowerShell
// =======================================

import * as vscode from "vscode";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { FLUTTER_COMMANDS } from "../data/flutter_commands";

export async function setupTerminalCompletions(
  context: vscode.ExtensionContext
) {
  const homeDir = os.homedir();
  const platform = os.platform();

  try {
    // Create completion scripts for different shells
    if (platform === "win32") {
      await setupPowerShellCompletions(homeDir);
    } else {
      await setupBashCompletions(homeDir);
      await setupZshCompletions(homeDir);
    }

    console.log("✅ Terminal completion scripts created!");
  } catch (error) {
    console.error("❌ Error setting up terminal completions:", error);
  }
}

async function setupPowerShellCompletions(homeDir: string) {
  const psProfilePath = path.join(
    homeDir,
    "Documents",
    "PowerShell",
    "Microsoft.PowerShell_profile.ps1"
  );

  // Generate PowerShell completion script
  const completionScript = `
# Flutter Terminal Helper - Auto-generated completions
$flutterCommands = @(
${FLUTTER_COMMANDS.map((cmd) => `  "${cmd}"`).join(",\n")}
)

Register-ArgumentCompleter -Native -CommandName flutter,dart -ScriptBlock {
    param($wordToComplete, $commandAst, $cursorPosition)
    $flutterCommands | Where-Object { $_ -like "$wordToComplete*" } | ForEach-Object {
        [System.Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)
    }
}
`;

  // Create directory if it doesn't exist
  const psDir = path.dirname(psProfilePath);
  if (!fs.existsSync(psDir)) {
    fs.mkdirSync(psDir, { recursive: true });
  }

  // Append to PowerShell profile (don't overwrite)
  let existingContent = "";
  if (fs.existsSync(psProfilePath)) {
    existingContent = fs.readFileSync(psProfilePath, "utf8");
  }

  if (!existingContent.includes("Flutter Terminal Helper")) {
    fs.appendFileSync(psProfilePath, "\n" + completionScript);
    vscode.window.showInformationMessage(
      "✅ PowerShell completions added! Restart terminal to activate."
    );
  }
}

async function setupBashCompletions(homeDir: string) {
  const bashrcPath = path.join(homeDir, ".bashrc");

  const completionScript = `
# Flutter Terminal Helper - Auto-generated completions
_flutter_completions() {
    local cur="\${COMP_WORDS[COMP_CWORD]}"
    local commands="${FLUTTER_COMMANDS.join(" ")}"
    COMPREPLY=( $(compgen -W "$commands" -- "$cur") )
}
complete -F _flutter_completions flutter dart
`;

  if (fs.existsSync(bashrcPath)) {
    const content = fs.readFileSync(bashrcPath, "utf8");
    if (!content.includes("Flutter Terminal Helper")) {
      fs.appendFileSync(bashrcPath, "\n" + completionScript);
    }
  }
}

async function setupZshCompletions(homeDir: string) {
  const zshrcPath = path.join(homeDir, ".zshrc");

  const completionScript = `
# Flutter Terminal Helper - Auto-generated completions
_flutter_completions() {
    local -a commands
    commands=(
${FLUTTER_COMMANDS.map((cmd) => `      "${cmd}"`).join("\n")}
    )
    _describe 'flutter commands' commands
}
compdef _flutter_completions flutter dart
`;

  if (fs.existsSync(zshrcPath)) {
    const content = fs.readFileSync(zshrcPath, "utf8");
    if (!content.includes("Flutter Terminal Helper")) {
      fs.appendFileSync(zshrcPath, "\n" + completionScript);
    }
  }
}
