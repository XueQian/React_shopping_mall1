/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');

var Item = React.createClass({

    render: function() {

        var item = this.props.data;
        return (
            <div>
                <div id='itemImage'>
                    <img src={item.image}/>
                </div>
                <div id='itemInfo'>
                    {item.name} | ￥{item.price}
                </div>
            </div>)
    }
});

module.exports = Item;