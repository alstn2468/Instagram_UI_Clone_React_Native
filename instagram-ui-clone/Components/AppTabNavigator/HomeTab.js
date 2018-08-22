import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Icon, Container, Content, Thumbnail, Header, Left, Right, Body} from 'native-base';

import CardComponent from '../CardComponent';

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color:tintColor}}/>
        )
    }

    render() {
        return (
            <Container style = {style.container}>
                <Header>
                    <Left>
                        <Icon name='ios-camera-outline' style={{paddingLeft:10}}/>
                    </Left>
                    <Body>
                        <Text style={{fontWeight:'900'}}>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon name='ios-send-outline' style={{paddingRight:10}}/>
                    </Right>
                </Header>
                <Content>
                    <View style={{height:100}}>
                        <View style={style.storyBar}>
                            <Text style={{fontWeight: 'bold'}}>스토리</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='md-play' style={{fontSize:14}}/>
                                <Text style={{fontWeight: 'bold'}}> 모두 보기</Text>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingLeft: 5,
                                    paddingEnd: 5}}>
                                <Thumbnail style={style.storyBarThumbnail} source={require('../../assets/story_bar_img_1.jpeg')}/>
                                <Thumbnail style={style.storyBarThumbnail} source={require('../../assets/story_bar_img_2.jpeg')}/>
                                <Thumbnail style={style.storyBarThumbnail} source={require('../../assets/story_bar_img_3.jpeg')}/>
                                <Thumbnail style={style.storyBarThumbnail} source={require('../../assets/story_bar_img_4.jpeg')}/>
                                <Thumbnail style={style.storyBarThumbnail} source={require('../../assets/story_bar_img_5.jpeg')}/>
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource='1' likes='1111'/>
                    <CardComponent imageSource='2' likes='2222'/>
                    <CardComponent imageSource='3' likes='3333'/>
                </Content>
            </Container>
        );
    }
}

export default HomeTab;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    storyBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7
    },
    storyBarThumbnail: {
        marginHorizontal: 5,
        borderColor: 'red',
        borderWidth: 2
    }
})
