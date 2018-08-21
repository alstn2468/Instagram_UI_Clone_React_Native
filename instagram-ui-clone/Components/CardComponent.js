import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Thumbnail, Body,
        Left, Right, Button, Icon} from 'native-base';

class CardComponent extends Component {
    render() {
        const images = {
            '1' : require('../assets/cardimg1.png'),
            '2' : require('../assets/cardimg2.png'),
            '3' : require('../assets/cardimg3.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/thumbnail.jpeg')}/>
                        <Body>
                            <Text>Minsu</Text>
                            <Text note>2018 / 08 / 21</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem>
                    <Image source={images[this.props.imageSource]} style={style.cardimg}/>
                </CardItem>
                
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles-outline' style={{color:'black'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send-outline' style={{color:'black'}}/>
                        </Button>
                    </Left>
                </CardItem>

                <CardItem style={{height:40}}>
                    <Text>좋아요 {this.props.likes}개</Text>
                </CardItem>

                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}>
                            Minsu
                        </Text>
                        #Instagram #Clone #With #React-Native
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardimg: {
        height:200,
        width:null,
        flex:1
    }
})
