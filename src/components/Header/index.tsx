import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>    
        <Image source={{
          uri: 'https://avatars.githubusercontent.com/u/60010539?v=4',
        }} style={styles.image}  />
        <View>
        <Text style={styles.title}>Local{'\n'}Notifications</Text>
        <Text style={styles.nameUser}>Olá, Francisco Menezes</Text>         
          
        </View>
        <TouchableOpacity style={styles.button}>  
        <AntDesign name="logout" size={24} color="#6b6b6b" />
        <Text style={styles.textButton}>Logout</Text>
        </TouchableOpacity>  

   
      
      </View>
      <Text style={styles.label}>
      Domingo, 29 de Janeiro de 2023
     </Text>
    
    </View>
  );
}
