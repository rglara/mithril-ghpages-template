# Mithril GitHub Pages Template

This repo is a skeleton template for establishing a GitHub Pages site of a Mithril-based single page application (SPA).

## Design
* Utilizes [Visual Studio Code](https://code.visualstudio.com/) and [remote containers](https://code.visualstudio.com/docs/remote/containers), so you don't need to install the dev environment locally
* Utilizes [Mithril](https://mithril.js.org/) as the Javascript SPA framework
* Utilizes Typescript and linting to ensure quality code
* Standard package utilities ([Webpack]() and [Yarn]()) with helpful commands

## How to Develop
1) Download the contents of this repo
1) Open Visual Studio Code
    * Ensure proper prerequisites for [remote containers](https://code.visualstudio.com/docs/remote/containers) are in place
1) Open folder of downloaded contents
    * VSCode should ask to re-open in container, which initializes the Docker container for NodeJs development
1) Within terminal inside VSCode, run `yarn install` to download and install prerequisites
1) Within terminal inside VSCode, run `yarn start` to generate Mithril content
1) Open [`./dist/index.html`](./dist/index.html) in your browser
1) Edit [`./src/index.ts`](./src/index.ts) (and add other content)
    * Webpack should notice changes upon saving and regenerate contents
    * Refresh browser to view changes

## How to Publish
1) Create your own repo on GitHub
    * It should have the name you want in the URL of your github.io page (aka `https://[username].github.io/[repoName]`)
1) Clone your repo locally (`master` branch, by default)
1) Run `yarn release`
    * Webpack will bundle and minimize content, which will then be put in the `docs` folder
1) Copy the contents of your `docs` folder (and perhaps even all the source, for ease of later updating) into the repo folder you just cloned
1) Commit and push your updates to GitHub
1) On GitHub, configure your repo's settings to select the Source of your GitHub Pages to be the "master branch /docs folder"
    * See [GitHub Help](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for details
1) Open `https://[username].github.io/[repoName]` in your browser to view your newly published content

## License
[MIT](./LICENSE)