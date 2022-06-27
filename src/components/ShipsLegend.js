import clsx from "clsx";

const ShipsLegend = ({ ships }) => {
  return (
    <div className="mx-4">
      <p>Ships Legend</p>
      <div>
        {ships.map((ship, i) => {
          return (
            <div key={`${i}`} className="flex my-2">
              {[...new Array(ship.length)].map((_, j) => (
                <div
                  key={`${j}`}
                  className={clsx(
                    "w-5 h-5 border",
                    ship.positionIsHit(j)
                      ? "bg-red-200 border-red-400"
                      : "bg-slate-400 border-slate-600 "
                  )}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShipsLegend;
