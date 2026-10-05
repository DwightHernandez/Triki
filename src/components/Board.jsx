import React from "react"
import Square from './Square' // Corregido: usualmente es ./Square para rutas relativas
import './Board.css'

/**
 * Componente Board: representa el tablero de 3x3
 * @param {Array} squares - Array con los valores de las 9 celdas
 * @param {Array} winningLine - Array con los índices de la línea ganadora
 * @param {function} onSquareClick - Función que maneja el clic en una celda
 */
function Board({ squares, winningLine, onSquareClick }) {
  // Renderiza el tablero de 3x3
  const renderSquare = (i) => {
    const isWinning = winningLine && winningLine.includes(i)
    return (
      <Square
        key={i}
        value={squares[i]}
        isWinning={isWinning}
        onClick={() => onSquareClick(i)}
      />
    )
  }

  // Crear filas del tablero
  const rows = [0, 1, 2].map(row => (
    <div key={row} className="board-row">
      {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
    </div>
  )) // Corregido: se eliminó un paréntesis extra que causaba error

  // Corregido: se cambió <div/> por </div> para cerrar correctamente el contenedor
  return <div className="board">{rows}</div> 
}

export default Board // Corregido: "defaul" cambiado a "default"
