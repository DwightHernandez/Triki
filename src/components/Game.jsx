import React, { useState } from 'react';
// Importamos los componentes nativos necesarios
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Board from './Board';
import Footer from './Footer';

/**
 * Función auxiliar que verifica si hay un ganador en el tablero
 */
function calculateWinner(squares) {
    // Reconstruimos el arreglo de forma segura para evitar que se borren los números
    const lines = [];
    lines.push([0, 1, 2]); // Fila superior
    lines.push([3, 4, 5]); // Fila media
    lines.push([6, 7, 8]); // Fila inferior
    lines.push([0, 3, 6]); // Columna izquierda
    lines.push([1, 4, 7]); // Columna central
    lines.push([2, 5, 8]); // Columna derecha
    lines.push([0, 4, 8]); // Diagonal principal
    lines.push([2, 4, 6]); // Diagonal inversa

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] };
        }
    }
    return { winner: null, line: null };
}




function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [gameMode, setGameMode] = useState('pvp'); // 'pvp' o 'computer'
    const [stepNumber, setStepNumber] = useState(0);

    const { winner, line } = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);

    function handleClick(i) {
        if (squares[i] || winner || isDraw) return;

        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';

        setSquares(newSquares);
        setXIsNext(!xIsNext);
        setHistory([...history.slice(0, stepNumber + 1), newSquares]);
        setStepNumber(stepNumber + 1);

        if (gameMode === 'computer' && !calculateWinner(newSquares).winner && !newSquares.every(sq => sq !== null)) {
            setTimeout(() => makeComputerMove(newSquares), 500);
        }
    }

    function makeComputerMove(currentSquares) {
        const emptySquares = currentSquares
            .map((sq, idx) => sq === null ? idx : null)
            .filter(idx => idx !== null);

        if (emptySquares.length === 0) return;

        const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        const newSquares = currentSquares.slice();
        newSquares[randomIndex] = 'O';

        setSquares(newSquares);
        setXIsNext(true);
        setHistory([...history.slice(0, stepNumber + 1), newSquares]);
        setStepNumber(stepNumber + 1);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
    }

    function jumpTo(step) {
        setSquares(history[step]);
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    }

    function getStatus() {
        if (winner) return `¡Ganador: ${winner}!`;
        if (isDraw) return '¡Empate!';
        return `Turno de: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <ScrollView contentContainerStyle={styles.game}>
            <Text style={styles.gameTitle}>Triki</Text>
            
            {/* Selector de Modo de Juego */}
            <View style={styles.gameMode}>
                <TouchableOpacity
                    style={[styles.modeBtn, gameMode === 'pvp' ? styles.activeBtn : null]}
                    onPress={() => { setGameMode('pvp'); resetGame(); }}
                >
                    <Text style={[styles.modeBtnText, gameMode === 'pvp' ? styles.activeBtnText : null]}>2 Jugadores</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.modeBtn, gameMode === 'computer' ? styles.activeBtn : null]}
                    onPress={() => { setGameMode('computer'); resetGame(); }}
                >
                    <Text style={[styles.modeBtnText, gameMode === 'computer' ? styles.activeBtnText : null]}>vs Computadora</Text>
                </TouchableOpacity>
            </View>

            {/* Estado del Turno / Ganador */}
            <View style={styles.gameInfo}>
                <View style={[styles.status, winner ? styles.winnerStatus : null, isDraw ? styles.drawStatus : null]}>
                    <Text style={styles.statusText}>{getStatus()}</Text>
                </View>
            </View>

            {/* Tablero (Debes adaptar este componente también) */}
            <Board
                squares={squares}
                winningLine={line}
                onSquareClick={handleClick}
            />

            {/* Botón de Reinicio */}
            <TouchableOpacity style={styles.resetBtn} onPress={resetGame}>
                <Text style={styles.resetBtnText}>Reiniciar Juego</Text>
            </TouchableOpacity>

            {/* Historial de Jugadas */}
            {history.length > 1 && (
                <View style={styles.history}>
                    <Text style={styles.historyTitle}>Historial de Jugadas</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.historyList}>
                        {history.map((_, step) => (
                            <TouchableOpacity
                                key={step}
                                style={[styles.historyBtn, step === stepNumber ? styles.currentHistoryBtn : null]}
                                onPress={() => jumpTo(step)}
                            >
                                <Text style={[styles.historyBtnText, step === stepNumber ? styles.currentHistoryBtnText : null]}>
                                    {step === 0 ? 'Inicio' : `Mov. ${step}`}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}

            <Footer />
        </ScrollView>
    );
}

// Estilos nativos equivalentes al CSS original
const styles = StyleSheet.create({
    game: {
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%',
    },
    gameTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    gameMode: {
        flexDirection: 'row',
        marginBottom: 15,
        gap: 10,
    },
    modeBtn: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    activeBtn: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    modeBtnText: {
        color: '#333',
        fontWeight: '600',
    },
    activeBtnText: {
        color: '#fff',
    },
    gameInfo: {
        marginBottom: 15,
    },
    status: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#e6f7ff',
    },
    winnerStatus: {
        backgroundColor: '#f6ffed',
    },
    drawStatus: {
        backgroundColor: '#fffbe6',
    },
    statusText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1890ff',
    },
    resetBtn: {
        backgroundColor: '#FF3B30',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    resetBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    history: {
        marginTop: 25,
        width: '90%',
        alignItems: 'center',
    },
    historyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#555',
    },
    historyList: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    historyBtn: {
        backgroundColor: '#eee',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    currentHistoryBtn: {
        backgroundColor: '#52c41a',
    },
    historyBtnText: {
        color: '#555',
    },
    currentHistoryBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Game;
