import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Quitamos el default y lo exportamos directamente por su nombre
export function Square({ value, isWinning, onClick }) {
    return (
        <TouchableOpacity 
            style={[
                styles.square, 
                isWinning ? styles.winning : null,
                value === 'X' ? styles.squareX : value === 'O' ? styles.squareO : null
            ]}
            onPress={onClick}
            activeOpacity={0.7}
            accessibilityLabel={value ? `Celda con ${value}` : 'Celda vacía'}
        >
            <Text style={[
                styles.squareText,
                value === 'X' ? styles.textX : value === 'O' ? styles.textO : null,
                isWinning ? styles.winningText : null
            ]}>
                {value}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    square: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        borderRadius: 4,
    },
    squareText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    textX: {
        color: '#1890ff',
    },
    textO: {
        color: '#f5222d',
    },
    squareX: {
        backgroundColor: '#e6f7ff',
    },
    squareO: {
        backgroundColor: '#fff1f0',
    },
    winning: {
        backgroundColor: '#52c41a',
        borderColor: '#52c41a',
    },
    winningText: {
        color: '#fff',
    },
});
