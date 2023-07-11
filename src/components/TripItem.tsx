import { Trip } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col">
        <div className="relative h-[280px] w-[280px] lg:h-[320px] lg:w-[320px]">
          <Image
            src={trip.coverImage}
            className="rounded-lg shadow-md"
            style={{
              objectFit: "cover",
            }}
            fill
            alt={trip.name}
          />
        </div>

        <h3 className="text-primaryDarker font-medium text-sm mt-2 lg:text-base">
          {trip.name}
        </h3>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="lg:text-sm text-grayPrimary">{trip.location}</p>
        </div>

        <p className="lg:text-sm text-grayPrimary">
          <span className="text-primary font-medium">
            R${trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </Link>
  );
};

export default TripItem;
