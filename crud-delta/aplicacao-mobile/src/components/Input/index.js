import React, {
    useState,
    useCallback,
    useEffect,
    useRef
}  from 'react'
import { useField } from '@unform/core';
import { Container, TextInput, FeatherIcon } from './styles';



const Input = ({name, icon, ...rest }, ref) => {

     
    const inputElementRef = useRef(null);
    const { registerField, fieldName, defaultValue = '', error } = useField(name);
    const inputValueRef = useRef({ value: defaultValue });
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []
    )

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputValueRef.current,
          path: 'value',
          setValue(ref , value) {
            inputValueRef.current.value = value;
            inputElementRef.current.setNativeProps({ text: value });
          },
          clearValue() {
            inputValueRef.current.value = '';
            inputElementRef.current.clear();
          },
        });
      }, [registerField, fieldName]);


    const handleInputblur = useCallback(() => {
        setIsFocused(false);

        if(inputValueRef.current?.value){
            setIsFilled(true);
        }
        else{
            setIsFilled(false);
        }
    }, []
    )
    return (
        <Container isFocused = {isFocused}>
            <FeatherIcon name={icon} size = {20} color ={isFocused || isFilled ?  '#367BF5' : '#AAADB1' } />
            <TextInput
            ref = {inputElementRef}
            keyboardAppearance='dark' 
            placeholderTextColor ="#AAADB1"
            defaultValue={defaultValue}
            onFocus={handleInputFocus}
            onBlur={handleInputblur}
            onChangeText = {(value) => {
                inputValueRef.current.value = value;  
            }
          }
            {...rest}
            />
        </Container>
    )
}

export default Input