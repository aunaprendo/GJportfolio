const { useState } = React;

export function Board() {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("Next Player:");

  function getWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8],
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function turns(index) {
    if (board[index] || status.includes("Winner") || status === "It's a Draw!") {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;

    const winner = getWinner(newBoard);

    if (winner) {
      setBoard(newBoard);
      setStatus(`Winner: ${winner}`);
      return;
    }

    if (!newBoard.includes(null)) {
      setBoard(newBoard);
      setStatus("It's a Draw!");
      return;
    }

    setBoard(newBoard);

    setPlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setStatus("Next Player:");
  }

  return (
    <>
      <div className="gameWindow">
        <h1>Tic-Tac-Toe</h1>
        <h2>{status === "Next Player:" ? `${status} ${player}` : status}</h2>

        <div className="grid">
          {board.map((square, index) => (
            <button
              key={index}
              className={`square ${square === "X" ? "x" : square === "O" ? "o" : ""}`}
              onClick={() => turns(index)}
              disabled={square !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {square}
            </button>
          ))}
        </div>

        <button id="reset" className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
