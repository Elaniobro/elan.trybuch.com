# elan.trybuch.com | Portfolio

## 🛡Badges
![follow on Twitte](https://img.shields.io/twitter/follow/elaniobro?style=social&logo=twitter)    ![GitHub followers](https://img.shields.io/github/followers/elaniobro?style=social)

![Netlify](https://img.shields.io/netlify/3e50d41b-6a61-4f66-90c1-ca878538111f)  ![GitHub issues](https://img.shields.io/github/issues/elaniobro/elan.trybuch.com)  ![GitHub](https://img.shields.io/github/license/elaniobro/elan.trybuch.com)  ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/elaniobro/elan.trybuch.com)  ![GitHub top language](https://img.shields.io/github/languages/top/elaniobro/elan.trybuch.com)  ![GitHub pull requests](https://img.shields.io/github/issues-pr/elaniobro/elan.trybuch.com)  ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/elaniobro/elan.trybuch.com)



## 📋 Table of Contents
* [Acknowledgments](#-acknowledgments)
* [API Key & Documentation](#-api-key--documentation)
* [Author](#-author)
* [Best Practices](#-best-practice)
* [Build Setup](#-build-setup)
* [Documentation](#documentation)
* [Config](#%EF%B8%8F-config)
* [Contributing](#-contributing)
* [Contributor(s)](#-contributors)
* [How to use this module](#ℹ️-how-to-use-this-module)
* [License](#%EF%B8%8F-license)

___
## ℹ️ How to use this module
1. clone this repo with the following command: `git clone https://github.com/elaniobro/elan.trybuch.com`
1. install all the npm modules with either `yarn install`
1. enjoy!

## 🚧 Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# run tests
$ yarn test
#or
$ jest test
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

** _note: you may subsitute `yarn` for `npm` in the above commands_ **

## 🛠️ Config
_coming soon_

## 🔑 API Key & Documentation:
_TBD_

### ✅ Linting
This repo also has specific guidlines built into it, to help reduce the strain on code reviews. These rules are subject to change, but should ONLY be ammended through a pull request pending a code review. The files are also ran through a linter on `staged files` to verify that they adhere to the rules. You may run the command at anytime locally to check yourself.
```bash
yarn lint
```

## 🧪 Testing
This repo will check that all tests pass on any and all `staged files` prior to pushing. If you wish to test locally you may run the following command:
```bash
yarn test
```

## ⭐ Best Practice
Please name all git branches with a task ticket number.
```bash
$ git branch
* master
$ git checkout -b GIT-0-update-readme
Switched to a new branch 'GIT-0-update-readme'
$ git branch
* GIT-0-update-readme
  master
```
Please use the branch ticket number as a prefix for your commit(s), use the imperative voice and try to keep the title commit under 50 characters. This can be done when saying to yourself,  "this commit will: `your commit message here`."
_replace the code block in the quote with the commit message_
```bash
git commit -m "Update README.md with more sections"
```
The commit message should be short and to the point. You _may_ be verbose and feel free to use any voice you wish, if you use a double commit message flag `-m` like so:
```bash
git commit -m "Update README.md with more sections" -m "I can now say whatever I want here, I can be as long as I like as well, since everything mentioned here, will fall under the ellipse when viewing this in git. and or fall under the long form log."
```

## ✨ Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/elaniobro/elan.trybuch.com/issues)

## 👨🏻 Author
**Elan Trybuch**
* [github](https://www.github.com/trybuche)

## 🔃 Contributor(s)

### ⚖️ License
This project is licensed under the MIT License - see the LICENSE.md file for details

### 🙏🏽 Acknowledgments

### 📝 Documentation
Each component is also accompanied by a markdown file bearing the same filename as the component itself. These files can and should be auto generated via the CLI for `vuesue`. See the [vuese documentation](https://vuese.org/cli) for how to properly comment `props`, `events` and `methods`.
