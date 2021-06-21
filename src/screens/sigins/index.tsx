import React,{useState} from 'react';
import { View,Text, 
  Image,
  StatusBar
} from 'react-native';

 import { styles } from './styles';
import IlustrationImG from '../../assets/illustration.png'
import ButtonIcons from '../../components/ButtonIcons/Index';
export default function SingIn(){
  const [text,setText] = useState('');
  
  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
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
         activeOpacity={0.7}/>
      </View>
    </View>
  );
}