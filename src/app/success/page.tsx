"use client";

import Button from "@/components/Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Success = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const handleClick = () => {
    router.push("/my-trips");
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl lg:text-3xl text-center font-semibold text-primary">
          Sua reserva foi realizada com sucesso!
        </h1>
        <p className="text-primaryDarker mt-5 lg:text-lg lg:mt-2">
          Você pode conferir suas reservas aqui:
        </p>
        <Button
          variant={"primary"}
          className="mt-5 px-5 lg:text-lg"
          onClick={handleClick}
        >
          Ver minhas viagens
        </Button>
        <div className="lg:hidden">
          <Image
            src="/success-img.svg"
            alt="Success image"
            width={200}
            height={200}
            className="mt-16"
          />
        </div>
        <div className="lg:block hidden">
          <Image
            src="/success-img.svg"
            alt="Success image"
            width={450}
            height={450}
            className="mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
