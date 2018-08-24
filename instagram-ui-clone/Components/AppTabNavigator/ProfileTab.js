import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Container, Content, Header, Left, Body, Right, BUtton} from 'native-base';

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
                    <Left style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={{fontWeight:'bold', fontSize: 17}}>_alstn2468_</Text>
                        <Icon name='caret-down' type='FontAwesome' style={style.leftIcon}/>
                    </Left>
                    <Right style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name='back-in-time' type='Entypo' style={style.rightIcon}/>
                        <Icon name='user-plus' type='Feather' style={style.rightIcon}/>
                        <Icon name='dots-vertical' type='MaterialCommunityIcons' style={style.rightIcon}/>
                    </Right>
                </Header>
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
    leftIcon: {
        paddingLeft: 10,
        fontSize: 14
    },
    rightIcon: {
        paddingRight: 10,
        fontSize: 23
    }
})
