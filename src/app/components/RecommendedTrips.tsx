import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RecommendedTrips = async () => {
  async function getTrips() {
    const trips = await prisma.trip.findMany({});

    return trips;
  }
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap lg:text-xl">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      {data ? (
        <div className="flex flex-col items-center mt-5 gap-5 lg:mt-10 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10">
          {data.map((trip: Trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center my-10 w-full">
          <AiOutlineLoading3Quarters
            className="text-primary animate-spin"
            size={32}
          />
        </div>
      )}
    </div>
  );
};

export default RecommendedTrips;
