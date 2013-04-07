/* index page */

exports.index = function(req, res){
  res.render('index', { title: 'Know Your Food', nbsp: ' ' })
};

/* search page */
exports.search = function(req, res){
  res.render('search', { title: 'Search Food', nbsp: ' ' })
};

/* contribute page */
exports.contribute = function(req, res){
    res.render('contribute', { title: 'Contribute', nbsp: ' ', message: '' })
};

/* about page */
exports.about = function(req, res){
  res.render('about', { title: 'About Us', nbsp: ' ' })
};

/* contact page */
exports.contact = function(req, res){
  res.render('contact', { title: 'Contact Us', nbsp: ' '})
};
