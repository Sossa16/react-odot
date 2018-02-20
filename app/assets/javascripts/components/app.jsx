var List = createReactClass({
	render: function(props){
		return(
			<div>
				<ul>
					<li>{props.name}</li>
				</ul>
			</div>
		);
	}
});



var App = createReactClass({
	/*propTypes:{
		initialLists: React.PropTypes.arrayOf(React.PropTypes.shape({name: React.PropTypes.string.isRequired,})).isRequired
	},

	getInitialState: function() {
		return{ 
			lists: this.props.initialLists
		};
{name: "Almace olimpica"},
	{name: "Almacen exito"},
	{name: "Almacen carrulla"}

	},*/
	
	render: function(){
		return(
			<div>
				<h1>ODOT</h1>
				<List name="Santiago" />		
			</div>		
		);
	}
});

