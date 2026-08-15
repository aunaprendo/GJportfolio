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
          <div className="row1">
            <button
              className="square"
              onClick={() => turns(0)}
              disabled={board[0] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[0]}
            </button>
            <button
              className="square"
              onClick={() => turns(1)}
              disabled={board[1] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[1]}
            </button>
            <button
              className="square"
              onClick={() => turns(2)}
              disabled={board[2] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[2]}
            </button>
          </div>

          <div className="row2">
            <button
              className="square"
              onClick={() => turns(3)}
              disabled={board[3] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[3]}
            </button>
            <button
              className="square"
              onClick={() => turns(4)}
              disabled={board[4] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[4]}
            </button>
            <button
              className="square"
              onClick={() => turns(5)}
              disabled={board[5] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[5]}
            </button>
          </div>

          <div className="row3">
            <button
              className="square"
              onClick={() => turns(6)}
              disabled={board[6] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[6]}
            </button>
            <button
              className="square"
              onClick={() => turns(7)}
              disabled={board[7] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[7]}
            </button>
            <button
              className="square"
              onClick={() => turns(8)}
              disabled={board[8] !== null || status.includes("Winner") || status === "It's a Draw!"}
            >
              {board[8]}
            </button>
          </div>
        </div>

        <button id="reset" className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
