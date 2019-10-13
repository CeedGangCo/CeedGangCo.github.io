var express = require('express');
var router = express.Router();

/* GET file upload page. */
router.get('/', function(req, res, next) {
  var options = {
  	root: __dirname + '/../views/'
  }
  res.sendFile('uploadTest.html', options);
});

router.get('/getFile', function(req, res, next) {
	console.log(req.query.fileName);
	var options = {
  		root: __dirname + '/../uploads/'
  	}
  	res.sendFile(req.query.fileName, options);
})

module.exports = router;