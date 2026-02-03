const FilterPill = (prop) => {
  const {label} = prop;
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm text-gray-700 cursor-pointer">
      {label}
      <i className="ri-arrow-down-s-line text-gray-500"></i>
    </div>
  )
}

export default FilterPill