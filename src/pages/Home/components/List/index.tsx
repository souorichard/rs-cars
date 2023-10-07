import { cars } from '../../../../mocks/mocks';
import Card from '../Card';

export default function List() {
  return (
    <div className="w-full px-3 flex flex-wrap gap-6">
      {cars.map((car) => (
        <Card key={car.id} model={car.model} category={car.category} />
      ))}
    </div>
  )
}