import React, { Component } from "react";
import CartPage from "./CartPage";
import ItemDetailPage from "../itemDetailPage.js";
import { StackNavigator } from "react-navigation";

export default (CartsNav = StackNavigator({
    CartPage: {
        screen: CartPage,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    ItemDetailPage: { screen: ItemDetailPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Item Detail",
        }),
    },
}));
