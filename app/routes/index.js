/* index page */

exports.index = function(req, res){
  res.render('index', { title: 'Know Your Food' })
};