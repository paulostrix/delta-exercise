import React from 'react'
import { Text } from 'react-native'
import { GoBackButton, Container } from './styles'
import { Feather } from '@expo/vector-icons'
import { useFonts, RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/dev'
import AppLoading  from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native'

const Header = ( {children, ...rest}) =>{

    const { goBack } = useNavigation()
    let [fontsLoaded] = useFonts({
        "RobotoSlab-Regular": RobotoSlab_400Regular,
        "RobotoSlab-Medium": RobotoSlab_500Medium,
      });
    let pageVerify = null;
    if(children !== 'Página Inicial' && children !== 'Lista de Alunos'){
        pageVerify = true
    }
    if(fontsLoaded){
        return (
        <Container {...rest}>
           {pageVerify &&  <GoBackButton onPress={()=> goBack()} >
            <Feather name='arrow-left' size={32}></Feather>
            </GoBackButton>}
            <Text style={{fontSize:25, fontFamily:'RobotoSlab-Medium', marginTop:15, color:'white'}}>{children}</Text>
        </Container >
        )
    }
    else{
        return <AppLoading></AppLoading>
    }
}

export default Header