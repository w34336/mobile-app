import React from "react";
import { AppRegistry, View, StatusBar, Image, StyleSheet, TouchableOpacity } from "react-native";
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
} from "native-base";
import HomeScreen from "../MainScreen/index";

const skinColor = ["WHITE", "YELLOW", "BROWN", "BLACK"];
const skinColorImg = [require("../../imgs/profile/skinColor/color-0.png"),
    require("../../imgs/profile/skinColor/color-1.png"), require("../../imgs/profile/skinColor/color-2.png"),
    require("../../imgs/profile/skinColor/color-3.png")];

const belly = ["NO BELLY", "THIN BELLY", "FAT BELLY"];
const bellyImg = [require("../../imgs/profile/belly/belly-0.png"),
    require("../../imgs/profile/belly/belly-1.png"),
    require("../../imgs/profile/belly/belly-2.png")];

const shoulderShape = ["RECTANGLE\nSHOULDER", "ROUND\nSHOULDER"];
const shoulderShapeImg = [require("../../imgs/profile/shoulderShape/shoulder-0.png"),
    require("../../imgs/profile/shoulderShape/shoulder-1.png")];

const legShape = ["NO EDGE LEG", "NORMAL LEG", "SKINNY LEG", "MUSCULAR LEG"];
const legShapeImg = [require("../../imgs/profile/legShape/leg-0.png"),
    require("../../imgs/profile/legShape/leg-1.png"),
    require("../../imgs/profile/legShape/leg-2.png"),
    require("../../imgs/profile/legShape/leg-3.png")];

const legTorsoRatio = ["LONG TORSO", "EQUAL", "LONG LEG"];
const legTorsoRatioImg = [require("../../imgs/profile/legTorsoRatio/ratio-0.png"),
    require("../../imgs/profile/legTorsoRatio/ratio-1.png"),
    require("../../imgs/profile/legTorsoRatio/ratio-2.png")];

const bodyShape = ["SKINNY BODY", "NORMAL\nBODY", "MUSCULAR\nBODY", "CHUBBY BODY"];
const bodyShapeImg = [require("../../imgs/profile/bodyShape/shape-0.png"),
    require("../../imgs/profile/bodyShape/shape-1.png"),
    require("../../imgs/profile/bodyShape/shape-2.png"),
    require("../../imgs/profile/bodyShape/shape-3.png")];

const atLength = ["LOW", "MIDDLE", "HIGH"];
const atLengthImg = [require("../../imgs/profile/atLength/at-0.png"),
    require("../../imgs/profile/atLength/at-1.png"),
    require("../../imgs/profile/atLength/at-2.png")];

const height = [">188\nCM", "175-188\nCM", "<175\nCM"];

const neckType = ["NORMAL\nNECK", "LONG NECK", "SHORT NECK"];
const neckTypeImg = [require("../../imgs/profile/neckType/neck-0.png"),
    require("../../imgs/profile/neckType/neck-1.png"),
    require("../../imgs/profile/neckType/neck-2.png")];


class ProfileButton extends React.Component {

    constructor(props) {
        super();
        this.state = {
            type: props.type,
            descriptions: props.descriptions, // e.g. ["NO BELLY", "THIN BELLY", "FAT BELLY"]
            currentIndex: 0,
        };

        if(props.type === 'image') {
            this.state.images = props.images
        }
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.box}
                onPress={ () => {
                    this.setState({currentIndex: (this.state.currentIndex + 1) % this.state.descriptions.length})
                }} >

                { this.state.type === 'image' &&
                    <Image style={styles.image} source={this.state.images[this.state.currentIndex]}>
                    </Image>
                }
                { this.state.type === 'image' &&
                    <Text style={styles.text}>
                        { this.state.descriptions[this.state.currentIndex] }
                    </Text>}
                { this.state.type !== 'image' &&
                    <Text style={styles.textOnly}>
                        { this.state.descriptions[this.state.currentIndex] }
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}


export default class EditProfile extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Edit Profile</Title>
                </Body>
                <Right/>
            </Header>
        )
    });

    back = () => {
        if(this.state.from === 'login') {
            this.props.navigation.navigate('HomeScreen');
        }
        else
            this.props.navigation.goBack();

    };

    _submitProfile = () => {
        alert("Submitted Profile");
        if(this.state.from === 'login') {
            this.props.navigation.navigate('HomeScreen');
        }
        else
            this.props.navigation.goBack();
    }

    constructor(params) {
        super();
        const {state} = params.navigation;
        this.state = {
            belly: 0,
            shoulder: 0,
            leg: 0,
            height: 0,
            neck: 0,
            body: 0,
            skinColor: 0,
            legTorsoRatio: 0,
            atLength: 0,
            from: state.params.from,
        };

    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={shoulderShape} images={shoulderShapeImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={neckType} images={neckTypeImg}/>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={skinColor} images={skinColorImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={belly} images={bellyImg}/>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={atLength} images={atLengthImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={legShape} images={legShapeImg}/>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={legTorsoRatio} images={legTorsoRatioImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={bodyShape} images={bodyShapeImg}/>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <ProfileButton descriptions={height}/>
                        </Col>
                    </Grid>

                    <Grid>
                        <Col>
                            <Button full rounded light
                                    style={{ marginTop: 10, marginBottom: 20}} onPress={this._submitProfile}>
                                <Text>THAT'S ME</Text>
                            </Button>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    boxEmpty:{
        flex: 1,
        margin: 5,
        borderRadius: 20,
        height: 180,
        justifyContent: 'center'
    },
    box:{
        flex: 1,
        margin: 5,
        borderRadius: 20,
        overflow: 'hidden',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D7D9DB",
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#ffffff",
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    textOnly: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: "#4C5B73",
    },
    image: {
        flex: 1,
        width: 180,
        height: 180,
        borderRadius: 20,
    },
});
