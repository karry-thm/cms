"use client"

import { Car } from "@/lib/Car.interface"
import Link from "next/link";
import { useState } from "react";

interface CarListProps {
    cars: Car[]
}

export function CarList({ cars }: CarListProps) {
    const [orderBy, setOrderBy] = useState<keyof Car>("id");

    function setOrder(field: keyof Car) {
        console.log("Field", field);
        setOrderBy(field);
    }

    return <table>
        <thead>
            <tr>
                <th style={{cursor: "pointer"}} onClick={() => setOrder("id")}>ID</th>
                <th style={{cursor: "pointer"}} onClick={() => setOrder("brand")}>Brand</th>
                <th style={{cursor: "pointer"}} onClick={() => setOrder("name")}>Name</th>
                <th style={{cursor: "pointer"}} onClick={() => setOrder("ps")}>PS</th>
            </tr>
        </thead>
        <tbody>
            {cars
                .sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1)
                .map((car) => <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.brand}</td>
                    <td><Link href={`/${car.id}`}>{car.name}</Link></td>
                    <td>{car.ps}</td>
                </tr>)}
        </tbody>
    </table>
}