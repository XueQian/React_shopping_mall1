/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var Item = require('./item.jsx');

var ItemList = React.createClass({

    getInitialState: function() {

        return {data: {items: []}};
    },
    componentDidMount: function() {

        var that = this;

        $.get('../json/items.json', function(data) {
            that.setState({data: data});
        });
    },

    render: function() {
        var items = this.state.data.items;

        return (
            <div>
                {items.map(function(item) {
                    return <li>
                        <Item data={item}/>
                    </li>
                }) }
            </div>
        )
    }
});

module.exports = ItemList;





