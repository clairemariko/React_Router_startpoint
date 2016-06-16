var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.jsx');

//req components
var About = require('./components/About.jsx');
var Home = require('./components/Home.jsx');
var Pricing = require('./components/Pricing.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

//index route is your default you are saying where it starts

window.onload = function(){
  ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="pricing" component={Pricing}/>
    </Route>
   </Router>,
    document.getElementById('app')
  );
}
