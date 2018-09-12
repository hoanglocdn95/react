// var HelloWorld = React.createClass({
// 	render: function () {
// 		return React.createElement('h1', null, "Hello from the other side by React");
// 	}
// });
// React.render(
// 	React.createElement(HelloWorld, null),
// 	 document.getElementById('root')
// );

var HelloWorld = React.createClass({
	render: function(){
		return <h1>Hello World React</h1>;
	}
});
var Greeting = React.createClass({
	render: function(){
		var today= new Date();
		return <h2>Have a good {
		today.getHours() < 18 && today.getHours() > 5 ? 'day': 'night'
		}, it's {today.toLocaleTimeString()}</h2>
	}
});
var HelloMessgae = React.createClass({
	render: function(){
		return (
		<div> 
			<HelloWorld />
			<h2>Hello, this is a message</h2>
			<Greeting />
		</div>
		);
	}
});
React.render(
	<HelloMessgae />, document.getElementById('root')
);