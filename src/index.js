import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route} from 'react-router'
import Home from './Home'
import Cities from './Cities'
import City from './City'
import Layout from './Layout'
import Profile from './Profile'
import Comments from './Comment'
import $ from 'jquery'
import './index.css'


ReactDOM.render(
  <Layout>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/cities' component={Cities} />
      <Route path='/cities/:id' component={City} />
      <Route path='/profile' component={Profile} />
      <Route path='/cities/comment/:id' component={Comments} />
    </Router>
  </Layout>,
  document.getElementById('root')
);




// react router route params
//props.params
// in route path='/cities/:id' component={city}
// in city ... {props.params.name}

// // truncating review
// $(document).ready(function() {
//   (function() {
//     var showChar = 100;
//     var ellipsestext = "...";
//
//     $(".truncate").each(function() {
//       var content = $(this).input();
//       if (content.length > showChar) {
//         var c = content.substr(0, showChar);
//         var h = content;
//         var html =
//           '<div class="truncate-text" style="display:block">' +
//           c +
//           '<span class="moreellipses">' +
//           ellipsestext +
//           '&nbsp;&nbsp;<a href="" class="moreless more">more</a></span></span></div><div class="truncate-text" style="display:none">' +
//           h +
//           '<a href="" class="moreless less">Less</a></span></div>';
//
//         $(this).html(html);
//       }
//     });
//
//     $(".moreless").click(function() {
//       var thisEl = $(this);
//       if (thisEl.hasClass("less")) {
//         thisEl.closest(".truncate-text").prev(".truncate-text").toggle();
//         thisEl.closest(".truncate-text").slideToggle();
//       } else {
//         thisEl.closest(".truncate-text").toggle();
//         thisEl.closest(".truncate-text").next(".truncate-text").fadeToggle();
//       }
//       return false;
//     });
//     /* end iffe */
//   })();
//
//   /* end ready */
// });

