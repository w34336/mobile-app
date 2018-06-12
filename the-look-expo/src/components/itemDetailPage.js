import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

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
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Thumbnail,
    Title,
} from 'native-base';


const image5 = require("../imgs/styles/6/Zara-Leather-Jacket.jpg");

export default class ItemDetailPage extends Component {
    render() {

        return (
            <Container>
                <ScrollView style={styles.scroll} contentContainerStyle={styles.center}>
                    <Image source={image5} style={{width: 300, height: 300, resizeMode: 'contain'}}/>
                    <View style={styles.product}>
                        <Text style={{fontSize: 30, marginTop: 10}}>Zara Leather Jacket</Text>
                        <Text style={{fontSize: 20, marginTop: 10}}>$ 200</Text>
                        <Text style={{fontSize: 20, marginTop: 10, marginRight: 15}}>Our customers asked for a lighter, trimmer asymmetrical leather biker jacket and we answered with the Perfecto model 626. As easygoing as a second skin yet incredibly durable, this 26” long motorcycle jacket was designed for warmer weather riding or casual trouble—your choice. </Text>
                    </View>
                <Button full light style={{marginTop: 10}}><Text>Add To Cart</Text></Button>
                </ScrollView>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'center',
        marginTop: 10,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    product: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    product_inner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
});
