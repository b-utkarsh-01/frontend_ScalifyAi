import React from "react";
import ProgressRing from "./ProgressRing";

const projects = [
  {
    name: "Kumar Residence",
    manager: "Om prakash sao",
    dueDate: "May 25, 2023",
    status: "Completed",
    progress: 100,
    statusColor: "green",
  },
  {
    name: "Sharma Villa",
    manager: "Neilsan mando",
    dueDate: "Jun 20, 2023",
    status: "Delayed",
    progress: 35,
    statusColor: "yellow",
  },
  {
    name: "Tech Park Office",
    manager: "Tiruvelly priya",
    dueDate: "July 13, 2023",
    status: "At risk",
    progress: 68,
    statusColor: "red",
  },
];

const statusStyles = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
};
const statusToColor = {
  Completed: "green",
  Delayed: "yellow",
  "At risk": "red",
};

const ProjectSummary = () => {
  return (
    <div className="bg-[#f7efe9] rounded-xl p-4 sm:p-6 sm:w-[68%] max-w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <h2 className="text-lg font-semibold text-gray-800">
          Project summary
        </h2>

        <div className="flex flex-wrap gap-2">
          {["Project", "Project manager", "Status"].map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 bg-white px-3 py-2 rounded-full text-sm text-gray-600 shadow-sm"
            >
              {item}
              <i className="ri-arrow-down-s-line"></i>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table Header */}
      <div className="hidden sm:grid grid-cols-5 text-sm text-gray-500 font-medium mb-3">
        <span>Name</span>
        <span>Project manager</span>
        <span>Due date</span>
        <span>Status</span>
        <span className="text-right">Progress</span>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {projects.map((p, index) => (
          <div key={index}>
            {/* Desktop Row */}
            <div className="hidden sm:grid grid-cols-5 items-center">
              <span>{p.name}</span>
              <span className="text-gray-600">{p.manager}</span>
              <span className="text-gray-600">{p.dueDate}</span>
              <span
                className={`px-3 py-1 text-xs rounded-full w-fit ${statusStyles[p.statusColor]}`}
              >
                {p.status}
              </span>
              <div className="flex justify-end">
                <ProgressRing
                  progress={p.progress}
                  color={statusToColor[p.status]}
                />
              </div>
            </div>

            {/* Mobile Card */}
            <div className="sm:hidden bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.manager}</p>
                  <p className="text-sm text-gray-500">{p.dueDate}</p>
                </div>
                <ProgressRing
                  progress={p.progress}
                  color={statusToColor[p.status]}
                />
              </div>

              <div className="mt-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${statusStyles[p.statusColor]}`}
                >
                  {p.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSummary;
