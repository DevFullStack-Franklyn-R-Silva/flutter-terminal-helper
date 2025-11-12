# Contributing to Flutter Terminal Helper

First off, thank you for considering contributing to Flutter Terminal Helper! 🎉

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Note your VSCode version and OS**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List some examples of how it would be used**

### Adding New Flutter Commands

To add new Flutter/Dart commands to the suggestions:

1. Fork the repository
2. Edit `src/data/flutter_commands.ts`
3. Add your command(s) to the `FLUTTER_COMMANDS` array
4. Include a comment explaining what the command does
5. Test your changes locally
6. Submit a pull request

Example:

```typescript
"flutter your-command", // Brief description of what it does
```

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code style
3. **Test your changes** by running:
   ```bash
   npm run compile
   # Press F5 to test in VSCode
   ```
4. **Update documentation** if needed (README.md, CHANGELOG.md)
5. **Commit your changes** with a clear commit message
6. **Push to your fork** and submit a pull request

#### Pull Request Guidelines

- Use a clear and descriptive title
- Describe what changes you made and why
- Reference any related issues
- Keep changes focused - one feature/fix per PR
- Ensure all tests pass and there are no compilation errors

### Code Style

- Use TypeScript strict mode
- Follow existing code formatting
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions small and focused

### Development Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/flutter-terminal-helper.git
   cd flutter-terminal-helper
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile the code:**

   ```bash
   npm run compile
   ```

4. **Test the extension:**

   - Press `F5` in VSCode
   - A new Extension Development Host window will open
   - Test your changes there

5. **Watch mode for development:**
   ```bash
   npm run watch
   ```

## 📝 Project Structure

```
flutter-terminal-helper/
├── src/
│   ├── commands/          # Command implementations
│   ├── data/              # Flutter command list
│   ├── providers/         # Completion providers
│   ├── terminal/          # Custom terminal implementation
│   └── extension.ts       # Main entry point
├── package.json           # Extension manifest
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation
```

## 🎯 Areas We Need Help With

- Adding more Flutter/Dart commands
- Improving command descriptions
- Adding command categories/filtering
- Performance optimizations
- Better error handling
- Documentation improvements
- Translations (though code stays in English)
- Bug fixes

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

**Positive behavior includes:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

**Unacceptable behavior includes:**

- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## 🎓 First Time Contributing?

Never contributed to open source before? Here are some resources:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Timers Only](https://www.firsttimersonly.com/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

## 💬 Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort! ❤️
