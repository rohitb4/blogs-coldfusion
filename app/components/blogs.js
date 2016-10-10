if (typeof module !== 'undefined' && module.exports) {
	var React = require('react');
	var Link = require('react-router').Link;
}
else {
	React = window.React;
}

var Blogs = React.createClass({
	getInitialState: function() {
		return {
			blogData: [{
				name: "What is new in ColdFusion?",
				desc: "Detailed Post"
			}, {
				name: "What is new in ColdFusion?",
				desc: "Detailed Post"
			}]
		}
	},
	render: function() {
		return <section>
			<div className="banner"></div>
			<h1>The Technology Blog</h1>
	
			<ul className="blog-list">
				{
					this.state.blogData.map(function(blog) {
						return <li className="blog-item">
							<div className="title"><Link to="/blog" >{blog.name}</Link></div>
							<div className="">{blog.desc}</div>
						</li>
					})
				}
			</ul>
		</section>;
	}
});

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Blogs;
}
else {
	window.Blogs = Blogs;
}


