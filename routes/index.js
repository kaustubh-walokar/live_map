
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log("JS");
  res.sendFile('livemap.html');
};