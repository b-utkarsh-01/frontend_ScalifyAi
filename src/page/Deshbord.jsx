import SearchBar from '../components/dashboard/SearchBar'
import Overview from '../components/dashboard/Overview'
import ProjectSummary from '../components/dashboard/ProjectSummary'
import OverallProgress from '../components/dashboard/OverallProgress'
import TodayTask from '../components/dashboard/TodayTask'
import ProjectsWorkload from '../components/dashboard/ProjectsWorkload'

const Deshbord = () => {
  return (
    <div className='p-[20px] bg-[#ebdfd7] flex flex-col gap-8 '>
      <SearchBar userName="" roll="" />

      <Overview ThisMonth="" ActiveVendors="" Collected="" />

      <div className='Deshboard_Rap_ProjectSummary_and_OverallProgress flex flex-col sm:flex-row w-full justify-between gap-5 sm:gap-0'>
        <ProjectSummary Name="" ProjectManager="" Duedate="" Status="" Progress="" />
        <OverallProgress TotalProjects="" Completed="" Delayed="" OnGoing="" />
      </div>

      <div className='Deshboard_TodayTask_and_ProjectsWorkload flex flex-col sm:flex-row w-full justify-between gap-5 sm:gap-0'>
        <TodayTask Status="" />
        <ProjectsWorkload />
      </div>
    </div>
  )
}

export default Deshbord