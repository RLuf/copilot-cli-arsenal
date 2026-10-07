#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const boxen = require('boxen');
const { createCopilotConfig } = require('../src/index');

const pkg = require('../package.json');

const title = 'Copilot CLI Arsenal';
const subtitle = '20 specialized AI agents for GitHub Copilot CLI';

const colorGradient = ['#0366D6', '#2188FF', '#4BA3FF', '#79B8FF', '#A3CFFF', '#C8E1FF'];

function colorizeTitle(text) {
  const chars = text.split('');
  const steps = colorGradient.length;
  return chars
    .map((char, i) => {
      const color = colorGradient[i % steps];
      return chalk.hex(color)(char);
    })
    .join('');
}

function showBanner() {
  console.clear();
  console.log(chalk.hex('#0366D6')('════════════════════════════════════════════════════════════════'));
  console.log('\n');
  console.log('       🤖 ' + colorizeTitle(title));
  console.log('\n');
  console.log('       ' + chalk.hex('#79B8FF')(subtitle));
  console.log('\n');
  console.log(chalk.hex('#0366D6')('════════════════════════════════════════════════════════════════\n'));

  console.log(
    chalk.hex('#2188FF')('🚀 Supercharge your development workflow with GitHub Copilot CLI 🚀') +
    chalk.gray(`\n                             v${pkg.version}\n\n`) +
    chalk.blue('🌐 Website: ') + chalk.underline('https://fcc.rogerluft.com.br') + '\n' +
    chalk.blue('📖 GitHub: ') + chalk.underline('https://github.com/RLuf/copilot-cli-arsenal') + '\n'
  );
}

program
  .name('copilot-cli-arsenal')
  .description('Setup GitHub Copilot CLI agents and automation tools for your projects')
  .version(require('../package.json').version)
  .option('-l, --language <language>', 'specify programming language (deprecated, use --template)')
  .option('-f, --framework <framework>', 'specify framework (deprecated, use --template)')
  .option('-t, --template <template>', 'specify template (e.g., common, javascript-typescript, python, ruby)')
  .option('-d, --directory <directory>', 'target directory (default: current directory)')
  .option('-y, --yes', 'skip prompts and use defaults')
  .option('--dry-run', 'show what would be copied without actually copying')
  .option('--command-stats, --commands-stats', 'analyze existing Copilot commands and offer optimization')
  .option('--hook-stats, --hooks-stats', 'analyze existing automation hooks and offer optimization')
  .option('--mcp-stats, --mcps-stats', 'analyze existing MCP server configurations and offer optimization')
  .option('--analytics', 'launch real-time Copilot analytics dashboard')
  .option('--chats', 'launch mobile-first chats interface (AI-optimized for mobile devices)')
  .option('--agents', 'launch Copilot agents dashboard (opens directly to conversations)')
  .option('--chats-mobile', 'launch mobile-first chats interface (AI-optimized for mobile devices)')
  .option('--plugins', 'launch Plugin Dashboard to view marketplaces, installed plugins, and permissions')
  .option('--skills-manager', 'launch Skills Dashboard to view and explore installed Copilot Skills')
  .option('--tunnel', 'enable Cloudflare Tunnel for remote access (use with --analytics or --chats)')
  .option('--verbose', 'enable verbose logging for debugging and development')
  .option('--health-check, --health, --check, --verify', 'run comprehensive health check to verify Copilot CLI setup')
  .option('--agent <agent>', 'install specific agent component (supports comma-separated values)')
  .option('--command <command>', 'install specific command component (supports comma-separated values)')
  .option('--mcp <mcp>', 'install specific MCP component (supports comma-separated values)')
  .option('--setting <setting>', 'install specific setting component (supports comma-separated values)')
  .option('--hook <hook>', 'install specific hook component (supports comma-separated values)')
  .option('--skill <skill>', 'install specific skill component (supports comma-separated values)')
  .option('--workflow <workflow>', 'install workflow from hash (#hash) OR workflow YAML (base64 encoded)')
  .option('--prompt <prompt>', 'execute the provided prompt after installation or in sandbox')
  .option('--create-agent <agent>', 'create a global agent accessible from anywhere (e.g., customer-support)')
  .option('--list-agents', 'list all installed global agents')
  .option('--remove-agent <agent>', 'remove a global agent')
  .option('--update-agent <agent>', 'update a global agent to the latest version')
  .option('--studio', 'launch Copilot Studio interface for local and cloud execution')
  .option('--sandbox <provider>', 'execute Copilot agents in isolated sandbox environment (e.g., e2b)')
  .option('--e2b-api-key <key>', 'E2B API key for sandbox execution (alternative to environment variable)')
  .option('--openai-api-key <key>', 'OpenAI API key for Copilot (alternative to environment variable)')
  .option('--clone-session <url>', 'download and import a shared Copilot session from URL')
  .action(async (options) => {
    try {
      // Only show banner for non-agent-list commands
      const isQuietCommand = options.listAgents || 
                            options.removeAgent || 
                            options.updateAgent;
      
      if (!isQuietCommand) {
        showBanner();
      }
      
      await createCopilotConfig(options);
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);