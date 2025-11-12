// src/data/flutter_commands.ts
// =======================================
// Contains a curated list of Flutter and Dart CLI commands
// used for autocomplete suggestions and terminal helpers.
// =======================================

const FLUTTER_COMMANDS = [
  // 🧹 Cleaning and dependency management
  "flutter clean", // Remove build and temporary files
  "flutter clean && flutter pub get", // Clean and fetch dependencies again
  "flutter pub get", // Get all project dependencies
  "flutter pub upgrade", // Upgrade all dependencies
  "flutter pub outdated", // Show outdated dependencies
  "flutter pub cache repair", // Repair the Flutter package cache
  "flutter pub run", // Run a Dart script from pub
  "flutter pub add", // Add a new dependency to pubspec.yaml
  "flutter pub remove", // Remove a dependency from pubspec.yaml

  // 🏗️ Build commands
  "flutter build apk", // Build Android APK
  "flutter build appbundle", // Build Android App Bundle (AAB)
  "flutter build ios", // Build iOS app
  "flutter build macos", // Build macOS app
  "flutter build windows", // Build Windows app
  "flutter build linux", // Build Linux app
  "flutter build web", // Build web app
  "flutter build aar", // Build Android library (AAR)
  "flutter build ipa", // Build iOS IPA file

  // ▶️ Run and execution
  "flutter run", // Run the app on a connected device
  "flutter run -d chrome", // Run on Chrome (web)
  "flutter run -d windows", // Run on Windows desktop
  "flutter run -d macos", // Run on macOS desktop
  "flutter run -d linux", // Run on Linux desktop
  "flutter run -d web-server", // Run with a web server target
  "flutter run --release", // Run in release mode
  "flutter run --debug", // Run in debug mode
  "flutter run --profile", // Run in profile mode

  // 📱 Device and emulator management
  "flutter devices", // List connected devices
  "flutter emulators", // List available emulators
  "flutter emulators --launch Pixel_6", // Launch a specific emulator
  "flutter emulators --create", // Create a new emulator
  "flutter emulators --list", // Show all emulators
  "flutter attach", // Attach to a running Flutter app

  // 🧪 Testing, formatting, and analysis
  "flutter test", // Run Flutter tests
  "flutter test --coverage", // Run tests with coverage
  "flutter analyze", // Analyze project for issues
  "flutter analyze --no-pub", // Analyze without fetching dependencies
  "flutter analyze --watch", // Continuous analysis mode
  "dart analyze", // Dart analysis
  "dart test", // Run Dart tests
  "dart fix --apply", // Automatically apply Dart fixes
  "flutter format .", // Format all Flutter project files
  "dart format .", // Format all Dart files
  "dart format . --line-length 120", // Format Dart files with max line length of 120

  // 🧰 Configuration and environment
  "flutter doctor", // Check Flutter setup and environment
  "flutter doctor -v", // Detailed doctor output
  "flutter upgrade", // Upgrade Flutter SDK
  "flutter downgrade", // Downgrade Flutter SDK
  "flutter channel", // Show or switch Flutter channels
  "flutter channel stable", // Switch to stable channel
  "flutter channel beta", // Switch to beta channel
  "flutter channel master", // Switch to master channel
  "flutter config", // Show or set configuration
  "flutter config --enable-web", // Enable web support
  "flutter config --enable-linux-desktop", // Enable Linux desktop support
  "flutter config --enable-macos-desktop", // Enable macOS desktop support
  "flutter config --enable-windows-desktop", // Enable Windows desktop support
  "flutter precache", // Download Flutter binaries in advance

  // 🎯 Dart commands
  "dart run", // Run Dart script
  "dart pub get", // Get Dart dependencies
  "dart pub upgrade", // Upgrade Dart dependencies
  "dart compile exe bin/main.dart -o build/main.exe", // Compile Dart to native executable
  "dart compile js bin/main.dart -o build/main.js", // Compile Dart to JavaScript

  // 📦 Project management
  "flutter create .", // Recreate platform folders in existing project
  "flutter create --platforms=android,ios .", // Create for specific platforms
  "flutter create my_app", // Create a new Flutter project
  "flutter gen-l10n", // Generate localization files
  "flutter pub global activate flutterfire_cli", // Activate Firebase CLI for Flutter
  "flutterfire configure", // Configure Firebase for Flutter project

  // 🧩 Firebase and integrations
  "flutterfire configure", // Configure FlutterFire (Firebase)
  "firebase login", // Log into Firebase
  "firebase init", // Initialize Firebase in a project
  "firebase deploy", // Deploy Firebase project

  // 🔍 Info and diagnostics
  "flutter --version", // Show Flutter version
  "flutter --help", // Show Flutter help
  "flutter symbolize", // Symbolize crash dumps
  "flutter downgrade", // Downgrade Flutter SDK
  "flutter upgrade --force", // Force upgrade Flutter SDK

  // 🧹 Code generation and cleanup
  "flutter pub run build_runner build", // Generate code (build_runner)
  "flutter pub run build_runner watch", // Watch mode for build_runner
  "flutter pub run build_runner clean", // Clean build_runner cache
  "flutter pub run intl_utils:generate", // Generate localization (intl_utils)
];
export { FLUTTER_COMMANDS };
