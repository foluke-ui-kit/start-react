# React-Start
A simple, somewhat opiniated -- no fuss, no bells, no whistles boilerplate for creating React components. The goal is simply to try and stay true the idea that **React is the V in MVC**. Flux, Routing, Isomorphic, etc are cool but it's not what **start-react** was built to do, it was created to be a simple option for anyone who just wants to build, and package "Composable Components" or **V**-iews that can then be reused in any application.

**Features:**
- NPM - Package management, scripts directives for build management.
- Browser - Sync live browser reload files including react components.
- Webpack - Bundle modules and dependencies

## Install / Download

Download the latest [https://github.com/foluke-ui-kit/start-react/releases](release) or fork the repo [https://github.com/foluke-ui-kit/start-react](Start React).


**Required**
- NodeJS - [Download/Install](https://nodejs.org/)
- Bower [more info](http://bower.io/)  - install `npm install -g bower`
- Browser sync [more info](http://www.browsersync.io/) - install `npm install -g browser-sync`

**Quick Start:**
Switch over the you install directory
- Install dependencies `npm install`
- Test run `npm run dev`

Launches:
- BrowserSync in your default browser and watches for changes to your files (jsx, html, css, etc) and updates the browser on the fly
- Webpack in development development mode the watches and compiles you jsx/js files

Open the sample component `src/libs/samples.js` make the some changes and to the component and watch the changes live reload in your browser, you can also edit the public/css/_.css and public/_.html

```jsx
/**
 * Basic sample component displays a title and lorem paragraph
 */
export default class Component extends React.Component {

  render() {
    return (
      <aside className="hello-component">
        <h3>A Sample Component</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias. Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non!</p>
          <p>
          <Button children="Component Button"/>
          </p>
          <Container>
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quibusdam excepturi saepe et hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, accusantium!
            </p>
          </Container>
      </aside>
    );
  }
}
```

**NPM Script Commands**
- `npm run build` : Package for production  removes all the development files and runs webpack -p(roduction)
- `npm run dev`: Development watches for changes build with mapping - launches browsersync and webpack in watch mode.
- `npm run liveview` : Liveview fires up BrowserSync and launches you default browser
- `npm run webpack` : Use webpack to build and watch in production mode

Cleans the app directory and complies and bundles your components

## Creating components -- Get to work.
 **Creating components**
- Create your component -- 'src/libs/mycomponent.js'
- Add it to webpack config check out some tutorials on webpack -
  - [Webpack Config](http://webpack.github.io/docs/tutorials/getting-started/#config-file)
  - [Pete Hunt React Webpack Guide ](https://github.com/petehunt/webpack-howto)

- Modify index.html or create a mycomponent.html

## Config Options
**Webpack**

Go to `webpack.config.js` and modify you options for example
- Change `main: './public/mycomponent.jsx',` to the path to your new component

**NPM: Package**

Open up `package.json` and change the name
- Then name of the package
- Reset the version remember to keep your version naming semantic
- Change the  description, repository/url, bugs/url, homepage values also
- Modify anything else you feel is necessary

**Modify Component HTML Page**

You can find the component HTML file inside /public directory
- Open and modify the index.html as needed
- See the **BrowserSync Config** for information on linking to external packages / assets using the **routes option***

  ```js
  routes: {
      "/packages": "packages", //link bower packages (bootstrap)
      "/app": "app" //react components
  }
  ```

- Open public/components.jsx read the comments and modify accordingly

**BrowserSync Config**

BrowserSync (bs-config.js) handles all livereload options go to [BrowserSync Docs](http://www.browsersync.io/docs/options/)

To contribute fork the repo -- [https://github.com/foluke-ui-kit/start-react](https://github.com/foluke-ui-kit/start-react) send a pull request.

## Contribute
## History
[View the release notes](https://github.com/foluke-ui-kit/start-react/releases)

## TODO
- Customizing configurations
- ...

## License
The MIT License (MIT)

Copyright (c) 2014 Waybury

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
