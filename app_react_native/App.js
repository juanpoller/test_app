import React from 'react'
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native'
//import image from './assets/images/diamond.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Prueba de app</Text> 
       <Image
        source={{uri: 'https://w7.pngwing.com/pngs/104/297/png-transparent-red-diamonds-pierre-prxe9cieuse-diamond-cut-carat-red-brick-gemstone-blue-simple.png'}}
        style={styles.images}  
      />
      <Text style={styles.title}>  </Text> 
      <Button
        color='#000'
        title='Apretame'
        onPress={()=> console.log("apretado")}
      />
      <Text style={styles.title}>  </Text> 
      <TouchableOpacity
        style={{ height: 35, width:90, backgroundColor:'#000', padding:7, }}
        onPress={()=> Alert.alert("apretado")}
      >
        <Text style={{color:'#fff', fontWeight: 'bold'}}>APRETAME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#123456",
    },
    title: {
      fontSize: 30,
      color: '#fff'
    },
    images: {
      height: 180, 
      width:180,
      borderRadius: 90
    }
});

export default App;