import { LuMenu, LuUser } from 'react-icons/lu';

import Icon from '../Icon';
import Logo from '../Logo';
import SearchEngine from '../SearchEngine';
import Link from './components/Link';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-24 px-20 flex justify-between items-center bg-neutral-950 shadow-lg shadow-black/40">
      <div className="flex justify-center items-center gap-20">
        <Logo />
        <div className="flex items-center gap-8">
          <Link path="/" name="Home" />
          <Link path="/models" name="Models" />
          <Link path="/store" name="Store" />
        </div>
      </div>
      <div className="flex itens-center gap-6">
        <SearchEngine type='text' placeholder='Buscar modelos' />
        <Icon icon={LuUser} className="text-3xl text-white" />
        <Icon icon={LuMenu} className="text-3xl text-white" />
      </div>
    </div>
  );
}
