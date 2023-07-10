"use client";

import React from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Button from "@/components/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true };
  }>;
  fetchReservations: () => void;
}

function UserReservationItem({
  reservation,
  fetchReservations,
}: UserReservationItemProps) {
  const router = useRouter();
  const { trip } = reservation;

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast.error("Ocorreu um erro ao cancelar sua reserva!", {
        position: "bottom-center",
      });
    }

    toast.success("Reserva cancelada com sucesso!", {
      position: "bottom-center",
    });

    fetchReservations();
  };

  return (
    <div>
      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-l-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              alt={trip.name}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 text-primaryDarker border-b border-l-grayLighter border-solid">
          <h2 className="font-semibold text-primaryDarker text-base">
            Sobre a viagem
          </h2>
          <h3 className="text-sm mt-2">Data</h3>
          <div className="flex items-center gap-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
            {" - "}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
          </div>

          <h3 className="mt-5 text-sm">Hóspedes</h3>
          <p className="text-sm mt-1 mb-2">{reservation.guests} hóspedes</p>
        </div>

        <h3 className="font-semibold text-base text-primaryDarker mt-3">
          Informações sobre o preço
        </h3>
        <div className="flex justify-between mt-2">
          <p className="text-primaryDarker text-sm">Total</p>
          <p className="font-medium text-sm">
            R${Number(reservation.totalPaid)}
          </p>
        </div>

        <Button className="mt-5" variant={"danger"} onClick={handleDeleteClick}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

export default UserReservationItem;
