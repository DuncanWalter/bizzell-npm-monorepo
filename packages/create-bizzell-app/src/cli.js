/*
 **  Command Line Tool: Using Yargs
 **  ------------------------------
 **  This file is used to take user input in
 **  editing, building, or developing a project.
 **
 */

//Gets the arguments and checks to see which one to use
const argv = require('yargs')
  .usage('Usage: $0 option message \n e.g $0 -s message')

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
  .epilog('Copyright Abdul 2017').argv

//Variables to send
mode = ''
path = ''

//Check which one is selected.
if (argv.e != null) {
  mode = 'edit'
} else if (argv.b != null) {
  mode = 'build'
} else if (argv.d != null) {
  mode = 'develop'
}

//If the path is not specified, then it will be set the the folders root folder
if (argv.p == null) {
  path = '.'
} else {
  path = argv.p
}

//Just print to see that it tested correctly.
//Pass both mode and path

switch (mode) {
  case 'create': {
    // copy the template to the path
    copySync(join(__dirname, '../template'), path)
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
