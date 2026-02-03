import React from 'react'
import FilterPill from './FilterPill';
import ProjectRow from './ProjectRow';

const ProjectSummary = () => {
  return (
 <div className="w-full p-6 rounded-2xl bg-[#f3ebe4]">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Project summary
        </h3>

        <div className="flex items-center gap-3">
          <FilterPill label="Project" />
          <FilterPill label="Project manager" />
          <FilterPill label="Status" />
        </div>
      </div>

      {/* Table */}
      <div>
        {/* Table Head */}
        <div className="grid grid-cols-5 pb-3 border-b border-gray-300 text-sm font-medium text-gray-700">
          <div>Name</div>
          <div>Project manager</div>
          <div>Due date</div>
          <div>Status</div>
          <div className="text-right">Progress</div>
        </div>

        {/* Dynamic Rows */}
        {projectData.map((project) => (
          <ProjectRow
            key={project.id}
            name={project.name}
            manager={project.manager}
            date={project.date}
            status={project.status}
            progress={project.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSummary