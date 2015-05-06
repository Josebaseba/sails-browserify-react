sails-browserify-react
========================

Sails v0.11 with an example of how it works grunt in sails adding browserify, with React support

# Usage

Clone this repo and download with npm the packages:

```

  git clone https://github.com/Josebaseba/sails-browserify-react

  cd sails-browserify-react

  sudo npm install

  sails lift

```

Check the assets/js/app.js file to see a small example.

To modify the Browserify main file please modify tasks/pipeline.js file (line 15) for the new main file path.

```
  var browserifyMainFile = '.tmp/public/js/app.js';

```

## IMPORTANT

The sails.io.js file has a small modification, just commenting a few lines of code that uses require('request'). Because Browserify understands that it has to require that package, but we don't need that in the browser.

You can see that change in the line 464 (until the 474 line) [HERE](https://github.com/balderdashy/sails.io.js/blob/master/sails.io.js#L464)

### More details in [this repository](https://github.com/Josebaseba/sails-browserify)
