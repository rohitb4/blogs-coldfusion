if (typeof module !== 'undefined' && module.exports) {
	var React = require('react');
	var Link = require('react-router').Link;
}
else {
	React = window.React;
}

var Blog = React.createClass({
	getInitialState: function() {
		return {
			title: 'Excited for ColdFusion Summit',
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}
	},
	render: function() {
		return <section>
			<div className="banner"></div>
			<Link to="/blogs"> Back to Blogs</Link>
			<div className="title"><h1>{this.state.title}</h1></div>
			<div>{this.state.desc}</div>
	
			
		</section>;
	}
});

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Blog;
}
else {
	window.Blog = Blog;
}


