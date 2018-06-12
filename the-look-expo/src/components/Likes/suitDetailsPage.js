import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {
    Body,
    Button,
    Checkbox,
    Container,
    Content,
    Footer,
    FooterTab,
    H1,
    H2,
    H3,
    Header,
    Left,
    List,
    Right,
    Thumbnail,
    Title,
} from 'native-base';


const image1 = require("../../imgs/styles/6/Uniqlo-Black-Shirt.jpg");
const image2 = require("../../imgs/styles/6/Levis.jpg");
const image3 = require("../../imgs/styles/6/Schott.jpg");
const image4 = require("../../imgs/styles/6/Supreme-Plain-Logo-Shirt.png");
const image5 = require("../../imgs/styles/6/Zara-Leather-Jacket.jpg");

const data = [
    {
        id: 1,
        image: image1,
        name: 'Uniqlo Black Shirt',
        price: 15,
        amountTaken: 1
    }, {
        id: 2,
        image: image2,
        name: 'Levis 501',
        price: 398,
        amountTaken: 1
    }, {
        id: 3,
        image: image3,
        name: 'Schott',
        price: 78,
        amountTaken: 1
    }, {
        id: 4,
        image: image4,
        name: 'Supreme Plain Logo Shirt',
        price: 780,
        amountTaken: 1
    }, {
        id: 5,
        image: image5,
        name: 'Zara Leather Jacket',
        price: 200,
        amountTaken: 1
    },
];

// const datas = [
//     {
//         img: thumbnail,
//         text: "Vivamus",
//         note: "Lorem ipsum dolor sit amet.",
//         price: "59.99"
//     },
//     {
//         img: thumbnail,
//         text: "Morbi laoreet leo",
//         note: "Proin ornare ante erat, efficitur molestie metus venenatis eget.",
//         price: "50.99"
//     },
//     {
//         img: thumbnail2,
//         text: "Sed viverra",
//         note: "Etiam quis gravida justo, a lobortis risus. Maecenas eu dui et arcu lobortis suscipit. ",
//         price: "84.99"
//     },
// ];



class ListItem extends React.Component {
    _onPress = () => {
        alert("To item detail page")
        this.props.navigation.navigate('ItemDetailPage');
    };

    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            item: props.item,
            navigation:props.navigation
        };
        //this._onPress=this._onPress.bind(this);

        if(props.type === 'image') {
            this.state.images = props.images
        }
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={(this.state.index + 1 === data.length) ? styles.lastItemStyle : styles.containerStyle}>
                    <Image source={this.state.item.img} style={styles.imageStyle}/>
                    <View style={styles.textStyle}>
                        <Text style={{ color: '#2e2f30' }}>{this.state.item.name}</Text>
                        <View style={styles.priceStyle}>
                            <Text style={{ color: '#2e2f30', fontSize: 12 }}>${this.state.item.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


class SuitDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
    }


    _renderItem({ item, index }) {
        return (
            <ListItem item={item} index={index} navigation = {this.props.navigation}/>
        );
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />

            </Container>
        );
    }
}


const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        backgroundColor: '#ddd',
        width: 60,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};

export default SuitDetailPage;
