import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hello my friend</Text>

    <Button 
      onPress ={()=> navigation.navigate('Components')}
      title ="Go to Components Demo" 
    />
    <Text></Text>
    <Button
      onPress ={()=>navigation.navigate('List')}
      title ='Go to List Demo'
    />
    <Text></Text>
    <Button
      onPress ={()=>navigation.navigate('Image')}
      title ='Go to Image Demo'
    />
    <Text></Text>
    <Button
      onPress ={()=>navigation.navigate('Counter')}
      title ='Go to Counter Demo'
    />
    <Text></Text>
    <Button
      onPress ={()=>navigation.navigate('Color')}
      title ='Go to Color Demo'
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default HomeScreen;
