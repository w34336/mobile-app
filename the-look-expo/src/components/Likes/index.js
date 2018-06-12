import React, { Component } from "react";

import LikesPage from "./LikesPage";
import SuitDetailsPage from "./suitDetailsPage";
import ItemDetailPage from "../itemDetailPage.js";
import { StackNavigator } from "react-navigation";

export default (Likes = StackNavigator({
    LikesPage: {
        screen: LikesPage,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    SuitDetailsPage: { screen: SuitDetailsPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Suit Detail",
        }),
    },
    ItemDetailPage: { screen: ItemDetailPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: "Product Detail",
        }),
    },
}));
