import React, { useState } from 'react';
import { View,Text,FlatList,ScrollView,Platform,KeyboardAvoidingView} from 'react-native';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';
import Background from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';

import { Feather } from '@expo/vector-icons';

 import { styles } from './styles';
import { theme } from '../../global/styles/Theme';
import GuildIcon from '../../components/GuildIcon';
import Button from '../../components/Button/Index';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';




export function AppointmentCreate() {
  const [category,setCategory] =useState('');
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  function handleCloseGuilds(){
    setOpenGuildsModal(false);
  }
  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }
  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios'? 'padding': 'height'}
    style={styles.container}
    >
      <ScrollView>
      <Background>
          <Header title="Agendar partida" 
          />
          <Text 
          style={[styles.label,
          {marginLeft:24,marginTop:36,marginBottom:18}]}>
            Categoria
          </Text>
          <CategorySelect 
          hasCheckBox
          categorySelected={category} 
          setCategory={setCategory}
          />
          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
                <View style={styles.select}>
                  { guild.icon 
                    ? <GuildIcon guildId='1' iconId='1' /> 
                    :<View style={styles.image} />}
                  <View style={styles.selectBody} >
                      <Text style={styles.label}>
                        { guild.name 
                          ? guild.name 
                          :'Selecione um servidor'}
                        </Text>
                  </View>
                  <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
                </View>
            </RectButton>
            
            <View style={styles.field}>
              <View>
              <Text style={[styles.label, { marginBottom: 12 } ]}>
                  Dia e mês
                </Text>
                  <View style={styles.column}>
                      <SmallInput maxLength={2}  />
                      <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2}  />
                  </View>
              </View> 

              <View>
              <Text style={[styles.label, { marginBottom: 12 } ]}>
                Hora e minuto
                </Text>
                  <View style={styles.column}>
                      <SmallInput maxLength={2}  />
                      <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2}  />
                  </View>
              </View>   

               
            </View>
            <View style={[styles.field,{marginBottom:12}]} >
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimits}>Max 100 caracteres</Text>
            </View>
            <TextArea 
            multiline 
            maxLength={100} 
            numberOfLines={5} 
            autoCorrect={false} />
          </View>
          <View style={styles.footer}>
            <Button title='Agendar' />
          </View>
      </Background>
      </ScrollView>
      <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>

      </KeyboardAvoidingView>
  );
}

export default AppointmentCreate;