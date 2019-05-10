var express = require('express');
var router = express.Router();
var user = require('../models/mst_employee')

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login.ejs',{error : 'ถูก'});
});

// login 
router.route('/').post((req, res) => {  
    if(req.body.user && req.body.password) {
      user.findOne({user: req.body.user}).then(emps => {
        if (emps.password === req.body.password) {
          // res.send('ถูก')
          res.render('welcome.ejs', emps);
        } else {
          // res.send('ไม่ถูก')
          res.render('login', { error: 'ไม่ถูก' })
        }
    }).catch(err => {
      // res.send('ไม่ถูก')
      res.render('login', { error: 'ไม่ถูก' })
    })
    }
})


module.exports = router;
