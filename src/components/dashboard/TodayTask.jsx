import { useState } from "react";

const tabs = [
  { name: "All", count: 10 },
  { name: "Important", count: null },
  { name: "Notes", count: 5 },
  { name: "Links", count: 10 },
];

const tasksData = [
  {
    id: 1,
    title: "Underground utilities checked",
    status: "Approved",
    checked: true,
  },
  {
    id: 2,
    title: "Site clearing completed",
    status: "In review",
    checked: true,
  },
  {
    id: 3,
    title: "Boundary marking verified",
    status: "In review",
    checked: true,
  },
  {
    id: 4,
    title: "Soil testing report available",
    status: "On going",
    checked: false,
  },
  {
    id: 5,
    title: "Safety barriers installed",
    status: "Approved",
    checked: true,
  },
];

const statusStyles = {
  Approved: "bg-green-100 text-green-700",
  "In review": "bg-red-100 text-red-600",
  "On going": "bg-orange-100 text-orange-600",
};

const TodayTask = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-[#f7efe9] rounded-2xl p-6 sm:w-[68%] ">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Today task</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`relative pb-3 text-sm font-medium flex items-center gap-2
              ${
                activeTab === tab.name
                  ? "text-blue-600"
                  : "text-gray-500"
              }`}
          >
            {tab.name}
            {tab.count !== null && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                {tab.count}
              </span>
            )}

            {activeTab === tab.name && (
              <span className="absolute left-0 -bottom-[1px] h-0.5 w-full bg-blue-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Task list */}
      <div className="space-y-4">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              {task.checked ? (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
                  <i class="ri-check-line"></i>
                </span>
              ) : (
                <span className="w-5 h-5 rounded-full border border-gray-400"></span>
              )}

              <p className="text-sm text-gray-800">
                {task.title}
              </p>
            </div>

            {/* Status */}
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium self-start sm:self-auto
                ${statusStyles[task.status]}`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayTask;
