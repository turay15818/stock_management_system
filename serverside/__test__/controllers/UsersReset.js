const express = require ('express');
const router =  express.Router();
const connection = require ('../config/connection');
const nodemailer = require ('nodemailer');
const bcrypt = require ('bcrypt');
const randtoken = require ('rand-token');

//send email
function sendEmail(email, token) {
    var email = email;
    var token = token;
    
    var transport = nodemailer.createTransport({
        // host: "smtp.mailtrap.io",
        // port: 2525,
        // auth: {
        //   user: "0f0aa4dd64bbeb",
        //   pass: "4f57e8f2f97612"
        // }

        service: 'gmail',
        auth: {
            user: 'infatorkeh@gmail.com',
            pass: 'gnpkwnylosymtlmc'
        }
    });

    // });
    console.log(sendEmail)
    var mailOptions = {
        from: 'info@turaymusa.com',
        to: email,
        subject: 'Reset Password Link',
        text:
            'You are receiving this because you (or someone else) have requested for the reset of this account password\n\n'
            + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
            + `http://localhost:3000/resetPassword/${token}\n\n`
            + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',

        // text: `This Link Valid For 2 MINUTES http://localhost:3000/resetPassword/${token}`
    };
    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(1)
        } else {
            console.log(0)
        }
    });
}

router.post('/resetPasswordEmail', function (req, res, next) {
    
    var email = req.body.email;
    // console.log(sendEmail(email, fullUrl));
    connection.query('SELECT * FROM users WHERE email ="' + email + '"', function (err, result) {
        if (err) throw err;
        var type = ''
        var msg = ''
        console.log(result[0]);
        if (result[0].email.length > 0) {
            const token = randtoken.generate(150);
            const sent = sendEmail(email, token);
            if (sent != '0') {
                const data = {
                    token: token,
                    expiresIn: "3m"
                }
                connection.query('UPDATE users SET ? WHERE email ="' + email + '"', data, function (err, result) {
                    // if (err) throw err
                })
                type = 'success';
                msg = 'The reset password link has been sent to your email address';
            } else {
                type = 'error';
                msg = 'Something goes to wrong. Please try again';
            }
        } else {
            console.log('2');
            type = 'error';
            msg = 'The Email is not registered with us';
        }
        req.flash(type, msg);
        res.redirect('http://localhost:3000/');
    });
})
/* reset page */


router.get('/reset-password', function (req, res, next) {
    // res.render('reset-password', {
    //     title: 'Reset Password Page',
    //     token: req.query.token
    // });
});
/* update password to database */

router.post('/update-password', function (req, res, next) {
    var token = req.body.token;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE token ="' + token + '"', function (err, result) {
        if (err) throw err;
        var type
        var msg
        if (result.length > 0) {
            var saltRounds = 10;
            // var hash = bcrypt.hash(password, saltRounds);
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    var data = {
                        password: hash
                    }
                    connection.query('UPDATE users SET ? WHERE password ="' + result[0].password + '"', data, function (err, result) {
                        if (err) throw err
                    });
                });
            });
            type = 'success';
            msg = 'Your password has been updated successfully';
        } else {
            console.log('2');
            type = 'success';
            msg = 'Invalid link; please try again';
        }
        req.flash(type, msg);
        res.redirect('htp://localhost:3000/');
    });
})



module.exports = router;