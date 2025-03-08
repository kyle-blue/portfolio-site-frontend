# portfolio-site-frontend

kblue.io React Frontend. Actions automatically build docker images and roll them out to the kblue.io k8s cluster.

# Development

It is highly recommended to manually `git clone` the `portfolio-site-infrastructure` repo instead of this one for development of this service to allow for live reload to work in the local k8s dev cluster. The `portfolio-site-infrastructure` repo has a script named `scripts/pull_repos.sh` which will automatically pull all repos associated with kblue.io into the `<infrastructure-git-root>/projects` directory.

In the tilt development environment, live reload of all services is configured to look at the specified repos in the `<infrastructure-git-root>/projects`.

Service is exposed on www.kblue-dev.io:30001 in the dev environment

## Basic commands

- `yarn start` - start vite dev server on port 3000
- `yarn build` - build/bundle source
- `yarn test` - Run vitest (essentially a fork of jest) tests

# Local Install

NOTE: In this repo yarn is configured to still use node_modules for ease of use (with docker and live-reload, etc)

## Pre-requisites

- Install nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`
- Use nvm to install node:22.13.1 : `nvm install 22.13.1`
- Set 22.13.1 as default: `nvm alias default 22.13.1`
- Use 22.13.1 `nvm use default`
- Enable yarn `corepack enable`

Locally install all dependencies with `yarn`

