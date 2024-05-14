import React from "react";
import { View, Image, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default props => {

    return (
        <View style={{flex: 1, backgroundColor: '#6959CD'}}>
            <Image source={require ('../imagens/barber.png')} resizeMode="center" style={{
                marginTop: 110,
                left: 50
            }}/>
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: 30,
                margin: 130,
                marginTop: -26,
                left: 50
            }}>CutForU</Text>
            <Text style={{
                fontSize: 15,
                color: 'white',
                margin: 80,
                marginTop: -120,
                fontStyle: 'italic',
                left: 50
            }}>Contrate um dos nossos barbeiro</Text>

<Button style={{
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 70,
            marginTop: 65,
            display: 'flex'
           }}>Agende agora!</Button>
     
           <Button style={{
            backgroundColor: 'white',
            borderRadius: 20,
            margin: 70,
            marginTop: -35,
            display: 'flex'
           }} onPress={() =>props.navigation.navigate('home')}>Home</Button>
            
      
        </View>
    )
}