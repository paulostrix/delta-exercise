import React, { useRef, useState, useCallback, useEffect} from 'react'
import { Text, View, Alert, KeyboardAvoidingView, ScrollView, Image} from 'react-native'

import Input from '../../components/Input'
import Header from '../../components/Header/index'

import { SimpleLineIcons, Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import { Form } from '@unform/mobile'
import api from '../../services/api'
import * as Yup from 'yup';

import { Container, ButtonReg, ImagePlaceHolder, Title, ButtonRegText, PicturePicker, DeleteButton} from './styles'

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_700Bold, RobotoCondensed_400Regular, RobotoCondensed_300Light } from '@expo-google-fonts/dev';

const StudentInfo = ({route, navigation} ) =>{
  const [image, setImage] = useState(route.params.avatar);
  const [student,setStudent] = useState(null)
  

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri)
        console.log(result.uri)
      }
    }
    
    const formRef = useRef(null)
    const nameInputRef = useRef(null)
    const addressInputRef = useRef(null)


    const handleDeleteStudent = useCallback( async () =>{
        try{
          await api.delete(`/students/${route.params.id}`).then((response)=>{
            console.log(response.data)
          })

          Alert.alert(
            'Exclusão bem sucedida',
            'Estudante excluído do nosso banco de dados! Arraste para baixo para atualizar',
          );
          navigation.goBack()
        }
        catch(err){
          Alert.alert(
            'Falha na exclusão',
            'Falha na exclusão',
          );
          console.log(err)
        }
    },[])

    const handleEditStudentInfo =  useCallback(async (data) => {
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
          
          data.avatarKey = route.params.avatarKey
          form.append('file', { uri: image, name: fileName, type })
          form.append('body', JSON.stringify(data))
          
          console.log(form)
          await api.put(`students/${route.params.id}/${route.params.avatarKey}`, form).then((response)=>{
            console.log(response.data)
          })
        
          Alert.alert(
            'Alteração finalizado',
            'Alteração realizada com sucesso! ✔ Arraste para baixo para atualizar',
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
            'Erro na alteração',
            'Ocorreu um erro ao realizar a alteração, tente novamente.',
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
      <Header>Informações do Aluno</Header>
      <ScrollView>
      <KeyboardAvoidingView> 
              <DeleteButton onPress={handleDeleteStudent}>
                <Feather name="trash" size={24} color="black" />
              </DeleteButton>
              <Container>
                  <ImagePlaceHolder source={{ uri:image}} />

                  <PicturePicker onPress={pickImage}>
                    <SimpleLineIcons name="camera" size={24} color="black"/>
                  </PicturePicker>
                  <Text style={{ fontFamily:'RobotoCondensed_300Light' }}>Tamanho máximo:2mb</Text>

                  <Title style={{ fontFamily:'RobotoCondensed_700Bold' }} >Editar informações</Title>

                  <Form style={{width:'100%'}} ref={formRef} onSubmit={handleEditStudentInfo}>
                  <Input autoCapitalize='words' name="name" icon= 'user' placeholder="Nome" returnKeyType="next"
                  onSubmitEditing={() => {
                      nameInputRef.current?.focus()
                  }}
                  
                  />

                  <Input autoCapitalize='words' name="address" icon= 'map-pin' placeholder="Endereço" returnKeyType="next"
                  onSubmitEditing={() => {
                      addressInputRef.current?.focus()
                  }}
                  
                  />
                  
                  <ButtonReg onPress={() => { formRef.current?.submitForm()}}>
                    <ButtonRegText style={{ fontFamily:'RobotoCondensed_400Regular' }} >Confirmar edição</ButtonRegText>
                  </ButtonReg>
                  </Form>
              </Container>
        </KeyboardAvoidingView>
        </ScrollView>
        </>
    )
}

export default StudentInfo;