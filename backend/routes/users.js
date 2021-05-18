const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error' + err));

})
router.route('/add').post((req,res)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const date_birth = req.body.date_birth;
    const company_name = req.body.company_name;

    const newUser = new User({first_name,last_name,email,password,date_birth,company_name});

    newUser.save()
    .then(()=>res.json('user added!'))
    .catch(err => res.status(400).json('Error'+ err))
})
module.exports = router