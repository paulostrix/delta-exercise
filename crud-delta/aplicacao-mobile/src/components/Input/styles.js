import styled, {css} from 'styled-components';
import {  Fontisto, Feather  } from '@expo/vector-icons'


export const Container = styled.View`
    width:100%;
    height:60px;
    padding:0 16px;
    background: #f2fffc;
    border-radius:10px;
    margin-bottom:8px;
    border-width:2px;
    border-color:#e3fcf7;
    flex-direction: row;
    align-items:center;

`

export const FeatherIcon = styled(Feather)`
    margin-right: 16px;
`

export const TextInput = styled.TextInput`
    flex:1;
    color:black;
    font-size:18px;
`

export const Icon = styled(Fontisto)`
    margin-right:15px
`