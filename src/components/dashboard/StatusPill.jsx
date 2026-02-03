const StatusPill = ({ status }) => {
  const statusStyles = {
    Completed: "bg-green-100 text-green-700",
    Delayed: "bg-yellow-100 text-yellow-700",
    "At risk": "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};
