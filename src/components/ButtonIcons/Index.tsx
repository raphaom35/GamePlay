import React from 'react';
import { View,Text,Image} from 'react-native';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';

 import { styles } from './styles';
import DicordImg from '../../assets/discord.png'
type Props = RectButtonProps&{
    title?:string;

}
export default function ButtonIcons ({title,...rest}:Props) {
  return(
      
          <RectButton style={styles.container} 
          {...rest} >
            <View style={styles.iconWrapper}>
                <Image source={DicordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </RectButton>
      
  );
}

