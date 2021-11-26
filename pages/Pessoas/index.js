import React, {useEffect, useState} from 'react';
import { View, Text, Image } from 'react-native';
import api from '../../services/api'

// import { Container } from './styles';

const Pessoas = ({navigation}) => {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    async function fectch(){
      // const {data, status} = await api.get('users', {user: 'ranieri.shi@gmail.com', password: '123456'}) 
      const {data, status} = await api.get('users')
      if(status === 200){
        setUsers(data)
      }
    }
    setLoading(true)
    fectch()
    setLoading(false)
  },[])

  // useEffect(useCallback(async()=>{
  //   const {data} = await api.get('users')
  //   setUsers(data)
  //   console.log(data)
  // }),[])

  return (
  <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    { users && loading === false && users.map((usuario)=> (
      <View key={usuario.login} style={{display:'flex', flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', width:150}}>
        <Image 
          style={{height:50, width:50, borderRadius:50, marginTop:8}} 
          source={{uri:usuario.avatar_url}}
        />        
        <Text style={{fontSize: 18, fontWeight:'bold'}}>{usuario.login}</Text>
      </View>
      )
    )}
  </View>
  )}

export default Pessoas;