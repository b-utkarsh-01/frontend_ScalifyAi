const OverviewCard = (props) => {
  const {
    icon,
    iconBG,
    valueType,
    data,
    percentage,   
    trend         // "up" | "down"
  } = props;

  const isIncrease = trend === "up";

  const trendIcon = isIncrease
    ? "ri-arrow-right-up-line"
    : "ri-arrow-right-down-line";

  const trendColor = isIncrease
    ? "text-green-600"
    : "text-red-600";

  const trendText = isIncrease
    ? "increase from last month"
    : "decrease from last month";

  return (
    <div className="p-5 rounded-xl bg-[#ffffff6b] w-full max-w-sm">

      {/* Icon */}
      <div className={`w-12 h-12 rounded-full ${iconBG} flex items-center justify-center`}>
        <i className={`${icon} text-white text-xl`}></i>
      </div>

      {/* Title */}
      <p className="mt-4 text-sm text-gray-500">
        {valueType}
      </p>

      {/* Amount */}
      <h2 className="mt-2 text-xl font-bold text-black">
        {data}
      </h2>

      {/* Growth / Decline */}
      <div className="mt-3 flex items-center gap-2">
        <i className={`${trendIcon} ${trendColor}`}></i>
        <p className="text-sm text-gray-700">
          <span className="font-medium">{percentage}%</span>{" "}
          {trendText}
        </p>
      </div>
    </div>
  );
};

export default OverviewCard;
