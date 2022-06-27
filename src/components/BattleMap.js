import clsx from "clsx";

const BattleMap = ({ board, setHit, hitBoard }) => {
  return (
    <div
      className={clsx(
        "bg-slate-500",
        Object.keys(hitBoard).length === 50 && "pointer-events-none"
      )}
    >
      {board.map((row, y) => {
        return (
          <div key={`${y}`} className="flex">
            {row.map((tile, x) => (
              <div
                onClick={() => {
                  setHit(x, y);
                  tile?.hit();
                }}
                className={clsx(
                  "flex items-center justify-center h-10 w-10 border border-solid text-2xl font-bold",
                  tile?.ship.isDestroyed() ? "bg-red-200" : "bg-slate-300",
                  hitBoard[`${x},${y}`] && tile?.ship
                    ? "text-red-400"
                    : "text-black"
                )}
              >
                {hitBoard[`${x},${y}`] && "X"}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default BattleMap;
