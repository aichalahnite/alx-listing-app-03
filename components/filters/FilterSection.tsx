const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront", "Mountain View"];

const FilterPill = ({ label }: { label: string }) => (
  <button className="px-4 py-1 m-1 rounded-full border text-sm hover:bg-blue-100">
    {label}
  </button>
);

const FilterSection = () => (
  <div className="flex flex-wrap justify-center my-6">
    {filters.map((f, idx) => <FilterPill key={idx} label={f} />)}
  </div>
);

export default FilterSection;
