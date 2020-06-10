import React from 'react';
import { Text, StyleSheet, View } from 'react-native'; // {} import some components

const ComponentsScreen = () => {
    const header = <Text style={styles.textStyle}>Getting started with React Native!</Text>;
    const subHeader = <Text style={styles.subHeaderStyle}>Hello Ashely !</Text>;

    return (
        <View>
            { header }
            { subHeader }
        </View>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 20,
    }
});

export default ComponentsScreen;