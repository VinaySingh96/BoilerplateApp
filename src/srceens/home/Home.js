import React, { useContext, useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ButtonComponent from '../../components/Button'
import { DefaultStyle } from '../../utils/DefaultStyle'
import { getToken, saveToken } from '../../helper/Storage'
import { UserContext } from '../../context/UserContext'

const Home = ({ navigation }) => {
  const handleMakePayment = () => {
    navigation.navigate('Payment');
  }

  // useEffect(async() => {
  //   console.log(await getToken());
  // }, [])
  // const {user} = useContext(UserContext);
  // console.log(user)

  const handleLogout = async () => {
    await saveToken(null);
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}]
    })
  }
  
  return (
    <SafeAreaView>
      <View style={DefaultStyle.p2}>
        <Text>Yours this month's expense</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;