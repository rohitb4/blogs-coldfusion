var express = require('express');
var ejs = require('ejs');
var app = express();
var path = require('path');
require("babel-register")({
    presets: ['es2015', 'react']
});



// ADD a UI route to handle blogs request
var publicPath = path.resolve(__dirname, 'dist/webpack/');
app.use('/', express.static(publicPath));


//import react modules
var React = require('react');
var ReactDOMServer = require('react-dom/server');

app.get('/*', function (req, res) {
  // Initialize Blog component
  var Blogs = React.createFactory(require('./app/components/blogs.js'));

  // Render the Blog Component using renderToString method of REACT SERVER
  var renderedHTML = ReactDOMServer.renderToString(Blogs({}));

  // send the html file with blog HTML
  ejs.renderFile(path.resolve(__dirname, 'app/index.ejs'), {
   	bloghtml: '<div>' + renderedHTML + '</div>'
   }, null, function(err, html) {
  	res.send(html);
  });
  
});



// start the node web server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
