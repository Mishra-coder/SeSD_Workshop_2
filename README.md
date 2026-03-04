# 🛠️ DevTools CLI

A feature-rich command-line interface tool built with Node.js and TypeScript, featuring multiple API integrations and Object-Oriented Programming principles.

## ✨ Features

- 🎯 10+ custom commands
- 🌐 Multiple API integrations (GitHub, Weather, Quotes, Jokes, Advice, Crypto)
- 🎨 Colored CLI output using Chalk
- 🚀 Built with TypeScript and OOP principles
- ⚡ Fast and lightweight
- 📦 Easy to install and use

## 📥 Installation

### Step 1: Clone Repository
```bash
git clone <your-repo-url>
cd devtools-cli
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Build Project
```bash
npm run build
```

### Step 4: Link Globally (Optional)
```bash
npm link
```

Now you can use `devtools` command from anywhere!

## 📋 Available Commands

### 1. 👋 Greet Command
Greet a user by name with optional formal mode.

**Usage:**
```bash
devtools greet John
devtools greet John --formal
```

**Options:**
- `-f, --formal` - Use formal greeting style

### 2. 📄 File Info Command
Get detailed information about a file.

**Usage:**
```bash
devtools fileinfo package.json
devtools fileinfo src/index.ts
```

**Shows:** Name, path, size, extension, created/modified dates

### 3. 🐙 GitHub Command
Fetch GitHub user information.

**Usage:**
```bash
devtools github octocat
devtools github torvalds
```

**Shows:** Username, name, bio, repos, followers, following, profile URL

### 4. 🌤️ Weather Command
Get current weather for any city.

**Usage:**
```bash
devtools weather London
devtools weather "New York"
devtools weather Tokyo
```

**Shows:** Temperature (°C/°F), condition, humidity, wind speed

### 5. 💭 Quote Command
Get a random inspirational quote.

**Usage:**
```bash
devtools quote
```

**Shows:** Quote text and author name

### 6. 🔢 Math Command
Perform basic mathematical operations.

**Usage:**
```bash
devtools math add 10 20
devtools math sub 50 30
devtools math mul 5 6
devtools math div 100 4
```

**Operations:** add, sub, mul, div

### 7. 🕐 Time Command
Display current date and time.

**Usage:**
```bash
devtools time
devtools time --utc
```

**Options:**
- `-u, --utc` - Show UTC time instead of local time

### 8. 😂 Joke Command
Get a random programming joke.

**Usage:**
```bash
devtools joke
```

**Shows:** Programming-related jokes (safe mode enabled)

### 9. 💡 Advice Command
Get random life advice.

**Usage:**
```bash
devtools advice
```

**Shows:** Random helpful advice

### 10. 💰 Crypto Command
Get cryptocurrency prices.

**Usage:**
```bash
devtools crypto bitcoin
devtools crypto ethereum
devtools crypto dogecoin
```

**Shows:** Current USD price and 24h change percentage

### ➕ Additional Commands

**Version:**
```bash
devtools --version
```

**Help:**
```bash
devtools --help
devtools <command> --help
```

**Examples:**
```bash
devtools greet --help
devtools math --help
```

## 📁 Project Structure

```
devtools-cli/
├── src/
│   ├── cli/
│   │   └── CLI.ts
│   ├── commands/
│   │   ├── BaseCommand.ts
│   │   ├── GreetCommand.ts
│   │   ├── FileInfoCommand.ts
│   │   ├── GitHubCommand.ts
│   │   ├── WeatherCommand.ts
│   │   ├── QuoteCommand.ts
│   │   ├── MathCommand.ts
│   │   ├── TimeCommand.ts
│   │   ├── JokeCommand.ts
│   │   ├── AdviceCommand.ts
│   │   └── CryptoCommand.ts
│   ├── services/
│   │   ├── ApiService.ts
│   │   ├── GitHubService.ts
│   │   ├── WeatherService.ts
│   │   ├── QuoteService.ts
│   │   ├── JokeService.ts
│   │   ├── AdviceService.ts
│   │   └── CryptoService.ts
│   └── index.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## 🎓 OOP Concepts Used

### Classes
All commands and services are implemented as classes for better code organization.

### Inheritance
- Commands extend `BaseCommand`
- Services extend `ApiService`

### Encapsulation
Private methods and properties keep internal logic hidden.

### Abstraction
Abstract base classes define common interfaces for all commands and services.

### Polymorphism
Different command implementations share the same interface.

## 🌐 API Integrations

| API | Purpose | Endpoint |
|-----|---------|----------|
| GitHub API | User information | api.github.com |
| Weather API | Weather data | wttr.in |
| Quotable API | Inspirational quotes | api.quotable.io |
| JokeAPI | Programming jokes | v2.jokeapi.dev |
| Advice Slip API | Random advice | api.adviceslip.com |
| CoinGecko API | Cryptocurrency prices | api.coingecko.com |

## 🔧 Development

### Run in Development Mode
```bash
npm run dev -- <command>
```

### Build the Project
```bash
npm run build
```

### Run Built Version
```bash
npm start -- <command>
```

### Test Commands
```bash
node dist/index.js greet Test
node dist/index.js weather London
node dist/index.js github octocat
```

## 💻 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| TypeScript | Type-safe JavaScript |
| Commander.js | CLI framework |
| Axios | HTTP client for API calls |
| Chalk | Terminal styling and colors |

## 🚀 Example Usage

### Quick Start Examples

```bash
devtools greet John
# Output: Hey John! 👋 Welcome to DevTools CLI!

devtools github torvalds
# Shows: Username, repos, followers, etc.

devtools weather Tokyo
# Shows: Temperature, humidity, wind speed

devtools quote
# Shows: Random inspirational quote

devtools math add 42 58
# Output: Result: 100

devtools crypto bitcoin
# Shows: Current BTC price in USD

devtools joke
# Shows: Random programming joke
```

### Advanced Examples

```bash
devtools greet "John Doe" --formal
devtools time --utc
devtools math div 100 4
devtools weather "New York"
```

## 📄 License

MIT

## 👤 Author

[Your Name]

## 📤 Submission

- **Workshop**: SESD Workshop 2
- **Deadline**: 04/03/2026
- **Repository**: [Your GitHub Repo URL]
