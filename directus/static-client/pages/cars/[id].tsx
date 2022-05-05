import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { Car, getCarById } from "../../tools/cars.all";

const CarPage: NextPage<Car> = (car: Car) => {
    return <div>
        <h1>{car.brand}</h1>
        <div>
            <b>Name: </b>{car.name}
        </div>
        <div>
            <b>Erstanmeldung: </b>{car.registration_date}
        </div>
        <div>
            <Link href="/">
                Zur&uuml;ck
            </Link>
        </div>
    </div>
}

export default CarPage;

export const getServerSideProps: GetServerSideProps<Car> = async (context: GetServerSidePropsContext) => {
    const { id } = context.query;

    return {
        props: await getCarById(parseInt(id?.toString() || "0"))
    }
}