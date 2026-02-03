const ProgressRing = ({ progress, color }) => {
  const radius = 16;
  const stroke = 4;
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  const strokeColor =
    color === "green"
      ? "#22c55e"
      : color === "yellow"
      ? "#facc15"
      : "#ef4444";

  return (
    <div className="relative w-12 h-12">
      <svg
        height="48"
        width="48"
        viewBox="0 0 48 48"
        className="-rotate-90"
      >
        {/* background */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="24"
          cy="24"
        />

        {/* progress */}
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="24"
          cy="24"
          className="transition-all duration-500"
        />
      </svg>

      {/* Center text */}
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-800">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressRing;
