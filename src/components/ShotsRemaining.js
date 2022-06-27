const ShotsRemaining = ({ hitBoard }) => {
  return (
    <div className="mx-4">
      <p className="font-bold">Shots Remaining</p>
      {Object.keys(hitBoard).length}/50
    </div>
  );
};

export default ShotsRemaining;
