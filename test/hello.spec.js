import Hello from 'example/app';

describe("hello", function() {
    var hello, el;
 
    beforeEach(function() {
        hello = render(Hello({buttonText: 'speak'}, 'hello world!'));
        el = hello.getDOMNode();
    });
     
    afterEach(function() {
        teardownComponent(hello);
    });
     
    it('renders correctly', function(){
        assert.equal(hello.refs.button.getDOMNode().textContent, 'speak');
        assert.equal(hello.refs.content.getDOMNode().textContent, 'hello world!');
    });

    it('toggles the content when the button is clicked', function() {
        assert.ok(hello.getDOMNode().textContent.match('hello world!'));
        React.addons.TestUtils.Simulate.click(hello.refs.button.getDOMNode());
        assert.ok(!hello.getDOMNode().textContent.match('hello world!'));
    });
});

function render(component) {
    var container = document.createElement('div');
    document.body.appendChild(container);
    React.renderComponent(component, container);
    return component;
}
 
function teardownComponent(component) {
    React.unmountComponentAtNode(component.getDOMNode().parentNode);
}
