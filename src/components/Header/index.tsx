import { LuMenu, LuSearch, LuUser } from 'react-icons/lu';

import Icon from '../Icon';
import Logo from '../Logo';
import Link from './Link';

export default function Header() {
  return (
    <div className="h-24 px-20 flex justify-between items-center bg-neutral-800">
      <Logo />
      <div className='flex items-center gap-6'>
        <Link path='/' name='Home' /> 
      </div>
      <div className='flex itens-center gap-6'>
        <Icon icon={LuUser} className='text-3xl text-white' />
        <Icon icon={LuSearch} className='text-3xl text-white' />
        <Icon icon={LuMenu} className='text-3xl text-white' />
      </div>
    </div>
  )
}