# Flutter Terminal Helper

![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Flutter](https://img.shields.io/badge/Flutter-CLI-02569B)
![VSCode](https://img.shields.io/badge/VSCode-1.80+-blue)

> 🚀 Boost your Flutter development productivity with intelligent command suggestions!

A powerful VSCode extension that provides intelligent autocomplete and quick suggestions for 100+ Flutter and Dart CLI commands, directly in your terminal and shell files.

## ✨ Features

### 🎯 **Terminal Autocomplete (Ctrl+Space)**

Press `Ctrl+Space` (or `Cmd+Space` on Mac) in any terminal to get instant, searchable Flutter command suggestions.

- ⚡ Fast and responsive
- 🔍 Searchable command list
- 📝 Commands are inserted (not executed) for your review
- 💻 Works with all terminal types (PowerShell, Bash, etc.)

### 📄 **Shell File Autocomplete**

Get automatic command suggestions while editing `.sh` or `.ps1` files:

- 🎨 IntelliSense-style suggestions
- 📋 Perfect for creating build scripts
- 🔄 Works with both Bash and PowerShell

### 🖥️ **Custom Terminal**

Open a special terminal with integrated suggestions:

- Command Palette → `Flutter Helper: Open Custom Terminal`
- Type `?` for instant suggestions
- 🎭 Interactive command selection

### ⚡ **Quick Insert**

Insert commands via Command Palette:

- `Ctrl+Shift+P` → `Flutter Helper: Insert Command in Terminal`
- 🚀 Fast workflow integration

## 📦 Installation

### From VSCode Marketplace (Recommended)

1. Open VSCode
2. Press `Ctrl+Shift+X` (Extensions)
3. Search for **"Flutter Terminal Helper"**
4. Click **Install**

### From Source

```bash
git clone https://github.com/your-username/flutter-terminal-helper.git
cd flutter-terminal-helper
npm install
npm run compile
# Press F5 to test
```

## 🎯 Quick Start

### 1️⃣ **In Terminal**

```bash
# Open terminal (Ctrl+`)
# Press Ctrl+Space
# Type to filter, select command, press Enter
flutter clean  # ← Inserted, ready to run
```

### 2️⃣ **In Shell Scripts**

```bash
# Create script.sh
# Start typing:
flutter  # ← Suggestions appear automatically
```

### 3️⃣ **Command Palette**

```
Ctrl+Shift+P → "Flutter Helper" → Choose option
```

## 📋 Command Categories (100+)

<details>
<summary><b>🧹 Cleaning & Dependencies (17 commands)</b></summary>

- `flutter clean` - Remove build files
- `flutter pub get` - Download dependencies
- `flutter pub upgrade` - Upgrade packages
- `flutter pub outdated` - Check outdated packages
- `flutter pub add [package]` - Add new dependency
- `flutter pub remove [package]` - Remove dependency
- `flutter pub cache repair` - Repair package cache
- And more...

</details>

<details>
<summary><b>🏗️ Build Commands (9 commands)</b></summary>

- `flutter build apk` - Build Android APK
- `flutter build appbundle` - Build Android AAB
- `flutter build ios` - Build iOS app
- `flutter build web` - Build web app
- `flutter build windows` - Build Windows app
- `flutter build macos` - Build macOS app
- `flutter build linux` - Build Linux app
- `flutter build ipa` - Build iOS IPA
- `flutter build aar` - Build Android library

</details>

<details>
<summary><b>▶️ Run & Execution (9 commands)</b></summary>

- `flutter run` - Run app
- `flutter run -d chrome` - Run on Chrome
- `flutter run -d windows` - Run on Windows
- `flutter run --release` - Run in release mode
- `flutter run --debug` - Run in debug mode
- `flutter run --profile` - Run in profile mode
- And more...

</details>

<details>
<summary><b>📱 Device & Emulator (6 commands)</b></summary>

- `flutter devices` - List connected devices
- `flutter emulators` - List available emulators
- `flutter emulators --launch Pixel_6` - Launch specific emulator
- `flutter emulators --create` - Create new emulator
- `flutter attach` - Attach to running app
- And more...

</details>

<details>
<summary><b>🧪 Testing & Analysis (11 commands)</b></summary>

- `flutter test` - Run tests
- `flutter test --coverage` - Run with coverage
- `flutter analyze` - Analyze code
- `dart analyze` - Dart analysis
- `dart test` - Run Dart tests
- `dart fix --apply` - Apply auto-fixes
- `dart format .` - Format code
- And more...

</details>

<details>
<summary><b>🔧 Configuration (17 commands)</b></summary>

- `flutter doctor` - Check environment setup
- `flutter doctor -v` - Detailed doctor output
- `flutter upgrade` - Upgrade Flutter SDK
- `flutter channel stable` - Switch to stable channel
- `flutter channel beta` - Switch to beta channel
- `flutter config --enable-web` - Enable web support
- And more...

</details>

<details>
<summary><b>🎯 Dart Commands (6 commands)</b></summary>

- `dart run` - Run Dart script
- `dart pub get` - Get Dart dependencies
- `dart compile exe` - Compile to native executable
- `dart compile js` - Compile to JavaScript
- And more...

</details>

<details>
<summary><b>🔥 Firebase & FlutterFire (5 commands)</b></summary>

- `flutterfire configure` - Configure Firebase
- `firebase login` - Login to Firebase
- `firebase init` - Initialize Firebase
- `firebase deploy` - Deploy to Firebase
- And more...

</details>

<details>
<summary><b>⚙️ Code Generation (4 commands)</b></summary>

- `flutter pub run build_runner build` - Generate code
- `flutter pub run build_runner watch` - Watch mode
- `flutter pub run build_runner clean` - Clean cache
- `flutter gen-l10n` - Generate localizations

</details>

<details>
<summary><b>📦 Project Management (5 commands)</b></summary>

- `flutter create .` - Recreate platform folders
- `flutter create my_app` - Create new project
- `flutter create --platforms=android,ios .` - Create for specific platforms
- And more...

</details>

[📖 See full command list](src/data/flutter_commands.ts)

## ⚙️ Requirements

- ✅ VSCode 1.80.0 or higher
- ✅ No Flutter/Dart installation required
- ✅ Works on Windows, macOS, and Linux

## 🎨 Customization

### Keybindings

The extension uses `Ctrl+Space` in terminal by default. You can customize in VSCode settings:

```json
{
  "key": "ctrl+space",
  "command": "flutterHelper.showCommands",
  "when": "terminalFocus"
}
```

## 🤝 Contributing

Contributions are **welcome and appreciated**! 🎉

### Ways to Contribute

- 🐛 [Report bugs](https://github.com/your-username/flutter-terminal-helper/issues)
- 💡 [Suggest features](https://github.com/your-username/flutter-terminal-helper/issues)
- ➕ [Add new commands](https://github.com/your-username/flutter-terminal-helper/blob/main/CONTRIBUTING.md)
- 📝 Improve documentation
- ⭐ Star the repository

### Development Setup

```bash
# Clone repository
git clone https://github.com/your-username/flutter-terminal-helper.git
cd flutter-terminal-helper

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Test extension (opens new VSCode window)
# Press F5 in VSCode

# Watch mode for development
npm run watch
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and release notes.

### Latest Version: 0.0.1

- ✨ Initial release
- 🎯 Ctrl+Space autocomplete in terminal
- 📄 Shell file autocomplete (`.sh`, `.ps1`)
- 🖥️ Custom terminal with suggestions
- 📋 100+ Flutter and Dart commands

## 🐛 Known Issues

None at the moment! 🎉

Found a bug? [Report it here](https://github.com/your-username/flutter-terminal-helper/issues).

## 🔒 Security

See [SECURITY.md](SECURITY.md) for security policy and reporting vulnerabilities.

**Note:** This extension does not collect or transmit any user data.

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 💙 Flutter team for the amazing framework
- 💚 VSCode team for the excellent extension API
- 🌟 All contributors who help improve this extension
- 🚀 The Flutter community

## 💬 Support & Feedback

- 📫 [Report Issues](https://github.com/your-username/flutter-terminal-helper/issues)
- 💡 [Feature Requests](https://github.com/your-username/flutter-terminal-helper/issues/new?template=feature_request.yml)
- 🐛 [Bug Reports](https://github.com/your-username/flutter-terminal-helper/issues/new?template=bug_report.yml)
- ⭐ [Star the repo](https://github.com/your-username/flutter-terminal-helper) if you find it useful!

## � Links

- 🏪 VSCode Marketplace (Coming Soon)
- 💻 [GitHub Repository](https://github.com/your-username/flutter-terminal-helper)
- 📖 [Documentation](https://github.com/your-username/flutter-terminal-helper#readme)
- 🤝 [Contributing Guide](CONTRIBUTING.md)

---

<div align="center">

**Made with ❤️ for the Flutter community**

[⭐ Star](https://github.com/your-username/flutter-terminal-helper) · [🐛 Report Bug](https://github.com/your-username/flutter-terminal-helper/issues) · [💡 Request Feature](https://github.com/your-username/flutter-terminal-helper/issues)

</div>
