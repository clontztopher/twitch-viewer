module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {
    	joinTo: {
    		'libraries.js': /node_modules/,
    		'app.js': /^app\//
    	}
    },
    stylesheets: {joinTo: 'app.css'}
  }
}
