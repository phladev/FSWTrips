"use client";

import GoBack from "@/components/GoBack";
import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Trips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrips = async () => {
      setLoading(true);
      const response = await fetch(
        `/api/trips/search?text=${
          searchParams.get("text") ?? ""
        }&startDate=${searchParams.get("startDate")}&budget=${searchParams.get(
          "budget"
        )}`
      );

      const data = await response.json();

      setTrips(data);
      setLoading(false);
    };
    fetchTrips();
  }, []);

  return (
    <>
      <div className="container mx-auto ml-5 lg:hidden">
        <GoBack />
      </div>
      <div className="container mx-auto flex flex-col items-center lg:items-start p-5 lg:pt-10">
        <div className="mb-10 hidden lg:block">
          <GoBack />
        </div>
        <h1 className="text-primaryDarker font-semibold text-xl lg:w-full lg:text-left lg:text-[2.5rem]">
          Viagens Encontradas
        </h1>

        {loading ? (
          <div className="flex justify-center my-10 w-full">
            <AiOutlineLoading3Quarters
              className="text-primary animate-spin"
              size={32}
            />
          </div>
        ) : (
          <>
            <h2 className="text-grayPrimary font-medium mb-5 lg:mt-6 lg:w-full lg:text-left">
              {trips.length > 0
                ? "Listamos as melhores viagens pra você!"
                : "Não encontramos nada nos seus parâmetros! =("}
            </h2>
            <div className="flex flex-col gap-4 lg:mt-10 lg:flex-row gap lg:flex-wrap lg:justify-start lg:gap-10">
              {trips?.map((trip) => (
                <TripItem key={trip.id} trip={trip} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Trips;
