const ProgressCircle = ({ value }) => {
  const color =
    value === 100
      ? "border-green-500 text-green-700"
      : value < 50
      ? "border-yellow-500 text-yellow-700"
      : "border-red-500 text-red-700";

  return (
    <div
      className={`w-10 h-10 rounded-full border-4 ${color} flex items-center justify-center text-xs font-semibold`}
    >
      {value}%
    </div>
  );
};
