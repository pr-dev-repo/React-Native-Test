import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Ashely', age: 28 },
        { name: 'Victor', age: 27 },
        { name: 'Rosy', age: 26 },
        { name: 'Jose', age: 26 },
        { name: 'Juan', age: 25 },
        { name: 'Maggie', age: 60 },
        { name: 'Edwin', age: 59 },
    ];

    return (
        <FlatList
            //horizontal // scroll horizontal
            showsHorizontalScrollIndicator={false} // hide scroll bar below
            keyExtractor={(friend) => friend.name} // key must be unique and string
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }} />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

});

export default ListScreen;