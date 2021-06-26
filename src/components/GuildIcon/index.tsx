import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';



type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri ='https://logodownload.org/wp-content/uploads/2017/11/discord-logo-5.png'

  return (
    <View style={styles.container}>
      <Image 
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"    
        />
  
    </View>
  )

}
export default GuildIcon;