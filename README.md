# start-react


A simple no fuss, no bells, no whistles -- boilerplate for creating react Components, it tries to stay true the idea that React is the V in MVC. Use it to build, test and package "Composable Components" that can be reused in your applications.


__Features:__

*NPM - Package management, scripts directives for build management. 

*Browser - Sync live browser reload files including react components.  

*Webpack - Bundle modules and dependencies

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



## Creating components
 
 TODO###
 
 
