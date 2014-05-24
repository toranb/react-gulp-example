var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});
 
React.renderComponent(<Hello name="World" />, document.body);
