import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const ViewExample = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello World!</Text>
        </SafeAreaView>
    );
};

export default ViewExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})