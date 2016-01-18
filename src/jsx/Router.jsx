/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Router = React.createClass({
    render: function() {
        return (
            Locations(null,
                Location({path: "/", handler: require('./ItemList.jsx')})
            )
        )
    }
});

React.renderComponent(Router(), document.body);