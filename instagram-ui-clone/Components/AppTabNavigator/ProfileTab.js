import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base';

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-person' style={{color:tintColor}}/>
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        };
    }

    segmentClicked=(index)=> {
        this.setState({
            activeIndex: index
        })
    }

    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return(
                <View>
                    <Text>this is first section</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left style={{flexDirection:'row', alignItems: 'center', paddingTop: 5}}>
                        <Text style={style.idText}>_alstn2468_</Text>
                        <Icon name='caret-down' type='FontAwesome' style={style.leftIcon}/>
                    </Left>
                    <Right style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name='back-in-time' type='Entypo' style={style.rightIcon}/>
                        <Icon name='user-plus' type='Feather' style={style.rightIcon}/>
                        <Icon name='dots-vertical' type='MaterialCommunityIcons' style={style.rightIcon}/>
                    </Right>
                </Header>
                <Content>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={style.profileImageView}>
                                <Image source={require('../../assets/thumbnail.jpeg')}
                                    style={style.profileImage}/>
                            </View>
                            <View style={{flex:3}}>
                                <View style={style.profileTextView}>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={style.profileTextNum}>1</Text>
                                        <Text style={style.profileTextStr}>게시물</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={style.profileTextNum}>0</Text>
                                        <Text style={style.profileTextStr}>팔로워</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={style.profileTextNum}>0</Text>
                                        <Text style={style.profileTextStr}>팔로잉</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Button bordered dark style={style.profileButton}>
                                        <Text>프로필 수정</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={style.profileThumbnailView}>
                            <Text style={style.profileThumbnailTextName}>김민수</Text>
                            <Text style={style.profileThumbnailTextSub}>React-Native</Text>
                            <Text style={style.profileThumbnailTextSub}>Instagram Clone Coding</Text>
                        </View>
                    </View>
                    <View>
                        <View style={style.profileTabBottomIcon}>
                            <Button transparent onPress={()=>this.segmentClicked(0)} active={this.state.activeIndex == 0}>
                                <Icon name='ios-apps-outline' style={[this.state.activeIndex == 0 ? {} : {color:'grey'}]}/>
                            </Button>
                            <Button transparent onPress={()=>this.segmentClicked(1)} active={this.state.activeIndex == 1}>
                                <Icon name='ios-list-outline' style={[this.state.activeIndex == 1 ? {} : {color:'grey'}]}/>
                            </Button>
                            <Button transparent onPress={()=>this.segmentClicked(2)} active={this.state.activeIndex == 2}>
                                <Icon name='ios-people-outline' style={[this.state.activeIndex == 2 ? {} : {color:'grey'}]}/>
                            </Button>
                            <Button transparent onPress={()=>this.segmentClicked(3)} active={this.state.activeIndex == 3}>
                                <Icon name='ios-bookmark-outline' style={[this.state.activeIndex == 3 ? {} : {color:'grey'}]}/>
                            </Button>
                        </View>
                        <View>
                            {this.renderSection()}
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ProfileTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    idText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    leftIcon: {
        paddingLeft: 10,
        fontSize: 14
    },
    rightIcon: {
        paddingRight: 10,
        fontSize: 23
    },
    profileImageView: {
        flex:1,
        paddingTop: 5,
        paddingLeft: 15
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 37.5
    },
    profileTextView: {
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop: 5,
        paddingRight: 10
    },
    profileTextNum: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    profileTextStr: {
        fontSize:12,
        color:'gray'
    },
    profileButton: {
        flex: 1,
        justifyContent: 'center',
        height: 30,
        marginHorizontal: 10,
        marginTop: 10
    },
    profileThumbnailView: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    profileThumbnailTextName: {
        fontWeight:'bold',
        fontSize: 12
    },
    profileThumbnailTextSub: {
        fontSize: 10
    },
    profileTabBottomIcon: {
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopWidth:1,
        borderTopColor:'#eae5e5'
    }
})
