import React from 'react';
import { Text, TouchableOpacity, View,  } from 'react-native';

// import { Container } from './styles';

const Home = ({navigation}) => {
  return <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <TouchableOpacity
      onPress={()=> navigation.navigate('Pessoas')}
      style={{backgroundColor:'lightblue', width:100, height:30, marginTop:20}}
    >
      <Text style={{alignSelf:'center'}}>Pagina 2</Text>      
    </TouchableOpacity>
  </View>;
}

export default Home;