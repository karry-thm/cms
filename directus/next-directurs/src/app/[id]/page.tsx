import { getCar } from "@/lib/getCar.function"

export default async function CarPage({ params }: { params: {id: string}}) {
    const car = await getCar(parseInt(params.id));

    return <div>
        <h1>{car.brand}-{car.name}</h1>
        <div>PS: {car.ps}</div>
    </div>
}