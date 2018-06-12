import React from "react";
import Styles from "./StylesPage.js";
import Carts from "../CartPage/index";
import Likes from "../Likes/index";
import Profiles from "../ProfilePage/index.js";

import {TabNavigator} from "react-navigation";

import {Button, Footer, FooterTab, Icon, Item, Label, Text} from "native-base";

export default (MainScreenNavigator = TabNavigator(
    {
        Styles: {
            screen: Styles,
        },
        Likes: {screen: Likes},
        Carts: {screen: Carts},
        Profiles: {screen: Profiles},
    },
    {
        swipeEnabled:false,
        scrollEnabled: true,
        animationEnabled: true,
        tabBarPosition: "bottom",

        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'blue',
            },
        },


        tabBarComponent: props => {

            _generateStylesPage = () => {
                props.navigation.navigate("Styles");
            };

            _generateLikesPage = () => {
                props.navigation.navigate("Likes");
            };

            _generateCartsPage = () => {
                props.navigation.navigate("Carts");
            };

            _generateProfilePage = () => {
                props.navigation.navigate("Profiles");
            };

            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={this._generateStylesPage}
                        >
                            <Icon name="shirt"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={this._generateLikesPage}
                        >
                            <Icon name="heart"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={this._generateCartsPage}
                        >
                            <Icon name="cart"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={this._generateProfilePage}
                        >
                            <Icon name="person"/>
                        </Button>
                    </FooterTab>
                </Footer>
            );

        }
    }
));
