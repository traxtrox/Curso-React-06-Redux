import React from 'react';
import { TextInput, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ccf7',
        height: 34,
        alignSelf: 'stretch',
        padding: 8,
        margin: 20
    }
});

const Input = ({onChange, value, onSubmit}) => {
    return (
        <TextInput
            style={styles.input}
            onSubmitEditing={onSubmit}
            onChangeText={onChange}
            value={value}
            placeholder="Add Item"
            placeholderTextColor="#999"

            />
    );
}

export default Input;