# START-REACT

**The Story**

While there are a ton of react boilerplates, trying to find one that would allow you to create a simple react component is all but impossible, finding one with a builtin CLI / code generation was like looking for bigfoot.    

**STARTREACT Boilerplate**

A simple, somewhat opinionated -- no fuss, no bells, no whistles boilerplate for creating React components. The goal is simple -- try and stay true the idea that **React is the V in MVC**. Flux, Routing, Isomorphic, etc are cool but it's not what **start-react** was built to do, it was created to be a simple option for anyone who just wants to build, and package "Composable Components" or **V**-iews that can then be reused in any REACT application.

**React Boilerplate**

Other places where you can find some great boilerplates

- [Awesome react](https://github.com/enaqx/awesome-react#boilerplates).
- [React Wiki](https://github.com/facebook/react/wiki/Complementary-Tools)

## Features

- NPM - Package management, scripts directives for build management.
- Browser - Sync live browser reload files including react components.
- Webpack - Bundle modules and dependencies

## Installation

**Required**
- NodeJS - [Download/Install](https://nodejs.org/)
- Bower [more info](http://bower.io/)  - install `npm install -g bower`
- Browser sync [more info](http://www.browsersync.io/) - install `npm install -g browser-sync`

**Quick Start:**
- Fork the repo [https://github.com/foluke-ui-kit/start-react](Start React).
- Switch over the you install directory
- Install dependencies `npm install`
- Test run `npm run dev`
    Launches:
    - BrowserSync in your default browser and watches for changes to your files (jsx, html, css, etc) and updates the browser on the fly
    - Webpack in development development mode the watches and compiles you jsx/js files

Open the sample component `src/index.jsx` make the some changes and to the component and watch the changes live reload in your browser, you can also edit the public/css/_.css and public/_.html

**NPM Script Commands**
- `npm run build` : Package for production  removes all the development files and runs webpack -p(roduction)
- `npm run dev`: Development watches for changes build with mapping - launches browsersync and webpack in watch mode.
- `npm run liveview` : Liveview fires up BrowserSync and launches you default browser
- `npm run webpack` : Use webpack to build and watch in production mode
- `npm run setup-start-react` : Runs CLI interface that setups and makes changes to the project name, github url, author, etc in the package/bower.json, README.md. Creates a project_name.config.json to store config variables.

### Creating components -- Get to work.

TODO

Create a CLI interface for generating components

**BrowserSync Config**

BrowserSync (bs-config.js) handles all livereload options go to [BrowserSync Docs](http://www.browsersync.io/docs/options/)

To contribute fork the repo -- [https://github.com/foluke-ui-kit/start-react](https://github.com/foluke-ui-kit/start-react) send a pull request.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
[View the release notes](https://github.com/foluke-ui-kit/start-react/releases)

## TODO
- Customizing configurations
- ...

## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
