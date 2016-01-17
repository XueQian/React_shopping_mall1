jest.dontMock('../../app/components/App');

var React require('react/addons');
var App require('../../app/components/App');
var TestUtils = React.addons.TestUtils;

describe('App', function() {

    it('renders with correct text', function() {

        var app = TestUtils.renderIntoDocument(
            <App />
        );

        var appNode = React.findDOMNode(app);

        // Asserts that the text in the <h1> tag
        // is equal to "Hello World" (like our App component)
        expect(
            appNode.querySelector('h1').textContent
        ).toEqual('Hello World');
    });

});