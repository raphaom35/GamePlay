import React,{useState} from 'react';
import { View,Text, 
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 import { styles } from './styles';
import IlustrationImG from '../../assets/illustration.png'
import ButtonIcons from '../../components/ButtonIcons/Index';
import Background from '../../components/Background';

export default function SingIn(){
  const navigation = useNavigation();
  const [text,setText] = useState('');
  
  function handleSignIn(){
    navigation.navigate('Home');
  }
  return(
    <Background>
    <View style={styles.container}>
     
      <Image source={IlustrationImG} style={styles.image} 
      resizeMode="stretch"/>      
      <View style={styles.content}>
        <Text style={styles.title}>
        Conecte-se  {'\n'}
        e organize suas {'\n'}
        jogatinas</Text>
        <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {'\n'}
        favoritos com seus amigos
        </Text>
        <ButtonIcons
         title="Entrar com discord"
         activeOpacity={0.7}
         onPress={handleSignIn}
         />

         
      </View>
    </View>
    </Background>
  );
}