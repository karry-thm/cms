import { getCars } from "@/lib/getCars.function"
import { DIRECTUS_URL } from "@/lib/params";
import { CarList } from "./CarList.component";

export default async function Home() {
  const cars = await getCars();

  return <div>
    <h1>{DIRECTUS_URL}</h1>
    <div>
      <CarList cars={cars} />
    </div>
  </div>
}
