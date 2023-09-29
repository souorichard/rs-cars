import { useFetch } from '../../../../hooks/useFetch';
import Card from '../Card';

export default function List() {
  const { data } = useFetch();

  return (
    <div className="w-full px-3 flex flex-wrap gap-6">
      {data?.map((car) => (
        <Card key={car.id} model={car.nome} />
      ))}
    </div>
  )
}