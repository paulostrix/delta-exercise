import React, { useRef, useState, useCallback, useEffect} from 'react'
import { Text, View, Alert, KeyboardAvoidingView, ScrollView, Image} from 'react-native'

import Input from '../../components/Input'
import Header from '../../components/Header/index'

import { SimpleLineIcons  } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import { Form } from '@unform/mobile'
import api from '../../services/api'
import * as Yup from 'yup';

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_700Bold, RobotoCondensed_400Regular, RobotoCondensed_300Light } from '@expo-google-fonts/dev';

import { Container, ButtonReg, ImagePlaceHolder, Title, ButtonRegText, PicutePicker } from './styles'

const Register = ({ navigation }) =>{
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png');
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, [ImagePicker]);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri)
      }
    }
  
    const formRef = useRef(null)
    const nameInputRef = useRef(null)
    const addressInputRef = useRef(null)

    const handleSingUpScreen =  useCallback(async (data) => {
        try {
          formRef.current?.setErrors({});
    
    
          const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            address: Yup.string().required('Endereço obrigatório'),
          });
    
          await schema.validate(data, {
            abortEarly: false,
          });


          let fileName = image.split('/').pop()
          let match = /\.(\w+)$/.exec(fileName);
          let type = match ? `image/${match[1]}` : `image`

          const form = new FormData()
          form.append('file', { uri: image, name: fileName, type })
          form.append('body', JSON.stringify(data))

          console.log(form)
          await api.post('/students/create', form);
        
          Alert.alert(
            'Cadastro finalizado',
            'Aluno cadastrado com sucesso! ✔ Se necessário arraste para baixo para atualizar a lista de estudantes',
          );

          navigation.goBack()
        } catch (err) {
          console.log(err)
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
    
            formRef.current?.setErrors(errors);
            
            return;
          }
          Alert.alert(
            'Erro no cadastro',
            'Ocorreu um erro ao fazer cadastro, tente novamente.Verifique o formato da Imagem, JPG é obrigatório',
          );
        }
      }, [navigation,image]);

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
      <Header>Cadastro</Header>
        <ScrollView>
          <KeyboardAvoidingView> 
            <Container>
                <ImagePlaceHolder source={{ uri:image}} />
                <PicutePicker onPress={pickImage}><SimpleLineIcons name="camera" size={24} color="black" /></PicutePicker>
                <Text style={{ fontFamily:'RobotoCondensed_300Light' }}>Tamanho máximo:2mb</Text>
                <Title style={{ fontFamily:'RobotoCondensed_700Bold' }}>Cadastre um novo aluno</Title>
                <Form style={{width:'100%'}} ref={formRef} onSubmit={handleSingUpScreen}>

                <Input autoCapitalize='words' name="name" icon= 'user' placeholder="Nome" returnKeyType="next"
                onSubmitEditing={() => {
                    nameInputRef.current?.focus()
                }}/>

                <Input autoCapitalize='words' name="address" icon= 'map-pin' placeholder="Endereço" returnKeyType="next"
                onSubmitEditing={() => {
                    addressInputRef.current?.focus()
                }}/>

                <ButtonReg onPress={() => { formRef.current?.submitForm()}}>
                  <ButtonRegText 
                    style={{ fontFamily:'RobotoCondensed_400Regular' }}
                  >Cadastrar</ButtonRegText>
                </ButtonReg>
                
                </Form>
            </Container>
          </KeyboardAvoidingView>
        </ScrollView>
        </>
    )
}

export default Register;