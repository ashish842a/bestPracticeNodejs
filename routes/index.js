var express = require('express');
var router = express.Router();
var BestPractice = require("./users")
var data = require("./data");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});


router.get("/bestPractice",async function(req,res){
  // console.log(req.body.title);
  // console.log(req.body)
  let savedBestPractice;
  data.forEach(async function(elem){
    console.log(elem.title);
    // console.log("hey");
    let bestPractice = await BestPractice.create({
        title:elem.title, 
        url:elem.url, 
        content:elem.url,
        });
  savedBestPractice = await bestPractice.save();
  })
  res.send("All bestPractice is added");
})
module.exports = router;
