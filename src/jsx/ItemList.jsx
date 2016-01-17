/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var data = {
    "items": [
        {
            "id": 1,
            "name": "item1",
            "price": "100",
            "image": "assets/imgs/F1.png"
        },
        {
            "id": 2,
            "name": "item2",
            "price": "200",
            "image": "assets/imgs/F2.png"
        },
        {
            "id": 3,
            "name": "item3",
            "price": "100",
            "image": "assets/imgs/F3.png"
        },
        {
            "id": 4,
            "name": "item4",
            "price": "100",
            "image": "assets/imgs/F4.png"
        },
        {
            "id": 5,
            "name": "item5",
            "price": "100",
            "image": "assets/imgs/F5.png"
        }
    ]
};

var ItemList = React.createClass({

    getInitialState: function() {
        return {data: {items: []}};
    },

    componentDidMount: function() {
        this.setState({data: data});
    },

    render: function() {

        var items = this.state.data.items;

        return <div id='itemList'>
            <ul>
                { items.map(function(item) {
                    return <li>
                        <div id='itemImage'>
                            <img src={item.image}/>
                        </div>
                        <div id='itemInfo'>
                            {item.name} | ￥{item.price}
                        </div>
                    </li>
                }) }
            </ul>
        </div>;
    }
});

module.exports = ItemList;





