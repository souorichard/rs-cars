import Header from '../../components/Header';
import Banner from './components/Banner';
import List from './components/List';

export default function Home() {
  return (
    <div className="h-full mt-24 bg-neutral-950">
      <Header />
      <Banner />
      <div className='p-20 flex flex-col gap-10'>
        <h1 className='text-3xl font-medium text-white uppercase'>Modelos</h1>
        <List />
      </div>
    </div>
  );
}
