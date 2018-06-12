import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {StyleSheet, View, Image, ListView, StatusBar, Alert} from 'react-native';
import { Constants } from 'expo';

const SIGN_IN_ERROR_USERNAME_NOT_EXIST = 'You are not in our system yet. If you are a new user, please click "register".';
const SIGN_IN_ERROR_PASSWORD_INCORRECT = 'Looks like there\'s something wrong with the password you entered, please try again.';
const REGISTER_ERROR_USERNAME_EXIST = 'You have already registered! Click "sign in"';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#2f2f2f",
        height: Constants.statusBarHeight,
    },
    form: {
        paddingTop: 30,
        paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    gap: {
        height: 10
    },
    mainContainer: {
        //backgroundColor: "#2F2F2F",
    },
    // rest of the styles
});


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: 'a', password: 'a' };
    }

    _login = () => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json'); // This one sends body
        if(this.state.username && this.state.password)
            return fetch('http://lesterlyu.com/api/authenticate/', {
                method: 'POST',
                headers: headers,
                redirect: 'follow',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                }),
            }).then(resp => {
                return resp.json();
            }).then(data => {
                if(data.success) {
                    // to next page
                    this.props.navigation.navigate("HomeScreen");
                }
                else {
                    Alert.alert(data.msg);
                    console.log(data);
                }
            }).catch(err => {
                console.log(err);
            });
        else
            Alert.alert("Please input username and password");
    };

    _register = () => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json'); // This one sends body
        if(this.state.username && this.state.password)
            return fetch('http://lesterlyu.com/api/register/', {
                method: 'POST',
                headers: headers,
                redirect: 'follow',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    admin: false
                }),
            }).then(resp => {
                return resp.json();
            }).then(data => {
                if(data.success) {
                    //Alert.alert("Registration success");
                    this.props.navigation.navigate("EditProfile", {from: "login"});
                }
                else {
                    Alert.alert("Failed to register, " + data.msg);
                    console.log(data);
                }
            }).catch(err => {
                console.log(err);
            });
        else
            Alert.alert("Please input username and password");
    };

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <Container style={styles.mainContainer}>
                <View style={styles.statusBar} />
                <StatusBar barStyle="light-content"/>

                <Image
                    source={require('./../../imgs/banner.png')}
                    style={{
                        width: null,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                </Image>

                <Content>
                    <Form style={styles.form}>

                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                keyboardType={'ascii-capable'}
                                autoCorrect={false}
                                onChangeText={(username) => this.setState({username})}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                keyboardType={'ascii-capable'}
                                secureTextEntry={true}
                                autoCorrect={false}
                                onChangeText={(password) => this.setState({password})}
                            />
                        </Item>
                    </Form>

                    <Button block info onPress={this._login}>
                        <Text>Sign in</Text>
                    </Button>
                    <View style={styles.gap}/>
                    <Button block success onPress={this._register}>
                        <Text>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
