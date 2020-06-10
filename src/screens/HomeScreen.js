import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const HomeScreen = ({ navigation })=> {
  return (
  <View>
    <Text style={styles.text}>Hello Ashely</Text>
    <Button
      onPress={ () => navigation.navigate('Components') }
      title="Go to Components"
    />

     <Button
      onPress={ () => navigation.navigate('List') }
      title="Go to List"
    />
      <Button
      onPress={ () => navigation.navigate('Image') }
      title="Go to Image Demo"
    />

     <Button
      onPress={ () => navigation.navigate('Counter') }
      title="Go to Counter Demo"
    />

     <Button
      onPress={ () => navigation.navigate('Color') }
      title="Go to Color Demo"
    />

     <Button
      onPress={ () => navigation.navigate('Square') }
      title="Go to Square Demo"
    />

    <Button
      onPress={ () => navigation.navigate('Text') }
      title="Go to Text Demo"
    />

    <Button
      onPress={ () => navigation.navigate('Box') }
      title="Go to Box Demo"
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
