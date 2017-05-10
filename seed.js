console.log ('This seed file is a-go!')
var db = require("./models");

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var commentsList = [];
  commentsList.push({
                name: 'Kevin T.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: '1494380293364',
                uid: '1',
                title: 'LA is better'
                });
  commentsList.push({
                name: 'Sejin P.',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                date: '1494380223364',
                uid: '2',
                title: 'Bimbimbap is soooo goooood here, jk'
                });
  commentsList.push({
                name: 'Jane W.',
                text: 'I love this city',
                date: '1494380293369',
                uid: '3',
                title: 'Counterstrike is the best'
                });
  commentsList.push({
                name: 'Michael L.',
                text: 'Learning to code in the city by the bay',
                date: '1494380293369',
                uid: '3',
                title: 'SF is great'
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
