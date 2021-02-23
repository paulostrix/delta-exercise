import React from 'react'
import { ScrollView, Image } from 'react-native'
import Input from '../../components/Input'
import { AntDesign } from '@expo/vector-icons'
import { Container, MenuCard, MenuCardText, ImageLogo, WelcomeText, InfoText } from './styles'
import Header from '../../components/Header'
import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_700Bold, RobotoCondensed_400Regular, RobotoCondensed_300Light } from '@expo-google-fonts/dev';


const Home = ({ navigation }) =>{
    let [fontsLoaded] = useFonts({
        RobotoCondensed_700Bold,
        RobotoCondensed_400Regular,
        RobotoCondensed_300Light
      });
    
    if (!fontsLoaded) {
    return <AppLoading />;
    }

    return (
        <>
        <Header>Página Inicial</Header>
        <ScrollView>
            <Container >
                <ImageLogo source={require('../../../assets/logo/logo.jpg')} />

                <WelcomeText style={{ fontFamily:'RobotoCondensed_700Bold' }}>Bem-vindo!</WelcomeText>

                <InfoText style={{fontFamily:'RobotoCondensed_300Light'}}>Olá, aproveite para gerenciar seus alunos!</InfoText>

                <MenuCard onPress={() => {navigation.navigate('Register')}} >
                    <MenuCardText style={{ fontFamily:'RobotoCondensed_400Regular' }}>Cadastrar</MenuCardText>
                    <AntDesign name="adduser" size={29} color="black" />    
                </MenuCard>
            </Container>
        </ScrollView>
        </>
    )
}

export default Home;