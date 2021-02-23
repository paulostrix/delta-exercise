import styled from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex:1
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    
`

export const WelcomeText = styled.Text`
    margin-bottom:10px
    font-size:25px
`
export const InfoText = styled.Text`
    margin-bottom:40px
    font-size:16px
`
export const ImageLogo = styled.Image`
    margin-bottom:40px
    width:230px
    height:230px
    border-radius:160px
`
export const MenuCard = styled(RectButton)`
    background:#ED9B35;
    flex-direction: row
    align-items:center;
    justify-content:center;
    width:260px;
    height:60px
    border-radius:30px

`

export const MenuCardText = styled.Text`
    padding-left:10px
    font-size:17px
    color:black;
`
