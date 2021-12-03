var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Resgister");
   let query={Username : /^r/};

  dbo.collection("resgister").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
//   var myobj = [     
//     { Username: "Mahesh Sharma",Email: "Mahesh Sharma@gmail.com", Password: "Ghabad"},  
//     { Username: "Tom Moody",Emaile: "Tom Moody3@gmail.com", Password: "CA"},  
//     { Username: "Zahira Wasim",Email: "Zahira Wasim19@gmail.com", Password: "Imabad"},  
//     { Username: "Juck Ross",Email: "Juck Ross45@gmail.com", Password: "dfqyed"}  
//     ];  
//   dbo.collection("resgister").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res.insertedCount+" record inserted");
//     db.close();
//   });
});

