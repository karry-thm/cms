import { Car } from "./Car.interface";
import directusRestClient from "./directus";
import {readItem} from "@directus/sdk/rest";

export async function getCar(id: number) {
    return directusRestClient.request<Car>(readItem("cars", id));
}