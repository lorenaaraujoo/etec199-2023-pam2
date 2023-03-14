import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import style from './src/style'
import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={style.container}>
      <LinearGradient
      colors = {['black', 'purple']}
      style = {style.gradientBackground}
      >
      <Image source= {{ uri : 'https://seeklogo.com/images/N/Nike-logo-7FB847344F-seeklogo.com.png'}} 
      style = {style.image}
      />
      </LinearGradient>

    {/* View para entrada de dados */}
      <View style = {style.box}>
        <View style = {style.viewIcons}>
        <Feather name="user" size={24} color="black" />
        <TextInput style = {style.input} placeholder='e-mail'/>
        </View>

        <View style = {style.viewIcons}>
        <Ionicons name="key" size={24} color="black" />
        <TextInput style = {style.input} placeholder='senha'/>
        </View>

        <TouchableOpacity style = {{width: '80%'}}>
          <LinearGradient 
            colors = {['purple', 'blue']}
            style = {style.button}
          >

          <Text style = {style.text}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
