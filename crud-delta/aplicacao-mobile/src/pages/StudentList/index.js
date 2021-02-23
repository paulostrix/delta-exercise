import React, { useEffect, useState, useCallback, useRef } from 'react';
import api from '../../services/api';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { useNavigation } from '@react-navigation/native';
import { Feather, Entypo } from '@expo/vector-icons';
import { RefreshControl, Text, View } from 'react-native';
import Header from '../../components/Header'


import AppLoading from 'expo-app-loading';
import { useFonts, RobotoCondensed_700Bold, RobotoCondensed_400Regular, RobotoCondensed_300Light } from '@expo-google-fonts/dev';

import {  
  Container, 
  StudentsFlatList, 
  StudentBaseInfo, 
  StudentContainer, 
  StudentAvatar, 
  AcessButton, 
  StudentOptions, 
  StudentName,
  StudentAdress,
  EmptyCard
} from './styles'

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const StudentList = () =>{
  const { navigate } = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true)

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    api.get(`/students`).then(response => {
    console.log(response.data)
      setStudents(response.data)
      setLoading(false)
      setRefreshing(false)
    })
    .catch(err =>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    api.get(`/students`).then(response => {
        console.log(response.data)
          setStudents(response.data)
          setLoading(false)
        })
        .catch(err =>{
          console.log(err)
        })
      .catch(err =>{
        console.log(err)
      })
  }, [loading])


  const navigateToInfo = useCallback(
    (student) =>{
      navigate('StudentInfo', student)
  },[navigate])

  const __listEmptyComponent = () => {
    return (
      <>
        <ScrollView>
          <EmptyCard>
            <Text>Ainda não existe nenhum aluno cadastrado.</Text>
          </EmptyCard>
        </ScrollView>
      </>
    )
  }

  let [fontsLoaded] = useFonts({
    RobotoCondensed_700Bold,
    RobotoCondensed_400Regular,
    RobotoCondensed_300Light
  });

  if (!fontsLoaded) {
  return <AppLoading />;
  }

  return( 
    <>
    <Header>Lista de Alunos</Header> 
    <SafeAreaView style={{flex:1}}>
      {loading ? Array.from({length: 3}).map((_, index) => (
          <View key={index} style={{marginBottom: 12, marginLeft:12}}>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item width={100} height={100} borderRadius={6} />
                <SkeletonPlaceholder.Item
                  flex={1}
                  justifyContent={'space-between'}
                  marginLeft={12}>
                  <SkeletonPlaceholder.Item
                    width="50%"
                    height={20}
                    borderRadius={6}
                  />
                  <SkeletonPlaceholder.Item
                    width="30%"
                    height={20}
                    borderRadius={6}
                  />
                  <SkeletonPlaceholder.Item
                    width="80%"
                    height={20}
                    borderRadius={6}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </View>
        ))
         :
         <Container>
            <SafeAreaView>
             <StudentsFlatList
                 data={students}
                 ListEmptyComponent = {__listEmptyComponent()}
                 contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
                 refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                 keyExtractor={(students) => students.id}
                 renderItem={({ item }) => (
                     <StudentContainer onPress={() => { navigateToInfo(item)}}>
                          <StudentAvatar
                             source ={{uri: item.avatar}}
                             />
                         <StudentBaseInfo>
                             <StudentName>{item.name}</StudentName>

                             <StudentAdress >
                               <Feather name='map-pin' ></Feather>
                               <Text style={{fontFamily:'RobotoCondensed_300Light', fontSize:12}} >{item.address}</Text>
                              </StudentAdress>
                         </StudentBaseInfo>
                         <StudentOptions>
                             <AcessButton onPress={() => {navigateToInfo(item)}}>
                             <Entypo name="direction" size={20} color={'white'} />
                             </AcessButton>
                         </StudentOptions>
                     </StudentContainer>
                     )
                 }
                 />
             </SafeAreaView>
         </Container>
    }
    </SafeAreaView>
    </>
  )
}

export default StudentList;