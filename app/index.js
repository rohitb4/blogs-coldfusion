var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;


var Blogs = require('./components/blogs.js');
var Blog = require('./components/blog.js');


var MainComponent = React.createClass({
  
  getInitialState: function () {
    return {
      showLoginModal: false,
      loggedIn: false
    }
  },
  render: function() {
    
     return (<div>
          {this.props.children}
        </div>);
       
  }
});




var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainComponent}>
       <Route path="/blogs" component={Blogs}></Route>
       <Route path="/blog" component={Blog}></Route>
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.querySelector('#app')
);


