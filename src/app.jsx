var div = React.DOM.div;
var button = React.DOM.button;

var Hello = React.createClass({
    getInitialState: function() {
        return { isOpen: true };
    },

    toggle: function() {
        this.setState({isOpen: !this.state.isOpen});
    },

    render: function() {
        var content = this.state.isOpen ? this.props.children : null;
        return div({},
            button({ref: 'button', onClick: this.toggle}, this.props.buttonText),
            div({ref: 'content'}, content)
        );
    }
});

export default Hello;
