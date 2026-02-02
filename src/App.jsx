import './App.css'

const steps = [
  {
    number: 1,
    title: 'Create Your React App',
    description: 'Set up a React project using Vite. This provides fast development and optimized production builds.',
    code: 'npm create vite@latest my-app -- --template react'
  },
  {
    number: 2,
    title: 'Push to GitHub',
    description: 'Create a repository on GitHub and push your code to the main branch.',
    code: 'git remote add origin https://github.com/your-username/your-repo.git\ngit push -u origin main'
  },
  {
    number: 3,
    title: 'Configure Repository Secrets',
    description: 'In GitHub, go to Settings > Secrets and variables > Actions and add these secrets:',
    variables: ['FTP_HOST', 'FTP_USER', 'FTP_PASS', 'FTP_PATH']
  },
  {
    number: 4,
    title: 'Add GitHub Actions Workflow',
    description: 'Create .github/workflows/deploy.yml with the FTP deployment configuration.',
    code: `name: Build and Deploy React via FTP

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: sudo apt-get install -y lftp
      - name: Deploy via FTP
        run: |
          lftp -c "open -u $FTP_USER,$FTP_PASS $FTP_HOST
          mirror -R --no-perms dist $FTP_PATH"
        env:
          FTP_HOST: \${{ secrets.FTP_HOST }}
          FTP_USER: \${{ secrets.FTP_USER }}
          FTP_PASS: \${{ secrets.FTP_PASS }}
          FTP_PATH: \${{ secrets.FTP_PATH }}`
  },
  {
    number: 5,
    title: 'Deploy Automatically',
    description: 'Push changes to main branch and watch your app deploy automatically to SmarterASP.NET!',
    code: 'git add . && git commit -m "Deploy" && git push'
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>React + GitHub Actions + SmarterASP</h1>
          <p className="subtitle">Automated deployment guide</p>
        </div>
        <a
          href="https://github.com/fjcunha"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          fjcunha
        </a>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Deploy React Apps to SmarterASP.NET</h2>
          <p>
            Learn how to set up continuous deployment for your React application
            using GitHub Actions and FTP to SmarterASP.NET hosting.
          </p>
          <div className="tech-badges">
            <span className="badge">React 18</span>
            <span className="badge">Vite</span>
            <span className="badge">GitHub Actions</span>
            <span className="badge">FTP Deploy</span>
          </div>
        </section>

        <section className="guide">
          <h3>Step-by-Step Guide</h3>
          <div className="steps">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  {step.variables && (
                    <ul className="variables-list">
                      {step.variables.map((v) => (
                        <li key={v}><code>{v}</code></li>
                      ))}
                    </ul>
                  )}
                  {step.code && (
                    <pre className="code-block">
                      <code>{step.code}</code>
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h4>Automated Builds</h4>
            <p>Every push to main triggers an automatic build and deployment process.</p>
          </div>
          <div className="feature-card">
            <h4>Fast Deployments</h4>
            <p>Using LFTP with mirror mode ensures only changed files are uploaded.</p>
          </div>
          <div className="feature-card">
            <h4>Zero Downtime</h4>
            <p>Files are synced incrementally, keeping your site available during deploys.</p>
          </div>
        </section>

        <section className="resources">
          <h3>Resources</h3>
          <div className="resource-links">
            <a
              href="https://jfabricio6.atlassian.net/wiki/spaces/~5570583260d8573ac24d5eb6dd58e7aee6fd82/pages/327681/Deploy+de+React+App+via+Bitbucket+Pipelines+FTP"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Confluence Documentation
            </a>
            <a
              href="https://docs.github.com/en/actions"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              GitHub Actions Docs
            </a>
            <a
              href="https://www.smarterasp.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              SmarterASP.NET
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Built by{' '}
          <a
            href="https://github.com/fjcunha"
            target="_blank"
            rel="noopener noreferrer"
          >
            fjcunha
          </a>
          {' '} | React + Vite + GitHub Actions
        </p>
      </footer>
    </div>
  )
}

export default App
