# start-react


A simple, somewhat opiniated -- no fuss, no bells, no whistles boilerplate for creating react Components. The goal is simply to try and stay true the idea that **React is the V in MVC**, Flux, Routing, Isomorphic, etc are cool but it's not what **start react** was built to do. It is simply meant to be used to build, test and package views or "Composable Components" that can then be reused in any application.

__Features:__

* NPM - Package management, scripts directives for build management.

* Browser - Sync live browser reload files including react components.  

* Webpack - Bundle modules and dependencies

## Quick Start

__Clone this repository:__

`git clone https://github.com/foluke-ui-kit/start-react.git`

__Install the dependencies:__

`npm install`

Installs npm and bower dependencies

__Launch development:__

`npm run dev`

Launches
BrowserSync in your default browser and watches for changes to your files
Webpack in development development mode the watches and compiles you jsx files

Open the sample component `src/libs/samples.jsx` make the some changes and to the component and watch the changes live reload, you can also edit the public/css/*.css and public/*.html


```jsx
var Component = React.createClass({

    render: function () {
        return (
            <div>
                <h3>Sample Component</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est fugit, maxime molestias quia quibusdam quidem recusandae reiciendis saepe similique, sit tempore tenetur vel? Accusantium culpa est fuga quae vel.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quod, velit? Consectetur corporis eos expedita fuga odio sunt vitae voluptates.</p>
                <p>Aliquid culpa dolor doloribus dolorum, eaque fuga illo inventore magni nemo non nulla obcaecati, quae similique sit tempore veritatis voluptas!</p>
                <p>
                <button className="btn btn-default">
                Sample Button
                </button>
                </p>
            </div>
        );
    }

});
```

__Build__

`npm run builds`

Cleans the app directory and complies production ready scripts`


## Creating components -- Get to work.

 __Creating components__

 - Create your component -- 'src/libs/mycomponent.js'
 - Add it to webpack config
 - Modify index.html or create a mycomponent.html

##Config Options

__Webpack__

Go to `webpack.config.js` and modify you options for example
- Change `main: './public/mycomponent.jsx',` to the path to your new component

__NPM: Package__

Open up `package.json` and change the name

  * Then name of the package
  * Reset the version remember to keep your version naming semantic
  * Change the  description, repository/url, bugs/url, homepage values also
  * Modify anything else you feel is necessary


__Modify Components__

Your can simple modify and reuse  `public\components.jsx`
- change the following line(s)  to reflect you new component values

```jsx
var Sample = require('../src/libs/samples.jsx');
React.render(<Sample />, document.getElementById('component'));

```


### History

  __0.0.4__

  - Add build run script to NPM package.json

  __0.0.2__

  - Added browser sync
  - Added run scripts to package.json
  - Add Readme

  __0.0.1__

- Public release



### TODO

- Customizing configurations
- ...

### License

The MIT License (MIT)

Copyright (c) 2014 Waybury

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
