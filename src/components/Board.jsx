import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

/**
 * Componente Square integrado directamente aquí para evitar errores de importación
 */
function Square({ value, isWinning, onClick }) {
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

/**
 * Componente Board Principal
 */
function Board({ squares, winningLine, onSquareClick }) {
  
  const renderSquare = (num) => {
    const isWinning = winningLine && winningLine.includes(num);
    return (
      <Square
        key={num}
        value={squares[num]}
        isWinning={isWinning}
        onClick={() => onSquareClick(num)}
      />
    );
  };

  const indices = Array.from(Array(3).keys()); 

  const rows = indices.map(row => (
    <View key={row} style={styles.boardRow}>
      {indices.map(col => renderSquare(row * 3 + col))}
    </View>
  ));

  return <View style={styles.board}>{rows}</View>;
}

// Estilos unificados para ambos componentes
const styles = StyleSheet.create({
  board: {
    backgroundColor: '#ccc', 
    padding: 2,
    borderRadius: 8,
    marginVertical: 15,
  },
  boardRow: {
    flexDirection: 'row', 
  },
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

export default Board;
