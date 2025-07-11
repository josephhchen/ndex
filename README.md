# Ndex - Vector Database Search App

A modern React + Electron application for searching and exploring vector databases with a beautiful, animated UI.

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Git

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/josephhchen/ndex.git
   cd ndex
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up Git branches** (if not already configured)
   ```bash
   # Ensure you're on main branch
   git checkout main
   
   # Create staging branch from main
   git checkout -b staging
   git push -u origin staging
   
   # Create dev branch from staging
   git checkout -b dev
   git push -u origin dev
   ```

## 🛠 Development

### Running the App

#### Web Development (React only)
```bash
yarn start
```
Opens the React app in your browser at `http://localhost:3000`

#### Electron Development (Recommended)
```bash
yarn electron-dev
```
This will:
- Start the React development server
- Compile Electron TypeScript code
- Launch the Electron app with hot reload

### Building

#### Build for Production (Web)
```bash
yarn build
```

#### Build Electron TypeScript
```bash
yarn build-electron
```

#### Package Electron App
```bash
yarn electron-pack
```
Creates distributable packages in the `release/` folder

## Branch Workflow

### Branch Structure
```
main (production)
  ↓
staging (pre-production)
  ↓
dev (development)
```

### Development Workflow

1. **Start development on `dev` branch**
   ```bash
   git checkout dev
   # Make your changes
   git add .
   git commit -m "feat: your feature description"
   git push origin dev
   ```

2. **Merge to staging for testing**
   ```bash
   git checkout staging
   git merge dev
   git push origin staging
   # Test your changes
   ```

3. **Deploy to production**
   ```bash
   git checkout main
   git merge staging
   git push origin main
   # Deploy to production
   ```

### Branch Management Commands

#### View all branches
```bash
git branch -a
```

#### Switch between branches
```bash
git checkout main    # Switch to main
git checkout staging # Switch to staging
git checkout dev     # Switch to dev
```

#### Create feature branch from dev
```bash
git checkout dev
git checkout -b feature/your-feature-name
# Work on your feature
git push -u origin feature/your-feature-name
```

#### Clean up feature branches
```bash
# After merging feature branch
git branch -d feature/your-feature-name          # Delete local
git push origin --delete feature/your-feature-name # Delete remote
```

## 📁 Project Structure

```
ndex/
├── electron/           # Electron main process (TypeScript)
│   ├── main.ts        # Main Electron process
│   ├── preload.ts     # Preload script for security
│   └── tsconfig.json  # TypeScript config for Electron
├── src/               # React application
│   ├── components/    # React components
│   ├── App.tsx        # Main React component
│   └── ...
├── public/            # Static assets
├── dist/              # Compiled Electron code
├── build/             # Built React app
└── release/           # Electron distribution packages
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `yarn start` | Start React development server |
| `yarn build` | Build React app for production |
| `yarn test` | Run React tests |
| `yarn electron` | Run Electron app (requires built React app) |
| `yarn electron-dev` | Start Electron in development mode |
| `yarn build-electron` | Compile Electron TypeScript code |
| `yarn electron-pack` | Build and package Electron app |

## 🛡 Security Features

- **Context Isolation**: Electron renderer process is isolated from Node.js
- **Preload Script**: Secure bridge between main and renderer processes
- **External Link Handling**: External links open in default browser
- **No Node Integration**: Renderer process cannot access Node.js APIs directly

## 🚀 Deployment

### Web Deployment
1. Build the React app: `yarn build`
2. Deploy the `build/` folder to your web server

### Electron Distribution
1. Package the app: `yarn electron-pack`
2. Find distributable packages in `release/` folder:
   - macOS: `.dmg` file
   - Windows: `.exe` installer
   - Linux: `.AppImage` file

## 🐛 Troubleshooting

### Common Issues

**Electron won't start**
- Ensure React dev server is running: `yarn start`
- Check if port 3000 is available
- Verify TypeScript compilation: `yarn build-electron`

**Build errors**
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Clear build cache: `rm -rf dist build release`

**Git branch issues**
- Ensure you're on the correct branch: `git branch`
- Pull latest changes: `git pull origin <branch-name>`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch from `dev`
3. Make your changes
4. Test thoroughly
5. Submit a pull request to `dev`

## 📄 License

This project is licensed under the MIT License.
# Test commit for branch workflow validation
