# Contributing to Copilot CLI Arsenal

We welcome contributions! Help us make Copilot CLI Arsenal even better for everyone.

**📋 Before contributing, please read our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a respectful and inclusive environment for all community members.**

## 🧩 Contributing Components

The easiest way to contribute is by adding individual components like agents, commands, MCPs, settings, or hooks.

### 🤖 Adding Agents

Agents are AI specialists for specific domains (security, performance, frameworks, etc.).

1. **Create Agent File**
   ```bash
   # Navigate to appropriate category
   cd cli-tool/components/agents/[category]/
   
   # Create your agent file
   touch your-agent-name.md
   ```

2. **Agent File Structure**
   ```markdown
   ---
   name: agent-name
   description: Brief description of the agent
   tools: Read, Write, Edit, Bash
   model: gpt-4
   ---
   
   You are a [role] specializing in [domain].
   
   ## Focus Areas
   - Key capability 1
   - Key capability 2
   
   ## Approach
   1. Step 1
   2. Step 2
   
   ## Output
   - Expected output format
   ```

3. **Available Categories**
   - `development-team/` - Full-stack developers, architects
   - `security/` - Security auditing, vulnerability scanning
   - `devops-infrastructure/` - DevOps, cloud, deployment
   - `data-ai/` - Data science, ML, AI specialists
   - `development-tools/` - Tool specialists, code reviewers

4. **Creating New Categories**
   If your agent doesn't fit existing categories, create a new one:
   ```bash
   cd cli-tool/components/agents/
   mkdir your-new-category
   touch your-new-category/your-agent-name.md
   ```

### ⚡ Adding Commands

Commands are custom slash commands that extend GitHub Copilot functionality.

1. **Create Command File**
   ```bash
   cd cli-tool/components/commands/[category]/
   touch your-command-name.md
   ```

2. **Command File Structure**
   ```markdown
   ---
   name: command-name
   description: What this command does
   ---
   
   ## Purpose
   What this command accomplishes.
   
   ## Usage
   How to use the command with examples.
   
   ## Implementation
   Technical details of what the command does.
   ```

3. **Command Categories**
   - `testing/` - Test generation, validation, coverage
   - `deployment/` - Build, deploy, CI/CD operations
   - `security/` - Security scanning, auditing
   - `performance/` - Optimization, profiling

### 🔌 Adding MCPs (Model Context Protocol)

MCPs provide external service integrations.

1. **Create MCP File**
   ```bash
   cd cli-tool/components/mcps/[category]/
   touch your-service-mcp.json
   ```

2. **MCP File Structure**
   ```json
   {
     "mcpServers": {
       "service-name": {
         "command": "npx",
         "args": ["-y", "@your-org/mcp-server"],
         "env": {
           "API_KEY": "<YOUR_API_KEY>"
         }
       }
     }
   }
   ```

### 🪝 Adding Hooks

Hooks provide automation triggers for development events.

1. **Create Hook File**
   ```bash
   cd cli-tool/components/hooks/[category]/
   touch your-hook-name.json
   ```

2. **Hook File Structure**
   ```json
   {
     "hooks": {
       "PreToolCall": [
         {
           "matcher": "Edit(*)",
           "hooks": [{ "type": "command", "command": "backup" }]
         }
       ]
     }
   }
   ```

## 🛠️ Development Setup

### Prerequisites
- Node.js 14+
- npm or yarn
- Git

### Project Setup
```bash
# Clone the repository
git clone https://github.com/RLuf/copilot-cli-arsenal.git
cd copilot-cli-arsenal

# Navigate to the CLI tool directory
cd cli-tool

# Install dependencies
npm install

# Link for local testing
npm link

# Run test suite
npm test
```

## 🧪 Testing

### Component Testing
```bash
# Test component installation
npx copilot-cli-arsenal@latest --agent your-agent --dry-run
npx copilot-cli-arsenal@latest --command your-command --dry-run
```

### Template Testing
```bash
# Test template installation
npx copilot-cli-arsenal@latest --template your-template --dry-run
```

## 🤝 Contribution Process

### 1. Fork and Clone
```bash
git clone https://github.com/your-username/copilot-cli-arsenal.git
cd copilot-cli-arsenal
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-contribution
```

### 3. Make Changes
- Follow the guidelines above for your contribution type
- Test thoroughly with real scenarios
- Include comprehensive documentation

### 4. Test Changes
```bash
cd cli-tool
npm test
npm start -- --dry-run
```

### 5. Submit Pull Request
- Clear description of changes
- Screenshots for UI changes
- Testing instructions
- Reference related issues

## 🎯 What We're Looking For

### High Priority
- **Security Agents** - Security auditing, vulnerability scanning
- **Performance Commands** - Optimization, profiling
- **Cloud MCPs** - AWS, Azure, GCP integrations
- **Framework Agents** - React, Vue, Angular, Next.js specialists

## 📞 Getting Help

### Community Support
- **GitHub Issues** - [Report bugs or request features](https://github.com/RLuf/copilot-cli-arsenal/issues)
- **GitHub Discussions** - [Join community discussions](https://github.com/RLuf/copilot-cli-arsenal/discussions)

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for helping make Copilot CLI Arsenal better for everyone! 🚀