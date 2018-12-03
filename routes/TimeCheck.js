const utils = require('../lib/utils')
const insecurity = require('../lib/insecurity')
const models = require('../models')
const challenges = require('../data/datacache').challenges
const users = require('../data/datacache').users
const config = require('config')

module.exports = function TimeCheck () {
  return (req, res, next) => {

/*
    console.log("c req: " + (JSON.stringify(req.body)));
    console.log("c: res" + (res));
    console.log("c: next " + (next));

*/


    let password = "apple";
    let userGeuss = req.body.input;


    console.log("body:")
    console.log(req.body)
    console.log("geuss:")
    console.log(req.body.input)

    if (userGeuss == undefined) {
      console.log(userGeuss)
      res.status(401).send('Invalid Geuss.')
    }
    else {


    let lenpass = password.length;
    let lengeuss = userGeuss.length;


    console.log("p: ("+lenpass+"), g: ("+lengeuss+") = dif = " + (lenpass - lengeuss))

    console.time('someFunction');

    let count = 0;
    let result = true;
    for (let i = 0; i < lenpass; i++) {
      if (result == true) {

        let p = password[i];
        let g = userGeuss[i];

        sleep(1000);

        //console.log(p + ", " + g)
        if (p === g) {
          //console.log(p + " == " + g)
          count += 1;
        } else {
          result = false

        }
      }
    }

    //console.log("count : " + count);

    result = (lenpass === count) ? true : false;


    console.timeEnd('someFunction');




    if (utils.notSolved(challenges.timingAttackChallenge) && result === true) {
      console.log("timingAttackChallenge solved")
      utils.solve(challenges.timingAttackChallenge)
    }

    res.json({ data: { result:result} })

    }


    /*
    models.sequelize.query('SELECT * FROM Users WHERE email = \'' + req.body.lol + '\' OR password = \'' + '' + '\'', { model: models.User, plain: true })
    .then((authenticatedUser) => {
      let user = utils.queryResultToJson(authenticatedUser)

      console.log("c: user " + (user));
      console.log("c: user.data " + (user.data));

      console.log("c: user.data.id " + (user.data.id));



      if (user.data && user.data.id) {
        res.json({ user: { t:req.body.lol, e: user.data} })
      } else {
        console.log("Invalid email or password.'")
        res.status(401).send('Invalid email or password.')
      }
    }).catch(error => {
      next(error)
    })

*/

    /*
    if (utils.notSolved(challenges.weakPasswordChallenge) && req.body.email === 'admin@' + config.get('application.domain') && req.body.password === 'admin123') {
      utils.solve(challenges.weakPasswordChallenge)
    }
    if (utils.notSolved(challenges.loginSupportChallenge) && req.body.email === 'support@' + config.get('application.domain') && req.body.password === 'J6aVjTgOpRs$?5l+Zkq2AYnCE@RF§P') {
      utils.solve(challenges.loginSupportChallenge)
    }
    if (utils.notSolved(challenges.loginRapperChallenge) && req.body.email === 'mc.safesearch@' + config.get('application.domain') && req.body.password === 'Mr. N00dles') {
      utils.solve(challenges.loginRapperChallenge)
    }
    if (utils.notSolved(challenges.oauthUserPasswordChallenge) && req.body.email === 'bjoern.kimminich@googlemail.com' && req.body.password === 'YmpvZXJuLmtpbW1pbmljaEBnb29nbGVtYWlsLmNvbQ==') {
      utils.solve(challenges.oauthUserPasswordChallenge)
    }
    models.sequelize.query('SELECT * FROM Users WHERE email = \'' + (req.body.email || '') + '\' AND password = \'' + insecurity.hash(req.body.password || '') + '\'', { model: models.User, plain: true })
      .then((authenticatedUser) => {
        let user = utils.queryResultToJson(authenticatedUser)

        const rememberedEmail = insecurity.userEmailFrom(req)
        if (rememberedEmail && req.body.oauth) {
          models.User.find({ where: { email: rememberedEmail } }).then(rememberedUser => {
            user = utils.queryResultToJson(rememberedUser)
            if (utils.notSolved(challenges.loginCisoChallenge) && user.data.id === users.ciso.id) {
              utils.solve(challenges.loginCisoChallenge)
            }
            afterLogin(user, res, next)
          })
        } else if (user.data && user.data.id) {
          afterLogin(user, res, next)
        } else {
          res.status(401).send('Invalid email or password.')
        }
      }).catch(error => {
        next(error)
      })
     */


  }
}
