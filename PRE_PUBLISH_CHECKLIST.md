# Pre-Publication Checklist

Before publishing your extension, make sure to complete these steps:

## 📝 Repository Setup

- [ ] Replace `your-username` with your GitHub username in:
  - [ ] `package.json` → `repository.url`
  - [ ] `package.json` → `bugs.url`
  - [ ] `package.json` → `homepage`
  - [ ] `README.md` (all GitHub links)
  - [ ] `CONTRIBUTING.md`

- [ ] Replace `your-publisher-name` in:
  - [ ] `package.json` → `publisher`

- [ ] Update copyright year in `LICENSE` if needed

## 🎨 Optional: Add Extension Icon

- [ ] Create a 128x128 PNG icon named `icon.png` in the root directory
- [ ] Add `"icon": "icon.png",` to `package.json` under categories

## 🔧 Code Review

- [ ] All comments are in English ✅
- [ ] All user-facing strings are in English ✅
- [ ] No hardcoded personal information
- [ ] No console.logs in production code (except activation messages)

## 🧪 Testing

- [ ] Run `npm run compile` successfully
- [ ] Press F5 and test in Extension Development Host:
  - [ ] Ctrl+Space works in terminal
  - [ ] Autocomplete works in .sh files
  - [ ] Autocomplete works in .ps1 files
  - [ ] Custom terminal opens correctly
  - [ ] All commands appear in Command Palette

## 📦 Package Preparation

```bash
# Install vsce if you haven't
npm install -g @vscode/vsce

# Test package creation
vsce package

# This creates a .vsix file you can test locally
```

## 🚀 Publishing to VSCode Marketplace

### Prerequisites

1. Create Microsoft/Azure account: https://dev.azure.com
2. Create Personal Access Token (PAT):
   - Go to https://dev.azure.com
   - User Settings → Personal Access Tokens
   - Create new token with "Marketplace" → "Manage" permissions
   - Save the token securely!

### Publish

```bash
# Login with your PAT
vsce login your-publisher-name

# Publish (this will increment version automatically if needed)
vsce publish

# Or publish with specific version
vsce publish patch  # 0.0.1 → 0.0.2
vsce publish minor  # 0.0.1 → 0.1.0
vsce publish major  # 0.0.1 → 1.0.0
```

## 🐙 GitHub Repository

- [ ] Create repository on GitHub
- [ ] Push code:

```bash
git init
git add .
git commit -m "Initial commit: Flutter Terminal Helper v0.0.1"
git branch -M main
git remote add origin https://github.com/your-username/flutter-terminal-helper.git
git push -u origin main
```

- [ ] Create first release:
  - Go to GitHub → Releases → Create new release
  - Tag: `v0.0.1`
  - Title: `Flutter Terminal Helper v0.0.1`
  - Description: Copy from CHANGELOG.md

- [ ] Enable GitHub Issues
- [ ] Enable GitHub Discussions (optional)
- [ ] Add topics: `vscode`, `flutter`, `dart`, `terminal`, `autocomplete`, `vscode-extension`

## 📢 Post-Publication

- [ ] Update README.md with actual Marketplace link
- [ ] Test installation from Marketplace
- [ ] Share on social media:
  - [ ] Twitter/X
  - [ ] Reddit (r/FlutterDev, r/dartlang)
  - [ ] Dev.to
  - [ ] LinkedIn

## 🔄 Maintenance

- [ ] Watch GitHub issues
- [ ] Respond to user feedback
- [ ] Plan future features based on community requests

---

## Quick Commands Reference

```bash
# Development
npm install          # Install dependencies
npm run compile      # Compile TypeScript
npm run watch        # Watch mode for development
code .               # Open in VSCode, press F5 to test

# Publishing
vsce package         # Create .vsix file
vsce publish         # Publish to marketplace
vsce publish patch   # Publish patch version

# Git
git add .
git commit -m "feat: your feature"
git push origin main
```

## 📚 Useful Links

- [VSCode Extension Publishing Guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Manifest Reference](https://code.visualstudio.com/api/references/extension-manifest)
- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
- [Azure DevOps PAT Guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

---

**Good luck with your extension! 🚀**
