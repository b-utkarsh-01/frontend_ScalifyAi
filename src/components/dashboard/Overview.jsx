import OverviewCard from "../../components/dashboard/OverviewCard"
const Overview = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="w-full flex items-center justify-between">
        <h3 className="text-xl font-medium text-gray-800">
          Overview
        </h3>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full cursor-pointer">
          <span className="text-xs text-gray-700">
            Last 30 days
          </span>
          <i className="ri-arrow-down-s-line text-sm text-gray-600"></i>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 ">
        <OverviewCard 
          icon="ri-bar-chart-2-line" 
          iconBG="bg-[#d398e6]" 
          valueType="This Month" 
          data="$53,00989" 
          percentage="10" 
          trend = 'down'
        />
        
        <OverviewCard 
          icon="ri-shopping-bag-3-line" 
          iconBG="bg-[#E89271]" 
          valueType="Active Vendors" 
          data="$53,00989" 
          percentage="10" 
          trend="up"
        />

        <OverviewCard 
          icon="ri-time-line" 
          iconBG="bg-[#70A1E5]" 
          valueType="Collected" 
          data="$53,00989" 
          percentage="10" 
          trend="up" 
        />

        <OverviewCard 
          icon="ri-user-line" 
          iconBG="bg-[#F0C274]" 
          valueType="New Lead" 
          data="$53,00989" 
          percentage="10" 
          trend="up" 
        />
      </div>
    </div>
  )
}

export default Overview