import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Container, Content, Header, Left, Body, Right, Button} from 'native-base';

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-person' style={{color:tintColor}}/>
        )
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
        paddingTop: 5
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
    }
})
