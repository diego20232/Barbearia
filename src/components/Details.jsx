import React from "react";
import { Pressable, View, Text } from "react-native";
import { Image } from "react-native";
import { Button } from "react-native-paper";


export default props => {

    return (
        <View style={{ flex: 1, backgroundColor: '#6959CD' }}>
            <Text style={{
                fontSize: 25,
                marginLeft: 30,
                marginTop: 25,
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic'
            }}>Jhon Barber!</Text>

            <Image source={require('../imagens/star.png')} resizeMode="center" style={{
                left: 0,
                marginTop: -20
            }} />

            <Text style={{
                fontSize: 15,
                marginLeft: 270,
                marginTop: -50,
                color: 'white',

                fontStyle: 'italic'
            }}>237 E 5TH STREET, NYC</Text>


            <Pressable style={{
                padding: 335,
                marginTop: -0,
                backgroundColor: '#DCDCDC',
                borderRadius: 140,
                marginLeft: -110,
                marginTop: 60,
                borderWidth: 1,
                borderColor: 'black',

            }}>
                <Pressable style={{
                    backgroundColor: '#708090',
                    padding: 50,
                    width: 340,
                    borderRadius: 15,
                    right: 200,
                    marginTop: -150,
                    margin: 30,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: 'black',



                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        left: 40,
                        marginTop: -20,
                        color: 'white'
                    }}>Select the barber</Text>
                    <Image source={require('../imagens/men.png')} resizeMode="center" style={{
                        right: 200
                    }} />
                    <Text style={{
                        color: 'white',
                        right: 265,
                        marginTop: 70
                    }}>Travis</Text>

                    <Image source={require('../imagens/men.png')} resizeMode="center" style={{
                        right: 220
                    }} />
                    <Text style={{
                        color: 'white',
                        right: 285,
                        marginTop: 70
                    }}>Mark</Text>

                    <Image source={require('../imagens/men.png')} resizeMode="center" style={{
                        right: 240
                    }} />
                    <Text style={{
                        color: 'white',
                        right: 305,
                        marginTop: 70
                    }}>Scott</Text>




                </Pressable>





            </Pressable>
        </View>
    )
}