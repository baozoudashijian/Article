import React, {useState} from 'react'
import Square from "../Square";


const Board = (props) => {

    const { squares, handleClick } = props
    // const [squares, setSquares] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)
    // const [status, setStatus] = useState('Next player: X')
    //
    // const handleClick = (i) => {
    //     const temp = squares.slice();
    //     // 判断输赢
    //     const winner = calculateWinner(temp)
    //     console.log(winner)
    //     if (winner) {
    //         setStatus('Winner: ' + winner);
    //     } else {
    //         // 赢了的话棋盘就不允许操作了.
    //         temp[i] = xIsNext ? "X" : "O";
    //         setXIsNext(!xIsNext)
    //         setSquares(temp)
    //         setStatus(`Next player: ${!xIsNext ? 'X' : 'O'}`);
    //     }
    // }

    const renderSquare = (i) => {
        return <Square
            value={squares[i]}
            handleClick={() => handleClick(i)}
        />;
    }

    return (
        <div>
            <div className="status">{}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board