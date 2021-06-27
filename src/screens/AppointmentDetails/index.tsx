import React from 'react';
import { View ,ImageBackground,Text,FlatList} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Background from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Fontisto } from '@expo/vector-icons';

 import { styles } from './styles';
import { theme } from '../../global/styles/Theme';
import BannerImg  from '../../assets/banner.png'
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import ButtonIcons from '../../components/ButtonIcons/Index';

export function AppointmentDetails() {
  const members =[
      {
        id:'1',
        username:'Raphael',
        avatar_url:'https://github.com/raphaom35.png',
        status:'online'
      },
      {
        id:'2',
        username:'Renato',
        avatar_url:'https://github.com/raphaom35.png',
        status:'offline'
      }
  ];
  return (
      <Background>
          <Header title="Detalhes" 

          action={
            <BorderlessButton>
                <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
            </BorderlessButton>
          }
          />
          <ImageBackground 
          source={BannerImg} 
          style={styles.banner}>
            <View style={styles.bannerContent}>
            <Text style={styles.title}>Lendario</Text>
            <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger  sem  perder uma partida da md10</Text>
            </View>
            
          </ImageBackground>
          <ListHeader title='Jogadores' subtitle='Total 3'/>
          <FlatList data={members}
          keyExtractor={item =>item.id}
          renderItem={({item})=>(
            <Member data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          style={styles.members}
          />
          <View style={styles.footer}>
          <ButtonIcons title='Entrar no servidor do Discord'  />
          </View>
      </Background>
  );
}

export default AppointmentDetails;