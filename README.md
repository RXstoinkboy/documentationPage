# documentationPage
This is a simple example documentation page prepared for FCC RWD certification. I made it with CSS grid for layout. There is some data already prepared in HTML, but you can also fetch additional fake data from jsonplaceholder.

## Usage
These are instructions needed for you in order to download this repo and run it on your local machine.

### Prerequistes
In order to run this repository and modify it you need [**NodeJS**][1] and **npm package manager** installed on you computer. 

### Installing

1. Clone the repo to your local environment:
    ```
    git clone https://github.com/RXstoinkboy/documentationPage.git
    ```

1. Install all dependencies used for building this project:
    ```
    npm install
    ```

1. npm scripts - used most frequently
      + to run your local server and watch app updating live
        ```
        npm start
        ```
      + watch for changes in you image files and your code
        ```
        npm run watch
        ```

1. Go ahead and add files to this repo and build you app upon this set of dependencies.

1. Feel free to modify the code and see he changes updated live in your browser. 

## Technology
1. npm scripts - for automating work
1. [Autoprefixer][2] - to automatically add prfixes to CSS code
1. [Babel][3] - for ES6+ backward compatibility
1. [Browser-sync][4] - to run local server and see live updates during work
1. [Chokidar][5] - light-weight package for monitoring file changes
1. [ESLint][6] - for JS files styling
1. [Imagemin][7] - to compress images
1. [SASS][8] - used with node-sass plugin to transpile into CSS code
1. [npm-run-all][9] - for launching parallel scripts. I use to make it work under Windows. Should be comatible on Unix devices as well.
1. [trash][10] - for safe deleting files // safe alternative to 'rm -rf' under Unix
1. [Uglfy-ES * Uglify-JS][11] - to minify JS files
1. [webpack][12] - to boundle JS files and use Babel
1. [Lodash][13] - great and lightweight library with many useful features

## License

This project is licensed under the MIT License - details in [LICENSE.md][10] file.

[1]: https://nodejs.org/en/
[2]: https://autoprefixer.github.io/
[3]: https://babeljs.io/
[4]: https://www.browsersync.io/
[5]: https://www.npmjs.com/package/chokidar
[6]: https://eslint.org/
[7]: https://github.com/imagemin/imagemin
[8]: https://sass-lang.com/
[9]: https://www.npmjs.com/package/npm-run-all
[10]: https://www.npmjs.com/package/trash
[11]: https://www.npmjs.com/package/uglify-es
[12]: https://webpack.js.org/
[13]: https://lodash.com/