import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap lg:text-xl">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-between mt-5 lg:mt-10 lg:justify-center lg:gap-48">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=hotel`}
            className="flex flex-col items-center"
          >
            {/* MOBILE */}
            <Image
              width={35}
              height={35}
              src="/hotel-icon.png"
              alt="Hotel"
              className="lg:hidden"
            />
            {/* DESKTOP */}
            <Image
              width={42}
              height={42}
              src="/hotel-icon.png"
              alt="Hotel"
              className="hidden lg:block"
            />
            <p className="text-sm lg:text-base text-grayPrimary">Hotel</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=fazenda`}
            className="flex flex-col items-center"
          >
            <Image
              width={35}
              height={35}
              src="/farm-icon.png"
              alt="Fazenda"
              className="lg:hidden"
            />
            <Image
              width={42}
              height={42}
              src="/farm-icon.png"
              alt="Fazenda"
              className="hidden lg:block"
            />
            <p className="text-sm lg:text-base text-grayPrimary">Fazenda</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=chalé`}
            className="flex flex-col items-center"
          >
            <Image
              width={35}
              height={35}
              src="/cottage-icon.png"
              alt="Chalé"
              className="lg:hidden"
            />
            <Image
              width={42}
              height={42}
              src="/cottage-icon.png"
              alt="Chalé"
              className="hidden lg:block"
            />
            <p className="text-sm lg:text-base text-grayPrimary">Chalé</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=pousada`}
            className="flex flex-col items-center"
          >
            <Image
              width={35}
              height={35}
              src="/inn-icon.png"
              alt="Pousada"
              className="lg:hidden"
            />
            <Image
              width={42}
              height={42}
              src="/inn-icon.png"
              alt="Pousada"
              className="hidden lg:block"
            />
            <p className="text-sm lg:text-base text-grayPrimary">Pousada</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
