import React, { Component } from "react";

import EditProfile from "./EditProfile.js";
import ProfilePage from "./ProfilePage.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    ProfilePage: { screen: ProfilePage },
    EditProfile: { screen: EditProfile },
}, {
    headerMode: 'screen'
}));

