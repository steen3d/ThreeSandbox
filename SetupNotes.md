# App setup notes

Set up Node for the project - `npm init` to create package.json

Install librarys with npm - `npm install gsap`, `npm install three`, `npm install webpack`

Webpack takes the dependancies that are imported in dev/app.js and puts them in dist/app.js
The input and output files are specified in webpack.config.

TODO: 

Fix MIME type errors that are preventing script load

Make deploy change html script link from using node_modules to compliled js