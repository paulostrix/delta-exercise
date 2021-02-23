import { FlatList } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';


export const Container = styled.View`
    flex:1
    justify-content:flex-start
`

export const StudentsFlatList = styled(FlatList) `
    padding: 0px 24px 16px
    margin-bottom:-2px

`
export const StudentContainer = styled(RectButton)`
    background: #FFFF;
    border-radius:10px;
    padding: 20px;
    flex-direction:row
    margin-bottom:9px;
    box-shadow:  0px 5px 5px #2D9CDB;
    shadow-opacity: 0.25;
`

export const StudentAvatar = styled.Image`
    width: 86px;
    height: 86px;
    border-radius: 8px;
    
`
export const StudentName = styled.Text`
    margin-top:9px
    font-size: 15px;
    color: black;
    max-width: 160px
`


export const StudentAdress = styled.View`
    padding-top:5px
    flex-direction:row
`
export const StudentBaseInfo =  styled.View`
    padding-left:12px
    flex-direction:column
`
export const StudentOptions = styled.View`
    margin-left:auto
`
export const AcessButton = styled(TouchableOpacity)`
    margin-top:50px
    width:32px;
    height:34px;
    align-self:flex-end;
    background: #2DDB;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
    align-items:center;
    justify-content:center;
    box-shadow:  0px 5px 5px #2DB;
    shadow-opacity: 0.30;
`


export const EmptyCard = styled.View`
    justify-content: center;
    align-items:center;
`