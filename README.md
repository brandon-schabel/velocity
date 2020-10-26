# Velocity Monorepo


Get GitHub access token for packages(enabled Create, Update, Delete)
https://github.com/settings/tokens

set npm registry to github for this project and authenticate
```bash
npm login --registry=https://npm.pkg.github.com
```


Do not use NPM in this repo, use PNPM instead.
Please read PNPM basic docs first - it's not much different than npm

first install pnpm (that's not a typo)
```bash
npm install -g pnpm
```

**BEFORE PROCEEDING PLEASE ACQUIRE CREDENTIAL CONFIGS FROM ANOTHER DEVELOPER,
YOU WILL NOT BE ABLE TO RUN THE APPS WITHOUT ENV VARIABLES**

install all packages for every package in every subfolder
```bash
pnpm install -r
```


pnpm recursive docs
https://pnpm.js.org/en/cli/recursive

 
```bash
pnpm run build
pnpm run start
```
