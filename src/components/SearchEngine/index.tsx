import { LuSearch } from 'react-icons/lu';

import Icon from '../Icon';

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string
}

export default function SearchEngine({ type, placeholder, ...props }: SearchProps) {
  return (
    <div className="mr-5 px-3 flex justify-between items-center gap-2 bg-white rounded">
      <input type={type} placeholder={placeholder} className="outline-none" {...props} />
      <Icon icon={LuSearch} className="text-lg text-zinc-400" />
    </div>
  );
}
