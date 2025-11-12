// src/data/flutter_commands_categorized.ts
// =======================================
// Flutter commands organized by category for TreeView
// =======================================

export interface FlutterCommand {
  label: string;
  command: string;
  description: string;
}

export const FLUTTER_COMMANDS_CATEGORIZED = {
  "🧹 Clean & Dependencies": [
    {
      label: "Clean",
      command: "flutter clean",
      description: "Remove build and temporary files",
    },
    {
      label: "Clean + Get",
      command: "flutter clean && flutter pub get",
      description: "Clean and fetch dependencies",
    },
    {
      label: "Pub Get",
      command: "flutter pub get",
      description: "Get all project dependencies",
    },
    {
      label: "Pub Upgrade",
      command: "flutter pub upgrade",
      description: "Upgrade all dependencies",
    },
    {
      label: "Pub Outdated",
      command: "flutter pub outdated",
      description: "Show outdated dependencies",
    },
    {
      label: "Cache Repair",
      command: "flutter pub cache repair",
      description: "Repair the Flutter package cache",
    },
  ],

  "🏗️ Build": [
    {
      label: "Build APK",
      command: "flutter build apk",
      description: "Build Android APK",
    },
    {
      label: "Build App Bundle",
      command: "flutter build appbundle",
      description: "Build Android App Bundle (AAB)",
    },
    {
      label: "Build iOS",
      command: "flutter build ios",
      description: "Build iOS app",
    },
    {
      label: "Build Web",
      command: "flutter build web",
      description: "Build web app",
    },
    {
      label: "Build Windows",
      command: "flutter build windows",
      description: "Build Windows app",
    },
    {
      label: "Build Linux",
      command: "flutter build linux",
      description: "Build Linux app",
    },
    {
      label: "Build macOS",
      command: "flutter build macos",
      description: "Build macOS app",
    },
    {
      label: "Build IPA",
      command: "flutter build ipa",
      description: "Build iOS IPA file",
    },
  ],

  "▶️ Run": [
    {
      label: "Run",
      command: "flutter run",
      description: "Run the app on a connected device",
    },
    {
      label: "Run on Chrome",
      command: "flutter run -d chrome",
      description: "Run on Chrome (web)",
    },
    {
      label: "Run on Windows",
      command: "flutter run -d windows",
      description: "Run on Windows desktop",
    },
    {
      label: "Run Release",
      command: "flutter run --release",
      description: "Run in release mode",
    },
    {
      label: "Run Debug",
      command: "flutter run --debug",
      description: "Run in debug mode",
    },
    {
      label: "Run Profile",
      command: "flutter run --profile",
      description: "Run in profile mode",
    },
  ],

  "📱 Devices": [
    {
      label: "List Devices",
      command: "flutter devices",
      description: "List connected devices",
    },
    {
      label: "List Emulators",
      command: "flutter emulators",
      description: "List available emulators",
    },
    {
      label: "Launch Emulator",
      command: "flutter emulators --launch Pixel_6",
      description: "Launch a specific emulator",
    },
    {
      label: "Attach to App",
      command: "flutter attach",
      description: "Attach to a running Flutter app",
    },
  ],

  "🧪 Test & Analyze": [
    {
      label: "Test",
      command: "flutter test",
      description: "Run Flutter tests",
    },
    {
      label: "Test with Coverage",
      command: "flutter test --coverage",
      description: "Run tests with coverage",
    },
    {
      label: "Analyze",
      command: "flutter analyze",
      description: "Analyze project for issues",
    },
    {
      label: "Format",
      command: "flutter format .",
      description: "Format all Flutter project files",
    },
    {
      label: "Dart Fix",
      command: "dart fix --apply",
      description: "Automatically apply Dart fixes",
    },
  ],

  "🧰 Configuration": [
    {
      label: "Doctor",
      command: "flutter doctor",
      description: "Check Flutter setup and environment",
    },
    {
      label: "Doctor Verbose",
      command: "flutter doctor -v",
      description: "Detailed doctor output",
    },
    {
      label: "Upgrade Flutter",
      command: "flutter upgrade",
      description: "Upgrade Flutter SDK",
    },
    {
      label: "Switch to Stable",
      command: "flutter channel stable",
      description: "Switch to stable channel",
    },
    {
      label: "Switch to Beta",
      command: "flutter channel beta",
      description: "Switch to beta channel",
    },
    {
      label: "Enable Web",
      command: "flutter config --enable-web",
      description: "Enable web support",
    },
  ],

  "🎯 Dart": [
    {
      label: "Dart Run",
      command: "dart run",
      description: "Run Dart script",
    },
    {
      label: "Dart Pub Get",
      command: "dart pub get",
      description: "Get Dart dependencies",
    },
    {
      label: "Dart Analyze",
      command: "dart analyze",
      description: "Analyze Dart code",
    },
    {
      label: "Dart Format",
      command: "dart format .",
      description: "Format all Dart files",
    },
  ],

  "📦 Project": [
    {
      label: "Create Project",
      command: "flutter create my_app",
      description: "Create a new Flutter project",
    },
    {
      label: "Recreate Platforms",
      command: "flutter create .",
      description: "Recreate platform folders",
    },
    {
      label: "Generate Localization",
      command: "flutter gen-l10n",
      description: "Generate localization files",
    },
    {
      label: "Build Runner Build",
      command: "flutter pub run build_runner build",
      description: "Generate code (build_runner)",
    },
    {
      label: "Build Runner Watch",
      command: "flutter pub run build_runner watch",
      description: "Watch mode for build_runner",
    },
  ],

  "🔥 Firebase": [
    {
      label: "FlutterFire Configure",
      command: "flutterfire configure",
      description: "Configure Firebase for Flutter",
    },
    {
      label: "Firebase Login",
      command: "firebase login",
      description: "Log into Firebase",
    },
    {
      label: "Firebase Init",
      command: "firebase init",
      description: "Initialize Firebase in project",
    },
    {
      label: "Activate FlutterFire CLI",
      command: "flutter pub global activate flutterfire_cli",
      description: "Activate Firebase CLI for Flutter",
    },
  ],

  "🔍 Info": [
    {
      label: "Flutter Version",
      command: "flutter --version",
      description: "Show Flutter version",
    },
    {
      label: "Dart Version",
      command: "dart --version",
      description: "Show Dart version",
    },
    {
      label: "Flutter Help",
      command: "flutter --help",
      description: "Show Flutter help",
    },
  ],
};
