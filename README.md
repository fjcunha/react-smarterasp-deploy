# React SmarterASP App

A simple React application with automated deployment to SmarterASP.NET hosting via GitHub Actions and FTP.

## Project Objective

This project serves as a template/example for deploying React applications using:

- **React 18** with Vite as the build tool
- **GitHub Actions** for CI/CD automation
- **FTP deployment** to SmarterASP.NET (or any FTP-compatible hosting)

The goal is to demonstrate a complete workflow where code pushed to the `main` branch automatically builds and deploys to production.

## Author

**fjcunha** - [GitHub Profile](https://github.com/fjcunha)

## Documentation

For a detailed step-by-step guide on setting up this deployment pipeline, refer to the Confluence documentation:

[Deploy de React App via Bitbucket Pipelines + FTP](https://jfabricio6.atlassian.net/wiki/spaces/~5570583260d8573ac24d5eb6dd58e7aee6fd82/pages/327681/Deploy+de+React+App+via+Bitbucket+Pipelines+FTP)

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:3000`.

## Deployment Pipeline

The project uses GitHub Actions for automated deployment. When code is pushed to the `main` branch:

1. **Build**: Dependencies are installed and the React app is built
2. **Deploy**: The `dist` folder is uploaded to the server via FTP

### Workflow Configuration

The workflow is defined in `.github/workflows/deploy.yml` and uses:

- **Ubuntu latest** as the runner
- **Node.js 18** with npm caching
- **npm ci** for reproducible dependency installation
- **lftp** for FTP file transfer with mirroring

### Required Repository Secrets

Configure these secrets in GitHub repository settings under **Settings > Secrets and variables > Actions**:

| Secret | Description |
|--------|-------------|
| `FTP_HOST` | FTP server hostname (e.g., `ftp.smarterasp.net`) |
| `FTP_USER` | FTP username |
| `FTP_PASS` | FTP password |
| `FTP_PATH` | Remote directory path (e.g., `/site/wwwroot`) |

### Alternative: Bitbucket Pipelines

If you prefer using Bitbucket instead of GitHub, a sample pipeline configuration is available in the root folder:

- **`bitbucket-pipelines.yml`** - Ready-to-use Bitbucket Pipelines configuration

Simply copy this file to your Bitbucket repository and configure the repository variables (`FTP_HOST`, `FTP_USER`, `FTP_PASS`, `FTP_PATH`) under **Repository settings > Pipelines > Repository variables**.

## Project Structure

```
react-smarterasp-app/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── src/
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Component styles
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── bitbucket-pipelines.yml      # Bitbucket Pipelines (alternative)
```

## Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [GitHub Actions](https://docs.github.com/en/actions)
