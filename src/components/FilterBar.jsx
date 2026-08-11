export default function FilterBar({ filters, values, onChange }) {
  return (
    <div className="grid gap-4 border border-stone-dark bg-white p-4 sm:grid-cols-2 lg:grid-cols-5 lg:p-5">
      {filters.map((filter) => (
        <div key={filter.key}>
          <label
            htmlFor={`filter-${filter.key}`}
            className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-gray"
          >
            {filter.label}
          </label>
          <select
            id={`filter-${filter.key}`}
            value={values[filter.key]}
            onChange={(e) => onChange(filter.key, e.target.value)}
            className="mt-2 w-full border border-stone-dark bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-navy"
          >
            <option value="">All</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  )
}
