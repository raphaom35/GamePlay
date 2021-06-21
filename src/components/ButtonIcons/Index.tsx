import React from 'react';
import { View,Text,Image, TouchableOpacity,TouchableOpacityProps } from 'react-native';

 import { styles } from './styles';
import DicordImg from '../../assets/discord.png'
type Props = TouchableOpacityProps&{
    title?:string;

}
export default function ButtonIcons ({title,...rest}:Props) {
  return(
      
          <TouchableOpacity style={styles.container} 
          {...rest} >
            <View style={styles.iconWrapper}>
                <Image source={DicordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
      
  );
}

