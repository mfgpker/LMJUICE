const utils = require('../lib/utils')
const insecurity = require('../lib/insecurity')
const models = require('../models')
const challenges = require('../data/datacache').challenges
const users = require('../data/datacache').users
const config = require('config')

module.exports = function TimeCheck () {
  return (req, res, next) => {

    let password = "apple";
    let userGeuss = req.body.input;



    if (userGeuss == undefined) {
      console.log(userGeuss)
      res.status(401).send('Invalid Geuss.')
    }
    else {


    let lenpass = password.length;
    let lengeuss = userGeuss.length;


//    console.log("p: ("+lenpass+"), g: ("+lengeuss+") = dif = " + (lenpass - lengeuss))



    var startFrom = new Date().getTime();

    let count = 0;
    let result = true;
    for (let i = 0; i < lenpass; i++) {
      if (true == true) {

        let p = password[i];
        let g = userGeuss[i];



        //console.log(p + ", " + g)
        if (p === g && result == true) {
          //console.log(p + " == " + g)
          count += 1;
        } else {
          result = false
          sleep(1000);
        }
      }
      else {

      }
    }

    result = (lenpass === count) ? true : false;

    var endtime = new Date().getTime() - startFrom;

    if (utils.notSolved(challenges.timingAttackChallenge) && result === true) {
      console.log("timingAttackChallenge solved")
      utils.solve(challenges.timingAttackChallenge)
    }

    res.json({ data: { result:result, time:endtime} })

    }




  }
}
