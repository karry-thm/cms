import { Car } from "./Car.interface";
import directusRestClient from "./directus";
import {readItems} from "@directus/sdk/rest";

export async function getCars() {
    return directusRestClient.request<Car[]>(readItems("cars"));
}