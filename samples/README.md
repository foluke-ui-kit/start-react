#NAME
No project should be without a readme, use this one as a boilerplate for creating your own README.md

__Features:__

* ...
* ...

__Required__

NodeJS - [Download/Install](https://nodejs.org/)
Bower [more info](http://bower.io/) - install npm install -g bower
Browser sync more info - install npm install -g browser-sync

## Quick Start

__In React Component__

* Install the plugin via NPM - `npm i @shawnsandy/react-table-sets`
* Create your *.jsx files

```jsx

	// import the component
	import React from 'react'
	// import $ from 'jquery'
	import Sample, { Button }  from'../src/libs/samples.jsx'
	// render the main component
	React.render(<Sample />, document.getElementById('component'));
	// render the Button component using the
	React.render(<Button />, document.getElementById('button'));
	// render the Button component with props
	React.render(<Button name="My Sample Button" />, document.getElementById('sbutton'));

```

* Compile and add (*.js) to your html page.

```
	<!DOCTYPE html>
	<html>
	<head lang="en">
	    <meta charset="UTF-8">
	    <title>Sample Component</title>
	    <link rel="stylesheet" href="/packages/bootstrap/dist/css/bootstrap.min.css"/>
	    <link rel="stylesheet" href="css/style.css"/>
	</head>
	<body>
	<div class="container">
	  <div class="row">
	      <h1>React Components!!!</h1>
	      <hr/>
	      <div id="component"></div>
	      <hr/>
	      <p>
	          <span id="button"></span>
	           <span id="sbutton"></span>
	      </p>
	  </div>
	</div>
	<!--import libs bundle/dependencies and import main.js component-->
	<script src="/component/html-component.js"></script>
	<script src="/component/main.js"></script>
	</body>
	</html>
```

__Out of the box (bower)__

Use the componet out of the box 

* bower i --save component
* directly in you html add the component code 

```html 

	<component id="sample" class="" data-name="Some attribute / props"></component>
	<script src="bower_components/package_name/app/index.js"></script>
	<script src="bower_components/package_name/app/libs.js"></script>

```


__Start-React__

To find out how to use the Start-React boilerplate [head over to the Start-React.md  readme](/STARTHERE.md)

### Contribute

Fork the REPO and send a push request, you know the drill...

### History

[View latest releases and notes](https://github.com/foluke-ui-kit/start-react/releases)

### TODO

- Customizing configurations
- ...

### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
