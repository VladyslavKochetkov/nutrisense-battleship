const WinLossModal = ({ hitBoard, ships, restart }) => {
  const isMaxShots = Object.keys(hitBoard).length === 50;
  const allShipsSunk = ships.every((ship) => ship.isDestroyed());

  if (!isMaxShots && !allShipsSunk) return null;

  return (
    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 p-4">
      <p>
        {isMaxShots && !allShipsSunk
          ? "You have lost. You used all your shots"
          : "You win all ships are sunk!"}
      </p>
      <button
        className="mt-4 bg-slate-400 px-4 py-2 text-black"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
};

export default WinLossModal;
