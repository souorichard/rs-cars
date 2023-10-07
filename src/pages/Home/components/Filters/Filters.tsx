import { filters } from "../../../../mocks/mocks";
import { FilterProps } from "../../../../types/Filter";

type Option = (typeof filters)[0]

export default function Filters({ filter, setFilter }: FilterProps) {
  const isSelectedFilter = (option: Option) => {
    return setFilter(option.id)
  }

  return (
    <div className="flex items-center gap-4">
      {filters.map((option) => (
        <button
          key={option.id}
          data-selected={filter === option.id}
          onClick={() => isSelectedFilter(option)}
          className="px-3 py-1 bg-transparent border border-red-600 hover:opacity-75 data-[selected=true]:bg-red-600 rounded text-red-600 data-[selected=true]:text-white transition-all"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}