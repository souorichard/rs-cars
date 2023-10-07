import { LuSearch } from 'react-icons/lu';

import Icon from '../Icon';
import { SearchProps } from '../../types/SearchEngine';

export default function SearchEngine({ type, placeholder, search, setSearch, ...props }: SearchProps) {
  return (
    <fieldset className="mr-5 px-3 py-1 flex justify-between items-center gap-2 border border-zinc-400 rounded">
      <input type={type} onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} className="bg-transparent outline-none text-white" {...props} />
      <Icon icon={LuSearch} className="text-lg text-zinc-400" />
    </fieldset>
  );
}
