import React from "react";
import { StatusBar, View, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import {
    Body,
    Button,
    Card,
    CardItem,
    Col,
    Container,
    Content,
    Footer,
    FooterTab,
    Grid,
    Header,
    Icon,
    Input,
    InputGroup,
    Item,
    Label,
    Left,
    Right,
    Tab,
    Tabs,
    Text,
    Thumbnail,
    Title,
} from "native-base";

// const s1 = require("../../imgs/corporate.jpg");
// const s2 = require("../../imgs/hiphop.jpg");
// const s3 = require("../../imgs/jock.jpg");
// const s4 = require("../../imgs/popstar.jpg");
// const s5 = require("../../imgs/rockstar.jpg");
// const s6 = require("../../imgs/throwback.jpg");

const s1 = require("../../imgs/1.jpeg");
const s2 = require("../../imgs/2.jpeg");
const s3 = require("../../imgs/3.jpeg");
const s4 = require("../../imgs/4.jpeg");
const s5 = require("../../imgs/5.jpeg");
const s6 = require("../../imgs/6.jpeg");
const s7 = require("../../imgs/7.jpeg");

class StyleSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptions: props.descriptions, // e.g. ["NO BELLY", "THIN BELLY", "FAT BELLY"]
            image: props.image,
            navigator : props.navigation
        };
    }

    _viewSuitDetail = () => {
        alert("To SuitDetailPage");
        this.props.navigation("SuitDetailsPage");
        let headers = {"x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsInVzZXJuYW1lIjoiYWJjZGUiLCJpYXQiOjE1MTI1MTY5NTUsImV4cCI6MTUyMTE1Njk1NX0.hnXCq1SoC678MploOFfXmVfrOmZ3F4o62oa8Rh1Ry64"};
        return fetch('http://lesterlyu.com/api/user/recommendation', {
            method: 'GET',
            headers: headers,
            body: {},
        }).then(data => {
            if(data) {
                console.log(data);
            }
        }).catch(err => {
            console.log(err);
        });
    }



    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._viewSuitDetail}>
                    <Image source={this.state.image} style={styles.styleImage}/>
                </TouchableOpacity>
                <Text style={{textAlign: 'center', fontSize: 20}}>{this.state.descriptions}</Text>
            </View>
        );
    };
}


export default class LikesPage extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
              <Header>

                <Body>
                <Title>Likes</Title>
                </Body>
              </Header>

              <Content padder style={{backgroundColor: "#ffffff"}}>
                <Grid>
                  <Col>
                      <StyleSection descriptions={''} image={s1} navigation={navigate}/>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                      <StyleSection descriptions={''} image={s2} navigation={navigate}/>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                      <StyleSection descriptions={''} image={s3} navigation={navigate}/>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                      <StyleSection descriptions={''} image={s4} navigation={navigate}/>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                      <StyleSection descriptions={''} image={s5} navigation={navigate}/>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                      <StyleSection descriptions={''} image={s6} navigation={navigate}/>
                  </Col>
                </Grid>

              </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    styleImage:{
        flexDirection:"column",
        flex: 0.3,
        width: null,
        resizeMode: 'cover',
        height: 300,
        margin: 5,
        borderRadius: 20,
        justifyContent: 'center'
    }
});
