import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Car, Cars, getAllCars } from '../tools/cars.all'

const Home: NextPage<Cars> = (cars: Cars) => {
  return <div>
    <h1>Verf&uuml;gbare Fahrzeuge</h1>
    <ul>
      {cars.cars.map((car: Car) => <li key={car.id}>
        <Link href={`/cars/${car.id}`}>
          {`${car.brand} - ${car.name}`}
        </Link>
      </li>)}
    </ul>
  </div>
}

export default Home

export const getServerSideProps: GetServerSideProps<Cars> = async () => {
  return {
    props: await getAllCars()
  }
}