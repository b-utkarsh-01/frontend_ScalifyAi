import describeArc from "./describeArc";
import polarToCartesian from "./polarToCartesian";

const OverallProgress = () => {
  const completed = 26;
  const delayed = 35;
  const ongoing = 35;
  const total = completed+delayed+ongoing;

  const cx = 110;
  const cy = 110;
  const r = 90;
  const stroke = 12;

  const completedAngle = (completed / total) * 180;
  const delayedAngle = (delayed / total) * 180;
  const ongoingAngle = (ongoing / total) * 180;

  let start = 0;

  const completedArc = describeArc(cx, cy, r, start, start + completedAngle);
  start += completedAngle;

  const delayedArc = describeArc(cx, cy, r, start, start + delayedAngle);
  start += delayedAngle;

  const ongoingArc = describeArc(cx, cy, r, start, start + ongoingAngle);

  const progressPercent = Math.round((completed / total) * 100);

  return (
    <div className="bg-[#f7efe9] rounded-2xl p-6 max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Overall Progress</h2>
        <button className="bg-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
          All <i className="ri-arrow-down-s-line" />
        </button>
      </div>

      {/* Gauge */}
      <div className="relative flex justify-center">
        <svg width="220" height="130">
          {/* RULER */}
          {[...Array(41)].map((_, i) => {
            const angle = (i / 40) * 180;
            const inner = polarToCartesian(cx, cy, r + 10, angle);
            const outer = polarToCartesian(cx, cy, r + 20, angle);

            return (
              <line
                key={i}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="#9ca3af"
                strokeWidth={i % 5 === 0 ? 2 : 1}
              />
            );
          })}

          {/* Segments */}
          <path d={completedArc} stroke="#22c55e" strokeWidth={stroke} fill="none" strokeLinecap="round" />
          <path d={delayedArc} stroke="#facc15" strokeWidth={stroke} fill="none" strokeLinecap="round" />
          <path d={ongoingArc} stroke="#f97316" strokeWidth={stroke} fill="none" strokeLinecap="round" />
        </svg>

        {/* Center text */}
        <div className="absolute top-12 text-center">
          <p className="text-3xl font-bold">{progressPercent}%</p>
          <p className="text-gray-500 text-sm">Completed</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 text-center mt-6">
        <div>
          <p className="text-xl font-semibold">{total}</p>
          <p className="text-sm text-gray-500">Total projects</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-green-600">{completed}</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-yellow-500">{delayed}</p>
          <p className="text-sm text-gray-500">Delayed</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-orange-500">{ongoing}</p>
          <p className="text-sm text-gray-500">On going</p>
        </div>
      </div>
    </div>
  );
};
export default OverallProgress;