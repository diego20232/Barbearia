import React from "react";
import { Pressable, View, Text } from "react-native";
import { Image } from "react-native";
import { Button } from "react-native-paper";


export default props => {

    return (
        <View style={{ flex: 1, backgroundColor: '#6959CD' }}>
            <Text style={{
                fontSize: 20,
                marginLeft: 30,
                marginTop: 25,
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic'
            }}>Bem Vindo!</Text>
            <Pressable style={{
                backgroundColor: 'white',
                margin: 25,
                borderRadius: 25,

                flexDirection: 'row'
            }}>
                <Image source={require('../imagens/men.png')} resizeMode="center" />
                <Text style={{
                    flexDirection: 'row',
                    marginLeft: 150,
                    marginTop: 20,
                    fontSize: 15,
                    fontStyle: 'italic'

                }}>Saldo</Text>

                <Text style={{
                    marginLeft: -40,
                    marginTop: 40,
                    fontSize: 25,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#6959CD',
                    flexDirection: 'row'
                }}>125$</Text>
            </Pressable>

            <Pressable style={{
                padding: 300,
                marginTop: -0,
                backgroundColor: '#DCDCDC',
                borderRadius: 140,
                marginLeft: -80,
                marginTop: 50,

            }}>
                <Pressable style={{
                    backgroundColor: 'white',
                    padding: 20,
                    width: 320,
                    borderRadius: 15,
                    right: 220,
                    marginTop: -250,
                    margin: 25,
                    flexDirection: 'row'

                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Jhon Barber</Text>
                    <Image source={require('../imagens/star.png')} resizeMode="center" style={{
                        right: 130
                    }} />
                    <Button style={{
                        backgroundColor: '#6959CD',

                        padding: 5,
                        marginTop: 50,
                        borderRadius: 5,
                        right: 30,
                    }} textColor="white" onPress={() => props.navigation.navigate('details')}>More Details</Button>



                </Pressable>

                <Pressable style={{
                    backgroundColor: 'white',
                    padding: 20,
                    width: 320,
                    borderRadius: 15,
                    right: 220,
                    marginTop: 30,
                    margin: 25,
                    flexDirection: 'row'

                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Real Man Barber</Text>
                    <Image source={require('../imagens/star.png')} resizeMode="center" style={{
                        right: 160
                    }} />
                    <Button style={{
                        backgroundColor: '#6959CD',

                        padding: 5,
                        marginTop: 50,
                        borderRadius: 5,
                        right: 70,
                    }} textColor="white">More Details</Button>





                </Pressable>

                <Pressable style={{
                    backgroundColor: 'white',
                    padding: 20,
                    width: 320,
                    borderRadius: 15,
                    right: 220,
                    marginTop: 30,
                    margin: 25,
                    flexDirection: 'row'

                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Razorblade</Text>
                    <Image source={require('../imagens/star.png')} resizeMode="center" style={{
                        right: 110
                    }} />
                    <Button style={{
                        backgroundColor: '#6959CD',

                        padding: 5,
                        marginTop: 50,
                        borderRadius: 5,
                        right: 25,
                    }} textColor="white">More Details</Button>





                </Pressable>

            </Pressable>
        </View>
    )
}