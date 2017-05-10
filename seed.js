// console.log ('This seed file is a-go!')
// var db = require("./models");
//
// // This file allows us to seed our application with data
// // simply run: `node seed.js` from the root of this project folder.
//
//
// var brandList = [];
//   brandList.push({
//                 name: 'Nike',
//                 establishDate: 'January 25, 1964',
//                 location: 'Beaverton, Oregon',
//                 image: 'http://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/plcio4b3hxvsjo8cdy9t/50-nike-facts-only-brand-to-lose-and-regain-its-position'
//                 });
//   brandList.push({
//                 name: 'Adidas',
//                 establishDate: 'August 18, 1949',
//                 location: 'Herzogenaurach, Germany',
//                 image: 'http://hoitalent.com/wp-content/uploads/2016/09/adidas.png'
//                 });
//   brandList.push({
//                 name: 'Under-Armour',
//                 establishDate: 'December 7, 1996',
//                 location: 'Washington D.C.',
//                 image: 'http://www.logospike.com/wp-content/uploads/2015/05/Under_Armour_Logo_01.png'
//                 });
//
//
//
// // remove Brands first
// db.Brand.remove({}, function(err, brands) {
//   console.log('removed all brands');
//   db.Brand.create(brandList, function(err, brands){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     db.Shoe.remove({}, function(err, shoes){
//   console.log('removed all shoes');
//   db.Shoe.create(shoeList, function(err, shoes){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all shoes');
//     console.log("created", shoes.length, "shoes");
//     process.exit();
//   });
// });
//     console.log('recreated all brands');
//     console.log("created", brands.length, "brands");
//      });
//
// });
