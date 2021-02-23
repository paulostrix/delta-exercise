import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components'

export const Container = styled.View`
    flex:1
    align-items:center;
    justify-content:center;
    padding:0 30px
    bottom:30px
    margin-top:40px
`

export const Title = styled.Text`
    align-self:center
    font-size:25px
    margin-bottom:10px
`
export const ImagePlaceHolder = styled.Image`
    width:136px
    height: 136px
    border-radius:68px
    margin-bottom:10px
`
export const ButtonReg = styled(RectButton)`
    width:100%;
    height:60px;
    background:#ED9B35;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    margin-top: 8px;

`

export const ButtonRegText = styled.Text`
    font-size:18px
`

export const PicturePicker = styled(RectButton)`
    width:44px
    height:44px
    top:100px
    right:110px
    align-items:center
    justify-content:center
    border-radius:22px
    position:absolute
    background:green
`

export const DeleteButton = styled(RectButton)`
    width:44px
    height:44px
    margin-right:10px
    align-self:flex-end
    align-items:center
    justify-content:center
    border-radius:22px
    background:red
`