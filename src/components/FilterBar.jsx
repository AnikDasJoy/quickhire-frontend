const FilterBar = ({ location, setLocation, category, setCategory }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Chittagong">Chittagong</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="">All Categories</option>
        <option value="Engineering">Engineering</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
};

export default FilterBar;