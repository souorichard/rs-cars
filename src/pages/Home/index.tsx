import { useState } from 'react';
import Header from '../../components/Header';
import Banner from './components/Banner';
import Filters from './components/Filters/Filters';
import List from './components/List';


export default function Home() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <div className="h-full mt-24 bg-neutral-950">
      <Header search={search} setSearch={setSearch} />
      <Banner />
      <div className='p-20 flex flex-col gap-10'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-medium text-white uppercase'>Modelos</h1>
          <Filters filter={filter} setFilter={setFilter} />
        </div>
        <List />
      </div>
    </div>
  );
}
