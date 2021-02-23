import styled from 'styled-components/native'

import {RectButton} from 'react-native-gesture-handler';

export const GoBackButton = styled(RectButton)`
    position: absolute;
    left:12px;
    bottom:6px;
`;
export const Container = styled.View`
    width:100%;
    height:10%;
    background:#2374b4;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px
`;