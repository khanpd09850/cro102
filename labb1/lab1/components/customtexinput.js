import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const WrapInput = ({title,value,placeholder,onChangText,secureTextEntry,error,}) => {
const [isFocused, setIsFocused] = useState(false);

    return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.inputContainer}>
        <TextInput
        placeholder={placeholder}
        value={value}
        style={[
            styles.input,
            error && styles.inputError,
            isFocused && styles.inputOnFocus,
        ]}
        onChangeText={onChangText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        />

        {error && (
        <MaterialIcons
            name="error"
            size={20}
            color="red"
            style={styles.errorIcon}
        />
        )}
    </View>

    {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
);
};

const styles = StyleSheet.create({
    container: {
    padding: 20,
    },
    title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    },
    inputContainer: {
    position: "relative",
    },
    input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    paddingLeft: 10,
    fontSize: 16,
    },
    inputError: {
    borderColor: "red",
    backgroundColor: "#f8d7da",
    },
    inputOnFocus: {
    borderColor: "#1ce8e8",
    backgroundColor: "#f2fafa",
    },
    errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    },
    errorIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
},
});

export default WrapInput;
