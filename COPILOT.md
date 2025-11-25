# COPILOT.md

This file provides guidance to GitHub Copilot when working with code in this repository.

## Project Overview

This is a Node.js CLI tool for setting up GitHub Copilot CLI configurations with specialized AI agents. The project provides 163+ pre-configured agents, 216+ automated commands, and various automation tools for development workflows.

## Development Commands

### Package Management
- `npm install` - Install all dependencies
- `npm install --save <package>` - Install a production dependency
- `npm install --save-dev <package>` - Install a development dependency
- `npm update` - Update all dependencies
- `npm audit` - Check for security vulnerabilities

### Application Commands
- `npm start` - Run the CLI tool
- `node cli-tool/bin/create-copilot-config.js` - Direct CLI startup
- `npx copilot-cli-arsenal` - Run via npx

### Testing Commands
- `npm test` - Run tests
- `npm run build` - Build the project

## CLI Tool Usage

### Interactive Mode
```bash
cca                     # Launch interactive menu
cca --help             # Show all available options
```

### Component Installation
```bash
# Install agents
cca --agent security-auditor
cca --agent development-tools/code-reviewer
cca --agent security/penetration-tester

# Install commands
cca --command testing/generate-tests
cca --command deployment/setup-ci-cd

# Install multiple components
cca --agent frontend-developer --command generate-tests

# Install hooks
cca --hook pre-tool/backup-before-edit

# Install settings
cca --setting permissions/allow-npm-commands
```

### Dashboard Options
```bash
cca --analytics        # Launch analytics dashboard
cca --agents          # Launch agents dashboard
cca --plugins         # View installed plugins
cca --skills-manager  # View installed skills
cca --health-check    # Run system health check
```

## Project Structure

```
copilot-cli-arsenal/
├── cli-tool/
│   ├── bin/
│   │   └── create-copilot-config.js   # CLI entry point
│   ├── src/
│   │   ├── index.js                    # Main logic
│   │   ├── agents.js                   # Agent management
│   │   ├── analytics.js                # Analytics dashboard
│   │   └── utils.js                    # Utility functions
│   ├── components/
│   │   ├── agents/                     # 163+ AI agents
│   │   │   ├── development-tools/
│   │   │   ├── security/
│   │   │   ├── devops-infrastructure/
│   │   │   └── ...
│   │   ├── commands/                   # 216+ commands
│   │   ├── hooks/                      # Automation hooks
│   │   ├── mcps/                       # MCP integrations
│   │   └── settings/                   # Configuration templates
│   └── templates/                      # Project templates
├── docs/                               # Documentation
├── api/                                # Vercel API endpoints
└── package.json
```

## Agent Structure

Agents are Markdown files with YAML frontmatter:

```markdown
---
name: security-auditor
description: Review code for vulnerabilities and ensure OWASP compliance
tools: Read, Write, Edit, Bash
model: gpt-4
---

You are a security auditor specializing in application security.

## Focus Areas
- Authentication/authorization (JWT, OAuth2)
- OWASP Top 10 vulnerability detection
- Secure API design

## Approach
1. Defense in depth
2. Principle of least privilege
3. Never trust user input
```

## Command Structure

Commands are also Markdown files:

```markdown
---
name: generate-tests
description: Generate comprehensive test suite for the codebase
---

Analyze the codebase and generate appropriate tests:

1. Unit tests for individual functions
2. Integration tests for API endpoints
3. E2E tests for critical user flows

Use the existing test framework in the project.
```

## Configuration Files

### .copilot/settings.json
```json
{
  "agents": {
    "default": "fullstack-developer",
    "enabled": ["security-auditor", "code-reviewer"]
  },
  "permissions": {
    "allow": ["npm install", "git commit"],
    "deny": ["rm -rf /"]
  },
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

## Adding New Components

### Adding a New Agent
1. Create a Markdown file in `cli-tool/components/agents/<category>/`
2. Include YAML frontmatter with name, description, tools, model
3. Write the agent prompt
4. Run `python generate_components_json.py` to update catalog

### Adding a New Command
1. Create a Markdown file in `cli-tool/components/commands/<category>/`
2. Include YAML frontmatter with name, description
3. Write the command instructions
4. Update catalog with generation script

## Technology Stack

### Core Technologies
- **Node.js** - Runtime environment (v14.0.0+)
- **Express.js** - Web server framework
- **Commander.js** - CLI framework
- **Inquirer.js** - Interactive prompts

### CLI Dependencies
- **commander** - CLI argument parsing
- **inquirer** - Interactive prompts
- **chalk** - Terminal styling
- **ora** - Terminal spinners
- **boxen** - Terminal boxes
- **fs-extra** - Enhanced file operations

## Naming Conventions

- **Files/Modules**: Use kebab-case (`security-auditor.md`)
- **Classes**: Use PascalCase (`SecurityAuditor`)
- **Functions/Variables**: Use camelCase (`getUserData`)
- **Constants**: Use UPPER_SNAKE_CASE (`API_BASE_URL`)

## Best Practices

1. Always use `path.join()` for cross-platform paths
2. Use async/await for asynchronous operations
3. Handle errors with try/catch blocks
4. Use meaningful variable and function names
5. Keep functions focused and single-purpose

## Security Guidelines

- Never include hardcoded credentials in components
- Validate all user inputs
- Use environment variables for sensitive data
- Regularly update dependencies with `npm audit`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm test`
5. Submit a pull request

## Support

- GitHub Issues: [RLuf/copilot-cli-arsenal](https://github.com/RLuf/copilot-cli-arsenal/issues)
- Website: [fcc.rogerluft.com.br](https://fcc.rogerluft.com.br)
