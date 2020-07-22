const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.js');
const crypto = require('crypto');
const keys = require('../config/keys');


//---------------------------------------------------------------------------------------
async function signup(req, res) {
    if (!req.body.email) return res.status(400).json({ status: 400, message: 'email required' });
    if (!req.body.username) return res.status(400).json({ status: 400, message: 'username required' });
    if (!req.body.password) return res.status(400).json({ status: 400, message: 'password required' });
    if (!req.body.confirmPassword) return res.status(400).json({ status: 400, message: 'confirm password required' });
    if (req.body.password != req.body.confirmPassword) return res.status(400).json({ status: 400, message: 'passwords does not match' });

    User.findOne({ email: req.body.email }).then(user => {
        if (user) return res.status(400).json({ status: 400, message: 'user with this email already exists' });

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        // hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
                if (err) throw err;
                newUser.password = hashedPassword;
                newUser
                    .save()
                    .then(user => {
                        const payload = {
                            id: user.id,
                            email: user.email,
                            username: user.username
                        }
                     
                        jwt.sign(
                            payload,
                            keys.tokenSecret,
                            {
                                expiresIn: 3600 // in 1 hour or 3600 seconds
                            },
                            (err, token) => {
                                if (err) throw err;
                                res.json({
                                    registerUserSuccess: true,
                                    token: token
                                })
                            }
                        )

                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        })
    })

}
//---------------------------------------------------------------------------------------
async function login(req, res) {

    if (!req.body.email) return res.status(400).json({ status: 400, message: 'email required' });
    if (!req.body.password) return res.status(400).json({ status: 400, message: 'password required' });

    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
        if (!user) return res.status(404).json({ status: 404, message: 'no user found for given email id' });

        bcrypt
            .compare(password, user.password)
            .then(passwordsMatch => {
                if (!passwordsMatch) return res.status(400).json({ status: 400, message: 'incorrect password' });

                const payload = {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
   
                jwt.sign(
                    payload,
                    keys.tokenSecret,
                    {
                        expiresIn: 3600 // one hour or 3600 seconds
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            registerUserSuccess: true,
                            token: token
                        })
                    }
                )
            })
    })

}
//---------------------------------------------------------------------------------------
module.exports = {
    signup,
    login
}