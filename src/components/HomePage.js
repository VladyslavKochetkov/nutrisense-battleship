import { useRef, useState } from "react";
import { generateBoard } from "../api/board";
import BattleMap from "./BattleMap";
import ShipsLegend from "./ShipsLegend";
import ShotsRemaining from "./ShotsRemaining";
import WinLossModal from "./WinLossModal";

const HomePage = () => {
  const game = useRef(generateBoard());
  const { board, ships } = game.current;
  const [hitBoard, setHitBoard] = useState({});

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 text-slate-50">
      <div className="flex">
        <WinLossModal
          hitBoard={hitBoard}
          ships={ships}
          restart={() => {
            game.current = generateBoard();
            setHitBoard({});
          }}
        />
        <ShotsRemaining hitBoard={hitBoard} />
        <BattleMap
          board={board}
          hitBoard={hitBoard}
          setHit={(x, y) =>
            setHitBoard({
              ...hitBoard,
              [`${x},${y}`]: true,
            })
          }
        />
        <ShipsLegend ships={ships} />
      </div>
    </div>
  );
};

export default HomePage;
