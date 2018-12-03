const utils = require('../lib/utils')
const insecurity = require('../lib/insecurity')
const models = require('../models')
const challenges = require('../data/datacache').challenges
const users = require('../data/datacache').users
const config = require('config')
//const eval = require("ParseProvider")

module.exports = function evaluate () {

  let sanitization = function (txt) {
     function escapeRegExp(string){
      return string.replace(/[.*+?^${}|[\]\\]/g, '\\$&');
    }
    var out = txt;
    if(txt.toLowerCase().includes("<script>") && txt.toLowerCase().includes("</script>")) {
      out =  txt.toLowerCase().replace("<script>", "").replace("</script>", "");
    }

    return escapeRegExp(out)
  }

  return (req, res, next) => {

    let tests = ["<script>(0)</script>", "<SCRIPT>(1)</SCRIPT>"]

    var strfunc = req.body.input;
    eval (strfunc)

    let results = [];
    for (var i in tests) {
      result = validateInput(tests[i]);
      //console.log(tests[i] + ", -> " + result)
      if( !result.toLowerCase().includes("<script>") && !result.toLowerCase().includes("<\script>")) {
        if (result.toLowerCase() == ("("+i+")")) {
          results.push(true)
        } else {
          results.push(false)
        }
      } else {
        results.push(false)
      }
    }

    if (utils.notSolved(challenges.validatebugfix)) {
      let check = true;

      for (var j = 0; j < results.length; j++) {
        if(results[j] == false) {
          check = false
          break;
        }
      }
      if (check) {
        utils.solve(challenges.validatebugfix)
      }

    }

    res.json({ data: {results} })

  }

}
