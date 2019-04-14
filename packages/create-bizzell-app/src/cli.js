#!/usr/bin/env node

/*
**  Command Line Tool: Using Yargs
**  ------------------------------
**  This file is used to take user input in 
**  editing, building, or developing a project.
**
**
**  How to use:
**  -------------------------------
**  1) Open file location you want to make the project
**  2) USE: create-bizzell-app --create // This will create the app
**  3) USE: create-bizzell-app --edit //This will edit the app
**  4) USE: create-bizzell-app --build //This will build the app
**  5) USE: create-bizzell-app --dev //This will develop the app
**  6) USE: create-bizzell-app --build  --path [file location] //This will build the app and make a location 
**  Note: If you do not specify path, it will use its current directory location
**
**
*/

//Import these files for creating the project
const { copySync } = require('fs-extra')
const { join } = require('path')
const webpack = require('webpack')
const Server = require('webpack-dev-server')
const fs = require('fs')

//Gets the arguments and checks to see which one to use
const argv = require('yargs')
    .usage('Usage: $0 option message \n e.g $0 -s message')


    //Create the project
    .alias('c', 'create')
    .nargs('c', 0)
    .describe('c', 'Create the project')

    //Edit the project
    .alias('e', 'edit')
    .nargs('e', 0)
    .describe('e', 'Edit the project')
    
    //Build the project
    .alias('b', 'build')
    .nargs('b', 0)
    .describe('b', 'Build the project')

    //Develop the project
    .alias('d', 'dev')
    .nargs('d', 0)
    .describe('d', 'Develop the project')

    //Path chosen
    .alias('p', 'path')
    .nargs('p', 1)
    .describe('p', 'Path for the project')

    //If need help, use this
    .help('h')
    .alias('h', 'help')
    .epilog('Copyright Abdul 2017')
    .argv


//Variables to send
mode = '';
path = '';

//Check which one is selected. 
if(argv.c != null)
{
    mode = 'create';
}
else if(argv.e != null)
{
    mode = 'edit';
}
else if(argv.b != null)
{
    mode = 'build';
}
else if(argv.d != null)
{
    mode = 'dev';
}

//If the path is not specified, then it will be set the the folders root folder
if(argv.p == null)
{
    path = '.'
}else{
    path = argv.p;
}



//Just print to see that it tested correctly.
//Pass both mode and path
//console.log(mode);
//console.log(path);



switch (mode) {
  case 'create': {
    // copy the template to the path
    copySync(join(__dirname, './template'), path)
    break
  }
  case 'edit': {
    // use the webpack config on edit mode
    new Server(webpack(require('./webpack.config')(false, path, true)), {
      hot: true,
      // progress: true,
      // color: true,
      open: true,
    }).listen(3000, console.error)
    break
  }
  case 'dev': {
    // use the webpack config on dev mode
    new Server(webpack(require('./webpack.config')(false, path, false)), {
      hot: true,
      // progress: true,
      // color: true,
      open: true,
    }).listen(3000, console.error)
    break
  }
  case 'build': {
    // make a production build
    webpack(require('./webpack.config')(true, path, false), (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err)
        console.error(stats.errors)
        console.error(stats.toJson().errors)
      }
    })
    break
  }
  default: {
    throw new Error('create-bizzell-app did not recognize commands.')
  }
}
