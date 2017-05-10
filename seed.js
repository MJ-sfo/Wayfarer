console.log ('This seed file is a-go!')
var db = require("./models");

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var commentsList = [];
  commentsList.push({
                name: 'Kevin',
                text: 'I love this city',
                date: '1494380293364',
                uid: '1',
                title: 'My Post'
                });
  commentsList.push({
                name: 'Sejin',
                text: 'I hate this city',
                date: '1494380293364',
                uid: '2',
                title: 'Best title ever'
                });
  commentsList.push({
                name: 'Jane',
                text: 'I love this city',
                date: '1494380293364',
                uid: '3',
                title: 'Counterstrike is the best'
                });



// remove Brands first
db.Comment.remove({}, function(err, comments) {
  console.log('removed all comments');
db.Comment.create(commentsList, function(err, comments){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all comments');
    console.log("created", comments.length, "comments");
     });
});
