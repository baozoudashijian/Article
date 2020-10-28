import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Board from "./components/Board";
import './index.css';
import {calculateWinner} from './utils'

const Game = () => {

    const [history, setHistory] = useState([{squares: Array(9).fill(null)}])
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState('Next player: X')
    const [stepNumber, setStepNumber] = useState(0)

    const handleClick = (i) => {
        console.log(history)
        const historyCopy = history.slice(0, stepNumber + 1);
        const current = historyCopy[0, historyCopy.length - 1];
        const temp = current.squares.slice();
        // 判断输赢
        const winner = calculateWinner(temp)
        console.log(winner)
        // 赢了的话棋盘就不允许操作了.
        if (winner) {
            setStatus('Winner: ' + winner);
        } else {
            // 如果该位置存在棋子则不允许操作.
            if (!temp[i]) {
                temp[i] = xIsNext ? "X" : "O";
                setHistory(history.concat([{squares: temp}]))
                setXIsNext(!xIsNext)
                setStatus(`Next player: ' ${!xIsNext ? 'X' : 'O'}`)
                setStepNumber(history.length)
            }
        }
    }
    // 这又是一个技巧.
    const moves = history.map((step, move) => {
        // move等于0的话就是回到初始状态.
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    })

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
    }


    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={history[stepNumber].squares}
                    handleClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
