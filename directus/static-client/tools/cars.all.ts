import { Directus } from "@directus/sdk";
import { CARS_COLLECTION_NAME, DIRECTUS_CONNECTION_STRING } from "./params";

export interface Cars {
    cars: Car[]
}

export interface Car {
    id: number,
    brand: string,
    name: string,
    registration_date: number
}

console.log(`Using URL for Directus: ${DIRECTUS_CONNECTION_STRING}`)
const directus: Directus<any> = new Directus(DIRECTUS_CONNECTION_STRING);

export const getAllCars = async (): Promise<Cars> => {
    const items = await directus.items(CARS_COLLECTION_NAME).readByQuery({ limit: -1 });
    return {
        cars: items.data?.map((car: any) => {
            return {
                id: car.id,
                name: car.name,
                brand: car.brand,
                registration_date: car.registration_date
            }
        }) || []
    }
}

export const getCarById = async (id: number): Promise<Car> => {
    const item = await directus.items(CARS_COLLECTION_NAME).readOne(id);
    return {
        id: item?.id || 0,
        name: item?.name || "Unbekannter Name",
        brand: item?.brand || "Unbekannter Hersteller",
        registration_date: item?.registration_date || 1900
    }
}