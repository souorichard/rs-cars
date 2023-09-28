import { LuSearch } from 'react-icons/lu';

import Icon from '../Icon';

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string
}

export default function SearchEngine({ type, placeholder, ...props }: SearchProps) {
  return (
    <fieldset className="mr-5 px-3 py-1 flex justify-between items-center gap-2 border border-zinc-400 rounded">
      <input type={type} placeholder={placeholder} className="bg-transparent outline-none text-white" {...props} />
      <Icon icon={LuSearch} className="text-lg text-zinc-400" />
    </fieldset>
  );
}
