import React from "react";
import { AppRegistry, View, StatusBar, Image, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Input,
    InputGroup,
    Item,
    Tab,
    Tabs,
    Footer,
    FooterTab,
    Label,
    Thumbnail,
    Grid,
    Col,
    List,
    ListItem,
    Switch,
    Separator
} from "native-base";

const logo = require("../../imgs/logo.png");
const cardImage = require("../../imgs/banner.png");

const avatar = require("../../imgs/avatar.jpeg");

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            casualProgress: 0.4,
            businessProgress: 0.8,
            sportProgress: 0.2,
            hipProgress: 0.2
        }
    }

    _clearPreference = () => {
        this.setState({casualProgress: 0, businessProgress: 0, sportProgress: 0, hipProgress: 0});
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Content padder style={{backgroundColor: "#ffffff"}}>

                <Thumbnail style={{alignSelf: 'center', marginTop: 30}} large source={avatar} />
                <View style={{alignItems: 'center', flex: 1, flexDirection: 'column'}}>
                    <View>
                        <Text>Casual</Text>
                        <Progress.Bar style={styles.progressBar} progress={this.state.casualProgress} size={200} width={300} height={20}/>
                    </View>
                    <View>
                        <Text>Business</Text>
                        <Progress.Bar style={styles.progressBar} progress={this.state.businessProgress} size={200} width={300} height={20}/>
                    </View>
                    <View>
                        <Text>Sport</Text>
                        <Progress.Bar style={styles.progressBar} progress={this.state.sportProgress} size={200} width={300} height={20}/>
                    </View>
                    <View>
                        <Text>Hip-pop</Text>
                        <Progress.Bar style={styles.progressBar} progress={this.state.hipProgress} size={200} width={300} height={20}/>
                    </View>
                </View>

                <Button full rounded light
                        style={{ marginTop: 10 }}
                        onPress={this._clearPreference}
                >
                    <Text>Clear learnt preference</Text>
                </Button>

                <Button full rounded light
                        style={{ marginTop: 20, marginBottom: 20  }}
                        onPress={() => this.props.navigation.navigate("EditProfile", {from: "profilePage"})}
                >
                    <Text>Body profile</Text>
                </Button>



            </Content>
        );
    }
}

ProfilePage.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Body>
            <Title>Profile</Title>
            </Body>
        </Header>
    )
});

const styles = StyleSheet.create({
    progressBar: {
        alignSelf: 'center',
        margin: 10,
    }
});

export default ProfilePage;