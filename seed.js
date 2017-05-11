console.log ('This seed file is a-go!')
var db = require("./models");

var citiesList = [];
citiesList.push({
  name: 'San Francisco',
  country: 'United States',
  description: 'San Francisco, is the cultural, commercial, and financial \
                center of Northern California. It is the birthplace of the \
                United Nations.',
  image: 'http://genheration.com/wp-content/uploads/2016/04/San-Francisco.jpg',
  comments: []
});

citiesList.push({
  name: 'London',
  country: 'United Kingdom',
  description: 'London is the capital and most populous city of England \
                and the United Kingdom. London is a leading global city\
                in the arts, commerce, education, entertainment, fashion, \
                finance, healthcare, media, professional services, research and \
                development, tourism, and transportation.',
  image: 'https://media.timeout.com/images/100644443/image.jpg',
  comments: []
});

citiesList.push({
  name: 'Gibraltar',
  country: 'United Kingdom',
  description: 'Gibraltar is a British Overseas Territory located on the southern end of the Iberian Peninsula.',
  image: 'http://www.visitgibraltar.gi/images/homepage_slider/df1aw_slide2.jpeg',
  comments: []
});




var commentsList = [];
commentsList.push({
  name: 'Kevin',
  text: 'I love this city',
  date: '1434380293364',
  uid: '1',
  title: 'My Post Title',
  city: 'San Francisco'
  });
commentsList.push({
  name: 'Sejin',
  text: 'I hate this city',
  date: '1494380223364',
  uid: '2',
  title: 'Best title ever',
  city: 'San Francisco'
  });
commentsList.push({
  name: 'Jane',
  text: 'I love this city',
  date: '1494380293369',
  uid: '3',
  title: 'Counterstrike is the best',
  city: 'San Francisco'
  });
commentsList.push({
  name: 'Jane',
  text: 'I love London!',
  date: '1494380293369',
  uid: '3',
  title: 'Fish & Chips',
  city: 'London'
  });
commentsList.push({
  name: 'Sejin',
  text: 'Who would want to go to London??',
  date: '1494380293369',
  uid: '3',
  title: 'Korea numba 1',
  city: 'London'
  });
commentsList.push({
  name: 'Michael',
  text: 'I want to go to Gibraltar!',
  date: '1494380293369',
  uid: '3',
  title: '#bucketlist',
  city: 'Gibraltar'
  });


db.Comment.remove({}, function(err, comments) {
  console.log('removed all comments');
  db.Comment.create(commentsList, function(err, comments){
    console.log('created all comments');
    db.City.remove({}, function(err, cities) {
      citiesList.forEach(function (cityData) {
        var city = new db.City({
          name: cityData.name,
          country: cityData.country,
          description: cityData.description,
          image: cityData.image
        });
        db.Comment.find({city: cityData.name})
          .populate('comments')
          .exec (function(err, foundComments) {
            if (err) {
              console.log('err with db.comment.find', err)
            } else {
              city.comments = foundComments;
              city.save(function(err, savedCity) {
                console.log('city with ref comments successfully saved')
              })
            }
          })
        })
      })
    })
  })
